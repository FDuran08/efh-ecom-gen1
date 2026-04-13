import Link from "next/link";
import { getFeatured } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const featured = getFeatured();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #9B59B6 0%, #C39BD3 50%, #FDF4FF 100%)",
          }}
        />

        {/* Decorative blur circles */}
        <div
          className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#E91E8C" }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#ffffff" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-20 blur-2xl pointer-events-none"
          style={{ backgroundColor: "#ffffff" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Signature Scent, Without the Signature Price
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Luxe roll-on perfume oil dupes. Oil-concentrated, long-lasting, $15.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#9B59B6] font-semibold hover:bg-white/90 transition-all shadow-lg text-base"
              >
                Shop Now
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all text-base"
              >
                View All Scents
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section
        className="py-4 px-4 text-center"
        style={{ backgroundColor: "#9B59B6" }}
      >
        <p className="text-white font-medium text-sm sm:text-base">
          ⭐⭐⭐⭐⭐ &nbsp; 158 happy customers and growing · La Quinta, CA
        </p>
      </section>

      {/* Fan Favorites */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B3D] mb-4">
            Fan Favorites
          </h2>
          <p className="text-[#9B59B6] text-lg">
            The scents everyone keeps coming back for.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#9B59B6] text-white font-semibold hover:bg-[#7D3C98] transition-all"
          >
            See All 10 Scents →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F3E8FF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B3D] mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-[#2D1B3D] mb-3">
                Choose Your Scent
              </h3>
              <p className="text-[#9B59B6] text-sm leading-relaxed">
                Browse our catalog of luxury fragrance dupes — each one inspired by an iconic designer scent.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-[#2D1B3D] mb-3">
                Oil-Concentrated Formula
              </h3>
              <p className="text-[#9B59B6] text-sm leading-relaxed">
                Long-lasting, skin-safe, travel-friendly roll-on. More fragrance per drop — without the markup.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-[#2D1B3D] mb-3">
                Shop Anytime
              </h3>
              <p className="text-[#9B59B6] text-sm leading-relaxed">
                No DMs needed. Add to cart, checkout, done. Your favorite scent ships straight to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
