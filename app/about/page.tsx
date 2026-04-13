import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[#2D1B3D] mb-8 leading-tight">
        Born in La Quinta.
        <br />
        Made for Everyone.
      </h1>

      {/* Story */}
      <p className="text-lg text-[#2D1B3D]/80 leading-relaxed mb-12 max-w-xl mx-auto">
        Sugar Cloud Scents started with one idea: luxury fragrance shouldn&apos;t cost $100.
        We craft oil-concentrated roll-on dupes of your favorite high-end scents —
        same vibe, same longevity, fraction of the price. Based in La Quinta, CA.
        Shipping everywhere.
      </p>

      {/* Values Pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-5 py-2 text-sm font-semibold">
          💜 Oil-Concentrated
        </span>
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-5 py-2 text-sm font-semibold">
          🌿 Skin-Safe Formula
        </span>
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-5 py-2 text-sm font-semibold">
          ✈️ Travel-Friendly
        </span>
      </div>

      {/* CTA */}
      <Link
        href="/products"
        className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#9B59B6] text-white font-semibold text-base hover:bg-[#7D3C98] transition-all shadow-md"
      >
        Shop All Scents
      </Link>
    </div>
  );
}
