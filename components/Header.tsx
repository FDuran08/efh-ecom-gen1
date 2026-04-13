"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#C39BD3]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#9B59B6]">☁️ Sugar Cloud Scents</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#2D1B3D] hover:text-[#9B59B6] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-[#2D1B3D] hover:text-[#9B59B6] font-medium transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-[#2D1B3D] hover:text-[#9B59B6] font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Cart Icon + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/" className="relative p-2 text-[#9B59B6] hover:text-[#7D3C98] transition-colors">
              <span className="text-xl">🛍️</span>
              <span className="absolute -top-0.5 -right-0.5 bg-[#E91E8C] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[#2D1B3D] hover:text-[#9B59B6] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-current transform transition-transform duration-200 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transform transition-transform duration-200 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-[#C39BD3]/20 flex flex-col gap-4">
            <Link
              href="/"
              className="text-[#2D1B3D] hover:text-[#9B59B6] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-[#2D1B3D] hover:text-[#9B59B6] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-[#2D1B3D] hover:text-[#9B59B6] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
