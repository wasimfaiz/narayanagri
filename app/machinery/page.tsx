import ProductGrid from "../components/ProductGrid";
import { machineryProducts } from "../data/products";

export default function MachineryPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Products
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Agriculture Machinery
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            Reliable equipment for preparation, planting, irrigation, and
            harvest.
          </p>
        </div>
      </section>
      <ProductGrid
        title="Agriculture Machinery"
        subtitle="Reliable equipment for preparation, planting, irrigation, and harvest."
        buttonLabel="View Details"
        items={machineryProducts}
      />
    </main>
  );
}
