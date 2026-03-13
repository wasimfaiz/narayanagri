import ProductGrid from "../components/ProductGrid";
import { seedProducts } from "../data/products";

export default function SeedsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Products
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Seeds Collection
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            Explore our full range of hybrid and organic seeds, curated for
            consistent germination and stronger yield across India.
          </p>
        </div>
      </section>
      <ProductGrid
        title="Our Seeds Collection"
        subtitle="Hybrid and organic options selected for consistent germination and stronger yield."
        buttonLabel="Buy Now"
        items={seedProducts}
      />
    </main>
  );
}
