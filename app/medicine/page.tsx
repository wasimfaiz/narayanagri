import ProductGrid from "../components/ProductGrid";
import { medicineProducts } from "../data/products";

export default function MedicinePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Products
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Plant Medicine & Fertilizers
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            Balanced nutrition and crop protection to keep plants healthy at
            every stage.
          </p>
        </div>
      </section>
      <ProductGrid
        title="Plant Medicine & Fertilizers"
        subtitle="Balanced nutrition and protection to keep crops healthy at every stage."
        buttonLabel="Buy Now"
        items={medicineProducts}
      />
    </main>
  );
}
