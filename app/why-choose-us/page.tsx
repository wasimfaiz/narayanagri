import Image from "next/image";
import {
  FaArrowTrendUp,
  FaBookOpen,
  FaChartSimple,
  FaClipboardCheck,
  FaComments,
  FaHandshake,
  FaLeaf,
  FaLightbulb,
  FaMapLocationDot,
  FaPeopleGroup,
  FaRoute,
  FaSeedling,
  FaShieldHeart,
  FaTruckFast,
  FaWheatAwn,
} from "react-icons/fa6";

const pillars = [
  {
    title: "Mushroom Cultivation Mastery",
    description:
      "From substrate selection to harvest cycles, we teach end-to-end cultivation with a focus on yield consistency, market readiness, and long-term profitability.",
    detail:
      "Learners understand spawn preparation, climate control, hygiene routines, and contamination management so every cycle improves in predictability and output.",
    gain:
      "Stable production planning, better grade mushrooms, and confidence to scale batches.",
    points: ["Substrate and spawn planning", "Climate and hygiene control", "Harvest, grading, and storage"],
    image: "/images/whychooseus-img/mashroom cultivation.jpeg",
    tone: "from-[var(--green-700)]/15 via-transparent",
  },
  {
    title: "Flexible Online Learning",
    description:
      "Short modules, clear demonstrations, and expert-led notes make complex techniques easy to repeat. Learn on your schedule and revisit lessons anytime.",
    detail:
      "We break training into focused sessions with downloadable checklists, troubleshooting visuals, and seasonal calendars so progress never feels overwhelming.",
    gain:
      "Consistent learning momentum, less confusion in the field, and faster decision-making.",
    points: ["Bite-sized modules", "Reusable checklists", "Seasonal calendars"],
    image: "/images/whychooseus-img/mashroom online course.jpeg",
    tone: "from-[var(--green-600)]/15 via-transparent",
  },
  {
    title: "On-Ground Guidance",
    description:
      "We meet farmers where they are. Our field teams listen, diagnose, and tailor recommendations based on local climate, resources, and goals.",
    detail:
      "Site visits help us map available inputs, labor patterns, and water access so the plan matches what you can sustain season after season.",
    gain:
      "Practical setups that respect local constraints while improving yield and stability.",
    points: ["Local resource assessment", "Customized crop plans", "Field-ready best practices"],
    image: "/images/hero-img4.jpeg",
    tone: "from-[var(--green-800)]/15 via-transparent",
  },
  {
    title: "Rapid Response Support",
    description:
      "Seasonal problems need fast answers. Our support channels provide timely, practical solutions that keep crops healthy and operations stable.",
    detail:
      "Whether it is temperature swings, pest pressure, or logistics delays, we provide clear steps to protect the crop and reduce losses quickly.",
    gain:
      "Less downtime, fewer crop failures, and more predictable harvest timelines.",
    points: ["Issue diagnosis", "Actionable remedies", "Follow-up check-ins"],
    image: "/images/whychooseus-img/support-img.jpeg",
    tone: "from-[var(--green-700)]/15 via-transparent",
  },
  {
    title: "Advisory Services",
    description:
      "Strategic guidance helps farmers make better decisions on crop planning, input use, and farm operations with less guesswork.",
    detail:
      "Our advisory support focuses on practical recommendations shaped by field realities, seasonal conditions, and long-term business goals.",
    gain:
      "Sharper planning, reduced avoidable mistakes, and more confident day-to-day farm decisions.",
    points: ["Crop and season planning", "Input optimization advice", "Operational decision support"],
    image: "/images/whychooseus-img/advisory.jpeg",
    tone: "from-[var(--green-600)]/15 via-transparent",
  },
  {
    title: "Quality-First Practices",
    description:
      "We promote standards that raise value across the supply chain, from clean production methods to post-harvest handling and packaging.",
    detail:
      "Quality systems keep buyers confident, improve pricing, and build reputation in competitive markets where consistency matters most.",
    gain:
      "Higher buyer trust, better margins, and long-term brand credibility.",
    points: ["Clean production standards", "Post-harvest protocols", "Packaging guidance"],
    image: "/images/testimonial-img.jpeg",
    tone: "from-[var(--green-900)]/15 via-transparent",
  },
];

const values = [
  {
    title: "Practical, Not Theoretical",
    description:
      "Every program is designed for real farm conditions, so techniques translate directly into measurable results.",
    detail:
      "We teach methods that respect local constraints like budget, water availability, and labor schedules, so adoption feels realistic.",
    outcome: "Farmers see visible improvement within the very first crop cycles.",
  },
  {
    title: "Data-Guided Decisions",
    description:
      "We help farmers read trends, plan seasons, and choose crops with a clear view of market demand.",
    detail:
      "By tracking costs, yield, and sales, farmers can refine decisions instead of relying on guesswork.",
    outcome: "Stronger margins and more reliable planning across seasons.",
  },
  {
    title: "Community-Rooted Impact",
    description:
      "Our initiatives are built around local partnerships, ensuring knowledge stays within the community.",
    detail:
      "We invest in shared learning so farmers become mentors and growth continues locally.",
    outcome: "A stronger local ecosystem with skilled, confident growers.",
  },
];

const journeySteps = [
  {
    title: "Discover",
    description:
      "We start by understanding your land, resources, and ambitions, so recommendations fit your reality.",
    detail:
      "We review your goals, timelines, and current capabilities before suggesting the right pathway.",
    outcome: "A clear baseline and a plan that feels achievable.",
  },
  {
    title: "Design",
    description:
      "We map out a practical plan covering training, setup, crop cycles, and financial expectations.",
    detail:
      "This stage sets budgets, timelines, and a step-by-step schedule tailored to your farm.",
    outcome: "A roadmap that blends learning with immediate action.",
  },
  {
    title: "Deliver",
    description:
      "Hands-on sessions, online lessons, and field support work together to build confidence.",
    detail:
      "You get direct coaching alongside structured lessons so you can practice and validate new methods.",
    outcome: "Faster learning and fewer mistakes in real conditions.",
  },
  {
    title: "Scale",
    description:
      "We help you optimize operations, expand production, and connect with reliable markets.",
    detail:
      "We introduce efficiency upgrades, market connections, and quality checkpoints for growth.",
    outcome: "Sustainable expansion without sacrificing quality.",
  },
];

const highlights = [
  {
    metric: "10+",
    label: "Years of Agricultural Training",
    description:
      "Experience that translates into smoother setups, fewer costly mistakes, and faster results.",
  },
  {
    metric: "50+",
    label: "Expert-Led Modules",
    description:
      "Focused content covering cultivation, business planning, sustainability, and quality control.",
  },
  {
    metric: "1:1",
    label: "Farmer Support Ratio",
    description:
      "Personalized guidance so every learner gets direct attention and actionable next steps.",
  },
];

const programOutcomes = [
  {
    metric: "30-45%",
    label: "Average Yield Improvement",
    description:
      "Farmers applying our cultivation routines report stronger consistency across cycles.",
  },
  {
    metric: "2-3x",
    label: "Faster Learning Curve",
    description:
      "Structured modules reduce trial-and-error and speed up confident decision-making.",
  },
  {
    metric: "25%",
    label: "Lower Input Waste",
    description:
      "Better planning and hygiene cut down losses from contamination and spoilage.",
  },
  {
    metric: "18-24%",
    label: "Higher Market Realization",
    description:
      "Quality-focused handling helps secure better pricing with repeat buyers.",
  },
];

const highlightIcons = [FaLeaf, FaBookOpen, FaHandshake];
const valueIcons = [FaSeedling, FaChartSimple, FaPeopleGroup];
const pillarIcons = [
  FaWheatAwn,
  FaBookOpen,
  FaMapLocationDot,
  FaComments,
  FaLightbulb,
  FaShieldHeart,
];
const outcomeIcons = [FaArrowTrendUp, FaRoute, FaClipboardCheck, FaTruckFast];
const journeyIcons = [FaMapLocationDot, FaChartSimple, FaHandshake, FaArrowTrendUp];

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[var(--green-200)]/70 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--green-600)]/20 blur-3xl" />
        <div className="relative section-pad">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--green-700)]">
                Our Services
              </p>
              <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)] md:text-5xl">
                A learning partner built for real farmers.
              </h1>
              <p className="max-w-xl text-base text-[var(--ink-700)] md:text-lg">
                Narayanagri is designed to make agricultural education practical,
                achievable, and profitable. We combine field expertise, modern
                teaching tools, and community-first support so farmers can build
                resilient businesses that grow year after year.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => {
                  const Icon = highlightIcons[index];
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_30px_rgba(31,60,10,0.12)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-lg text-[var(--green-700)]">
                        <Icon />
                      </div>
                      <p className="mt-4 heading-font text-3xl text-[var(--green-800)]">
                        {item.metric}
                      </p>
                      <p className="text-sm font-semibold text-[var(--ink-900)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xs text-[var(--ink-700)]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[var(--green-700)]/10 blur-2xl" />
              <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 shadow-[0_24px_60px_rgba(31,60,10,0.18)]">
                <Image
                  src="/images/whychooseus-img/why-choose-us-img.jpeg"
                  alt="Farmers learning on-site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white/90 p-4 shadow-[0_16px_40px_rgba(31,60,10,0.15)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">
                  Our Promise
                </p>
                <p className="mt-1 text-sm text-[var(--ink-700)]">
                  Practical skills, trusted mentorship, and visible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Our Approach
            </p>
            <h2 className="heading-font text-3xl text-[var(--ink-900)] md:text-4xl">
              Built on clarity, care, and community.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-[var(--green-200)] bg-white p-6 shadow-[0_16px_40px_rgba(31,60,10,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-xl text-[var(--green-700)]">
                    <Icon />
                  </div>
                  <h3 className="mt-4 heading-font text-xl text-[var(--ink-900)]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--ink-700)]">
                    {value.description}
                  </p>
                  <p className="mt-3 text-sm text-[var(--ink-700)]">
                    {value.detail}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm text-[var(--ink-700)]">
                    {value.outcome}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Core Programs
            </p>
            <h2 className="heading-font text-3xl text-[var(--ink-900)] md:text-4xl">
              Every topic comes with a clear, actionable roadmap.
            </h2>
            <p className="max-w-2xl text-sm text-[var(--ink-700)] md:text-base">
              Each program blends training, mentoring, and measurable outcomes so farmers
              can move from learning to earning without confusion.
            </p>
          </div>
          <div className="grid gap-10">
            {pillars.map((item, index) => {
              const Icon = pillarIcons[index];
              return (
                <div
                  key={item.title}
                  className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"
                >
                  <div
                    className={`relative h-80 w-full overflow-hidden rounded-[2.25rem] ${
                      index % 2 === 1 ? "lg:order-last" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.tone} to-transparent`}
                    />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-xl text-[var(--green-700)]">
                      <Icon />
                    </div>
                    <h3 className="heading-font text-2xl text-[var(--ink-900)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-700)] md:text-base">
                      {item.description}
                    </p>
                    <p className="text-sm text-[var(--ink-700)] md:text-base">
                      {item.detail}
                    </p>
                    <ul className="ml-4 list-disc text-sm text-[var(--ink-700)]">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="rounded-2xl border border-[var(--green-200)] bg-[var(--cream-50)] p-4 text-sm text-[var(--ink-700)]">
                      <span className="font-semibold text-[var(--ink-900)]">
                        What you gain:
                      </span>{" "}
                      {item.gain}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Program Outcomes
            </p>
            <h2 className="heading-font text-3xl text-[var(--ink-900)] md:text-4xl">
              Quantified improvements from farmer success stories.
            </h2>
            <p className="max-w-2xl text-sm text-[var(--ink-700)] md:text-base">
              These results are compiled from program follow-ups across multiple
              batches. Outcomes vary by crop cycle, inputs, and local conditions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {programOutcomes.map((outcome, index) => {
              const Icon = outcomeIcons[index];
              return (
                <div
                  key={outcome.label}
                  className="rounded-3xl border border-[var(--green-200)] bg-white p-6 shadow-[0_16px_40px_rgba(31,60,10,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-xl text-[var(--green-700)]">
                    <Icon />
                  </div>
                  <p className="mt-4 heading-font text-3xl text-[var(--green-800)]">
                    {outcome.metric}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink-900)]">
                    {outcome.label}
                  </p>
                  <p className="mt-3 text-sm text-[var(--ink-700)]">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
              Farmer Journey
            </p>
            <h2 className="heading-font text-3xl text-[var(--ink-900)] md:text-4xl">
              Clear steps from first call to first harvest.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = journeyIcons[index];
              return (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-3xl border border-[var(--green-200)] bg-white p-6 shadow-[0_14px_34px_rgba(31,60,10,0.08)]"
                >
                  <div className="absolute right-4 top-4 text-xs font-semibold text-[var(--green-700)]">
                    0{index + 1}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-xl text-[var(--green-700)]">
                    <Icon />
                  </div>
                  <h3 className="mt-4 heading-font text-xl text-[var(--ink-900)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--ink-700)]">
                    {step.description}
                  </p>
                  <p className="mt-3 text-sm text-[var(--ink-700)]">
                    {step.detail}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm text-[var(--ink-700)]">
                    {step.outcome}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
