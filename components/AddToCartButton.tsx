"use client";

import { useState, useEffect } from "react";

export default function AddToCartButton() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <div className="w-full">
      <button
        onClick={() => setShowToast(true)}
        className="w-full bg-[#9B59B6] text-white py-4 px-6 rounded-full font-semibold text-base hover:bg-[#7D3C98] transition-colors"
      >
        Add to Cart — $15
      </button>
      {showToast && (
        <div className="mt-3 text-center text-sm text-[#9B59B6] font-medium">
          Added! We&apos;ll have checkout live soon 💜
        </div>
      )}
    </div>
  );
}
