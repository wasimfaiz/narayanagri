import Link from "next/link";
import {
  FaArrowRight,
  FaLeaf,
  FaSeedling,
  FaScrewdriverWrench,
  FaShieldHeart,
  FaSpa,
} from "react-icons/fa6";

const services = [
  {
    title: "Seeds",
    description:
      "High-quality hybrid and organic seeds selected for strong germination, resilience, and better harvest planning.",
    points: [
      "Season-ready crop options",
      "Trusted sourcing and quality focus",
      "Suitable for multiple farm needs",
    ],
    href: "/seeds",
    icon: FaSeedling,
  },
  {
    title: "Plant Medicine",
    description:
      "Fertilizers, plant protection products, and crop care solutions that support healthier growth at every stage.",
    points: [
      "Balanced nutrition support",
      "Protection against common crop issues",
      "Reliable solutions for field use",
    ],
    href: "/medicine",
    icon: FaShieldHeart,
  },
  {
    title: "Machinery and Tools",
    description:
      "Agricultural machinery and farm tools are now available together on one page for easier browsing and faster decision-making.",
    points: [
      "Machinery and tools in one place",
      "Equipment for preparation to harvest",
      "Built for daily agricultural work",
    ],
    href: "/machinery",
    icon: FaScrewdriverWrench,
  },
  {
    title: "Organic Food",
    description:
      "A new service focused on naturally grown food products with an emphasis on purity, nutrition, and farmer trust.",
    points: [
      "Naturally grown food products",
      "Everyday staples for healthy living",
      "Quality-led product selection",
    ],
    href: "/organic-food",
    icon: FaLeaf,
  },
  {
    title: "Bonsai",
    description:
      "A dedicated bonsai category featuring decorative living plants for homes, offices, gifting, and green interiors.",
    points: [
      "Three bonsai products added",
      "Ideal for decor and gifting",
      "Easy-to-browse dedicated page",
    ],
    href: "/bonsai",
    icon: FaSpa,
  },
];

const benefits = [
  "Simple product discovery across all core categories",
  "Farmer-focused selection built around practical needs",
  "Cleaner navigation from services page to product pages",
];

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden gradient-bg">
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-[var(--green-200)]/70 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[var(--green-700)]/15 blur-3xl" />
        <div className="relative section-pad">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
                Our Services
              </p>
              <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)] md:text-5xl">
                Practical agricultural services for every stage of farm work.
              </h1>
              <p className="max-w-2xl text-base text-[var(--ink-700)] md:text-lg">
                Explore our core offerings across seeds, plant medicine, machinery and tools, and organic food.
                Each service is organized to help farmers find the right products quickly and confidently.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-white/70 bg-white/85 p-4 text-sm text-[var(--ink-700)] shadow-[0_12px_30px_rgba(31,60,10,0.12)]"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_22px_55px_rgba(31,60,10,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--green-700)]">
                Updated Services
              </p>
              <div className="mt-5 grid gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--green-200)] bg-[var(--cream-50)] p-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-[var(--green-700)]">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-[var(--ink-900)]">
                          {service.title}
                        </p>
                        <p className="mt-1 text-sm text-[var(--ink-700)]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Service Categories
            </p>
            <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
              Everything organized for easy access.
            </h2>
            <p className="max-w-2xl text-base text-[var(--ink-700)]">
              Browse by category and move directly to the page that matches what you need.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="soft-shadow flex h-full flex-col rounded-3xl bg-white p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-xl text-[var(--green-700)]">
                    <Icon />
                  </div>
                  <h3 className="mt-5 heading-font text-2xl text-[var(--ink-900)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--ink-700)] md:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-4 ml-4 list-disc text-sm text-[var(--ink-700)]">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--green-700)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-800)]"
                    href={service.href}
                  >
                    Explore {service.title}
                    <FaArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
