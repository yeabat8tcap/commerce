"use client";

import { createCartAndSetCookie } from "components/cart/actions";
import Link from "next/link";
import { useEffect } from "react";

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Clear out the cart on success so they start fresh
    createCartAndSetCookie();
  }, []);

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6 text-center px-4">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold">Order Confirmed!</h1>
      <p className="text-lg text-neutral-500 max-w-md dark:text-neutral-400">
        Thank you for your purchase. We've received your order and will begin
        processing it shortly.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:ring-4 hover:ring-blue-600/20 active:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
