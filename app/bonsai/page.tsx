import ProductGrid from "../components/ProductGrid";
import { bonsaiProducts } from "../data/products";

export default function BonsaiPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Products
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Bonsai
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            Decorative bonsai plants selected to bring natural beauty, calm, and elegance to indoor and outdoor spaces.
          </p>
        </div>
      </section>
      <ProductGrid
        title="Bonsai Collection"
        subtitle="Beautiful bonsai plants for gifting, home decor, and green lifestyle spaces."
        buttonLabel="Buy Now"
        items={bonsaiProducts}
      />
    </main>
  );
}
