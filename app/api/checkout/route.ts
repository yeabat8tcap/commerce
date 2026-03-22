import { getCart } from "lib/local";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy", {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  try {
    const { cartId } = await req.json();

    if (!cartId) {
      return NextResponse.json(
        { error: "Cart ID is required" },
        { status: 400 },
      );
    }

    const cart = await getCart();

    if (!cart || cart.lines.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const lineItems = cart.lines.map((item) => {
      // Amount is usually a string from Shopify mock.ts, parse to float then multiply by 100 for cents
      const amountInCents = Math.round(
        parseFloat(item.cost.totalAmount.amount) * 100,
      );
      return {
        price_data: {
          currency: item.cost.totalAmount.currencyCode.toLowerCase(),
          product_data: {
            name: item.merchandise.product.title,
            images: [item.merchandise.product.featuredImage.url],
          },
          unit_amount: amountInCents / item.quantity, // Stripe wants per-unit cost
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005"}/checkout/cancel`,
      metadata: {
        cartId: cart.id!,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
