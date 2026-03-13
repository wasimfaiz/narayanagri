import ProductGrid from "../components/ProductGrid";
import { toolsProducts } from "../data/products";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Products
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Farm Tools & Equipment
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            Durable, easy-to-use tools for everyday farm work.
          </p>
        </div>
      </section>
      <ProductGrid
        title="Farm Tools & Equipment"
        subtitle="Durable, easy-to-use tools for everyday farm work."
        buttonLabel="Buy Now"
        items={toolsProducts}
      />
    </main>
  );
}
