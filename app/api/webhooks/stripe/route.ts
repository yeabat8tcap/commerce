import prisma from "lib/local/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy", {
  apiVersion: "2026-02-25.clover",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "whsec_dummy";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error: any) {
    console.error("Webhook signature verification failed:", error.message);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 },
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const cartId = session.metadata?.cartId;

    if (!cartId) {
      console.error("No cartId found in session metadata");
      return NextResponse.json(
        { error: "No cartId in metadata" },
        { status: 400 },
      );
    }

    try {
      // Retrieve cart to find items and quantities
      const cart = await prisma.cart.findUnique({
        where: { id: cartId },
        include: { lines: true },
      });

      if (cart) {
        // Deduct inventory for each item in the completed checkout
        for (const line of cart.lines) {
          await prisma.productVariant.update({
            where: { id: line.merchandiseId },
            data: {
              inventory: { decrement: line.quantity },
            },
          });
          console.log(
            `Successfully deducted ${line.quantity} from variant ${line.merchandiseId}`,
          );
        }
      } else {
        console.error("Cart not found during webhook processing");
      }
    } catch (error: any) {
      console.error("Error processing webhook inventory deduction:", error);
      return NextResponse.json(
        { error: "Database update failed" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ received: true });
}
