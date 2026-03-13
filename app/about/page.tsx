import Image from "next/image";

const aboutImages = [
  "/images/about-img/WhatsApp%20Image%202026-03-13%20at%202.36.15%20PM.jpeg",
  "/images/about-img/WhatsApp%20Image%202026-03-13%20at%202.36.17%20PM.jpeg",
  "/images/about-img/WhatsApp%20Image%202026-03-13%20at%202.36.17%20PM%20(1).jpeg",
  "/images/about-img/WhatsApp%20Image%202026-03-13%20at%202.36.35%20PM%20(1).jpeg",
];

const stats = [
  { label: "Year Established", value: "2023" },
  { label: "Staff Members", value: "12" },
  { label: "Production Units", value: "2" },
  { label: "Annual Turnover", value: "₹10 Crores" },
];

const values = [
  {
    title: "Integrity First",
    description:
      "Honest business practices and transparent pricing are the foundation of every relationship we build.",
  },
  {
    title: "Farmer-Centric",
    description:
      "We listen to growers, solve real field problems, and deliver inputs that improve outcomes.",
  },
  {
    title: "Sustainable Growth",
    description:
      "We invest in eco-friendly processes, recycling, and energy conservation across operations.",
  },
  {
    title: "Research Driven",
    description:
      "Our team develops better formulations and technologies that increase yield with lower impact.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    detail:
      "Narayana Farmers Agritech (OPC) Pvt. Ltd. established in Patna, Bihar.",
  },
  {
    year: "2024",
    title: "Pan-India Expansion",
    detail:
      "Scaled distribution to serve farmers and partners across key agricultural states.",
  },
  {
    year: "2025",
    title: "Bulk Supply Growth",
    detail:
      "Supplied bulk formulations and raw materials to 10+ agrochemical companies.",
  },
  {
    year: "2026",
    title: "Sustainability Focus",
    detail:
      "Expanded farmer training on sustainable practices and low-impact solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              About Us
            </p>
            <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)] md:text-5xl">
              Narayana Farmers Agritech (OPC) Pvt. Ltd.
            </h1>
            <p className="text-base text-[var(--ink-700)] md:text-lg">
              Since 2023, Narayana Agri Solutions has delivered trusted
              biostimulants, plant growth promoters, insecticides, herbicides,
              fungicides, and technical raw materials across India. We operate
              as a manufacturer, exporter, and supplier under our own brand,
              “Narayana,” while also supporting agrochemical partners with bulk
              formulations and raw ingredients.
            </p>
            <p className="text-base text-[var(--ink-700)] md:text-lg">
              Guided by Managing Director Mr. Saurabh, our team is known for
              reliability, competitive pricing, and farmer-first service. We
              combine field insight, scientific development, and sustainable
              practices to build lasting impact.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={aboutImages[0]}
                alt="Narayana Agri Solutions team"
                width={520}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={aboutImages[1]}
                  alt="Narayana Agri Solutions operations"
                  width={520}
                  height={420}
                  className="h-48 w-full object-cover sm:h-56"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={aboutImages[2]}
                  alt="Narayana Agri Solutions products"
                  width={520}
                  height={420}
                  className="h-48 w-full object-cover sm:h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-shadow rounded-3xl bg-white p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--green-700)]">
                  {stat.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-[var(--ink-900)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad gradient-bg">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px]">
            <Image
              src={aboutImages[3]}
              alt="Sustainable agriculture practices"
              width={720}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Our Purpose
            </p>
            <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
              Driving sustainable, high-yield farming
            </h2>
            <p className="text-base text-[var(--ink-700)] md:text-lg">
              Narayana’s sustainability extends beyond products. We integrate
              recycling, energy conservation, and responsible manufacturing into
              our operations. We also collaborate with farmers and agricultural
              organizations to offer training on eco-friendly farming methods.
            </p>
            <p className="text-base text-[var(--ink-700)] md:text-lg">
              Our R&D investments focus on innovative technology that increases
              yield while reducing environmental impact, helping farmers build
              resilient futures.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Values
            </p>
            <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="soft-shadow rounded-3xl bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--ink-900)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-700)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Milestones
            </p>
            <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
              Our growth journey
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--green-200)] bg-white p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">
                  {item.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--ink-900)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-700)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
