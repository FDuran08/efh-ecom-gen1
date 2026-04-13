"use client";

import { useState } from "react";
import { getAll } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const FILTERS = ["All", "Sweet", "Floral", "Fresh", "Warm", "Dark", "Citrus", "Fruity"];

export default function ProductsPage() {
  const allProducts = getAll();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allProducts
      : allProducts.filter((p) =>
          p.scentFamily.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2D1B3D]">
          All Scents
        </h1>
        <span className="inline-flex items-center justify-center bg-[#9B59B6] text-white rounded-full px-3 py-1 text-sm font-semibold">
          10 scents
        </span>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              activeFilter === filter
                ? "bg-[#9B59B6] text-white border-[#9B59B6]"
                : "bg-white text-[#9B59B6] border-[#9B59B6] hover:bg-[#9B59B6]/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#9B59B6] text-lg">
            No scents match that filter yet. Try a different one!
          </p>
        </div>
      )}

      {/* Bottom Banner */}
      <div className="mt-16 text-center">
        <p className="text-[#C39BD3] text-lg font-medium">
          More scents dropping soon 🌸
        </p>
      </div>
    </div>
  );
}
