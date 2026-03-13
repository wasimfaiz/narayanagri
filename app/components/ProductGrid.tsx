import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

type ProductGridProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  items: Product[];
  showHeader?: boolean;
  viewAllHref?: string;
  limit?: number;
};

export default function ProductGrid({
  title,
  subtitle,
  buttonLabel,
  items,
  showHeader = false,
  viewAllHref,
  limit,
}: ProductGridProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className="section-pad" aria-label={title}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        {showHeader && (
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Products
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-2xl text-base text-[var(--ink-700)]">
                  {subtitle}
                </p>
              </div>
              {viewAllHref && (
                <Link
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-[var(--green-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-800)] md:mt-0"
                  href={viewAllHref}
                >
                  View All
                </Link>
              )}
            </div>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.name}
              className="soft-shadow flex h-full flex-col justify-between rounded-3xl bg-white p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="relative h-44 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink-900)]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-700)]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-base font-semibold text-[var(--green-800)]">
                  {item.price}
                </p>
                <button className="rounded-full border border-[var(--green-700)] px-4 py-2 text-sm font-semibold text-[var(--green-800)] transition hover:bg-[var(--green-700)] hover:text-white">
                  {buttonLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
