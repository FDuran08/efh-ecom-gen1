"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, [showToast]);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setShowToast(true);
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 overflow-hidden flex flex-col">
      {/* Image Placeholder */}
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className="h-48 flex items-center justify-center relative"
          style={{ backgroundColor: product.imagePlaceholder }}
        >
          <span className="text-4xl">☁️</span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/products/${product.slug}`} className="block flex-1">
          {/* Scent Family Badge */}
          <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-2 py-0.5 text-xs font-medium mb-2">
            {product.scentFamily}
          </span>

          {/* Product Name */}
          <h3 className="font-bold text-[#2D1B3D] text-base mb-1 leading-snug">
            {product.name}
          </h3>

          {/* Dupe of */}
          <p className="text-sm text-gray-500 mb-3">
            Dupe of: {product.dupe_of}
          </p>

          {/* Price */}
          <p className="text-lg font-bold text-[#9B59B6] mb-4">$15</p>
        </Link>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#9B59B6] text-white py-2.5 px-4 rounded-full font-semibold hover:bg-[#7D3C98] transition-colors text-sm"
        >
          Add to Cart
        </button>

        {/* Toast */}
        {showToast && (
          <div className="mt-3 text-center text-sm text-[#9B59B6] font-medium animate-pulse">
            Added! We&apos;ll have checkout live soon 💜
          </div>
        )}
      </div>
    </div>
  );
}
