import { notFound } from "next/navigation";
import { getBySlug, getAll } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

export async function generateStaticParams() {
  const all = getAll();
  return all.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products: same scent family, excluding current
  const all = getAll();
  let related = all.filter(
    (p) => p.scentFamily === product.scentFamily && p.id !== product.id
  );

  // Fill up to 3 if not enough
  if (related.length < 3) {
    const fillers = all
      .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
      .slice(0, 3 - related.length);
    related = [...related, ...fillers];
  }

  related = related.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Left: Image Placeholder */}
        <div className="flex flex-col gap-4">
          <div
            className="w-full min-h-72 md:min-h-96 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: product.imagePlaceholder }}
          >
            <span className="text-6xl">☁️</span>
          </div>
          <p className="text-center text-sm text-gray-400 italic">
            Product images coming soon
          </p>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-5">
          {/* Name */}
          <h1 className="text-3xl font-bold text-[#2D1B3D] leading-tight">
            {product.name}
          </h1>

          {/* Scent Family Badge */}
          <span className="inline-block self-start bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium">
            {product.scentFamily}
          </span>

          {/* Price */}
          <p className="text-3xl font-bold text-[#9B59B6]">$15</p>

          {/* Description */}
          <p className="text-[#2D1B3D] leading-relaxed text-base">
            {product.description}
          </p>

          {/* Dupe of */}
          <div>
            <p className="italic text-gray-600 text-sm">
              Dupe of: {product.dupe_of}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Our version. Your price.
            </p>
          </div>

          {/* Size / Specs */}
          <p className="text-sm text-gray-500">
            10ml Roll-On &nbsp;·&nbsp; Oil-Concentrated &nbsp;·&nbsp; Long-Lasting
          </p>

          {/* Add to Cart */}
          <AddToCartButton />

          {/* How to Apply */}
          <div className="bg-purple-50 rounded-xl p-4">
            <p className="font-semibold text-[#2D1B3D] text-sm mb-1">
              How to Apply
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Roll onto wrists, neck, and inner elbows. Reapply every 4–6 hours.
              Lasts all day.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-[#2D1B3D] mb-6">
            You Might Also Love
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
