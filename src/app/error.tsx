"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-8">
          We&apos;re sorry, but something unexpected happened.
        </p>
        <button
          onClick={reset}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
