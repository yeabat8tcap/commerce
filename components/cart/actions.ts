"use server";

import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from 'lib/local';
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  apiVersion: '2026-02-25.clover',
});

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined
) {
  console.log('addItem called with variant:', selectedVariantId);
  try {
    let cartId = (await cookies()).get('cartId')?.value;
    console.log('Current cartId from cookies:', cartId);

    if (!cartId) {
      console.log('No cartId found, creating new cart...');
      cartId = (await createCart()).id;
      console.log('New cart created with ID:', cartId);
      if (cartId) {
        (await cookies()).set('cartId', cartId);
      }
    }

    if (!selectedVariantId) {
      console.log('Error: No variant ID provided');
      return 'Error adding item to cart';
    }

    console.log('Adding item to cart DB:', selectedVariantId);
    await addToCart([{ merchandiseId: selectedVariantId, quantity: 1 }]);
    console.log('Item added to DB successfully. Revalidating tag...');
    revalidatePath('/', 'layout');
    console.log('Tag revalidated. Add to cart complete.');
  } catch (e) {
    console.error("Error in addItem server action:", e);
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  try {
    const cart = await getCart();

    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (lineItem && lineItem.id) {
      await removeFromCart([lineItem.id]);
      revalidatePath('/', 'layout');
    } else {
      return "Item not found in cart";
    }
  } catch (e) {
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart();

    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (lineItem && lineItem.id) {
      if (quantity === 0) {
        await removeFromCart([lineItem.id]);
      } else {
        await updateCart([
          {
            id: lineItem.id,
            merchandiseId,
            quantity,
          },
        ]);
      }
    } else if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      await addToCart([{ merchandiseId, quantity }]);
    }

    revalidatePath('/', 'layout');
  } catch (e) {
    console.error(e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  let cart = await getCart();
  if (!cart || cart.lines.length === 0) {
    return "Error getting cart or cart is empty";
  }

  let redirectUrl: string | undefined;

  try {
    const lineItems = cart.lines.map((item) => {
      const amountInCents = Math.round(parseFloat(item.cost.totalAmount.amount) * 100);
      return {
        price_data: {
          currency: item.cost.totalAmount.currencyCode.toLowerCase(),
          product_data: {
            name: item.merchandise.product.title,
            images: [new URL(item.merchandise.product.featuredImage.url, process.env.NEXT_PUBLIC_SITE_URL || 'https://commerce.trycephal.com').toString()],
          },
          unit_amount: amountInCents / item.quantity,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR'],
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3005'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3005'}/checkout/cancel`,
      metadata: {
        cartId: cart.id!
      }
    });

    redirectUrl = session.url || undefined;
  } catch (error) {
    console.error('Checkout error:', error);
    return "Error initializing checkout";
  }

  if (redirectUrl) {
    redirect(redirectUrl);
  }
}

export async function createCartAndSetCookie() {
  let cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}
