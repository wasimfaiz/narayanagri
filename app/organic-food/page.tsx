import ProductGrid from "../components/ProductGrid";
import { organicFoodProducts } from "../data/products";

export default function OrganicFoodPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Products
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Organic Food
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            Pure, naturally grown food products sourced with a focus on quality, nutrition, and trust.
          </p>
        </div>
      </section>
      <ProductGrid
        title="Organic Food Collection"
        subtitle="Wholesome everyday staples grown and prepared with natural farming values."
        buttonLabel="Buy Now"
        items={organicFoodProducts}
      />
    </main>
  );
}
