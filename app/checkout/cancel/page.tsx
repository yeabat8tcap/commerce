import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6 text-center px-4">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400">
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold">Order Cancelled</h1>
      <p className="text-lg text-neutral-500 max-w-md dark:text-neutral-400">
        Your checkout process was cancelled. No charges were made.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:ring-4 hover:ring-blue-600/20 active:bg-blue-700"
      >
        Return to Store
      </Link>
    </div>
  );
}
