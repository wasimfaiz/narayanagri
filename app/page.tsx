"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ProductGrid from "./components/ProductGrid";
import type { IconType } from "react-icons";
import {
  FaBuilding,
  FaCalendarDays,
  FaCircleCheck,
  FaEnvelope,
  FaFileInvoice,
  FaHandHoldingHeart,
  FaLeaf,
  FaLocationDot,
  FaMoneyBillWave,
  FaPhone,
  FaQuoteLeft,
  FaShieldHeart,
  FaStar,
  FaTruckFast,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa6";

const heroSlides = [
  {
    title: "Your Trusted Agriculture Partner",
    subtitle: "Certified inputs, expert guidance, and timely delivery across India.",
    cta: "Shop Now",
    image: "/images/hero-img1.jpeg",
  },
  {
    title: "Quality Seeds for Better Yield",
    subtitle: "Hybrid and organic seeds selected for resilience and performance.",
    cta: "Explore Seeds",
    image: "/images/hero-img2.jpeg",
  },
  {
    title: "Modern Machinery for Modern Farmers",
    subtitle: "Powerful, efficient equipment built for everyday farm work.",
    cta: "View Products",
    image: "/images/hero-img3.jpeg",
  },
];

const displayImages = [
  "/images/display-img1.jpeg",
  "/images/dispaly-img2.jpeg",
  "/images/display-img3.jpeg",
  "/images/display-img4.jpeg",
];

const trustCards: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Certified Quality",
    description:
      "Every product is sourced from trusted manufacturers and tested for performance.",
    icon: FaCircleCheck,
  },
  {
    title: "Expert Guidance",
    description: "Crop-wise support to choose the right input at the right time.",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Fast Delivery",
    description: "Pan-India logistics ensure quick supply when you need it most.",
    icon: FaTruckFast,
  },
  {
    title: "Secure Purchase",
    description: "Safe payments and transparent billing for full peace of mind.",
    icon: FaLeaf,
  },
];

const companyProfileLeft: { label: string; value: string; icon: IconType }[] = [
  {
    label: "Nature of Business",
    value: "Exporter, Manufacturer & Supplier",
    icon: FaBuilding,
  },
  { label: "Year of Establishment", value: "2023", icon: FaCalendarDays },
  { label: "GST No", value: "10AAJCN0153B1ZB", icon: FaFileInvoice },
  { label: "Member Since", value: "2023", icon: FaCalendarDays },
];

const companyProfileRight: { label: string; value: string; icon: IconType }[] = [
  { label: "No. of Staff", value: "12", icon: FaUsers },
  { label: "Annual Turnover", value: "Rs 10 Crores", icon: FaMoneyBillWave },
  { label: "Mode of Payment", value: "Cash Advance (CA)", icon: FaMoneyBillWave },
  { label: "Production Units", value: "2", icon: FaWarehouse },
  { label: "Branches", value: "Patna, Noida Sector 125", icon: FaLocationDot },
];

const marketplaceMembers = [
  {
    name: "Trade India",
    className: "border-[#1f5faa]/20 bg-[#eaf3ff] text-[#1f5faa]",
  },
  {
    name: "IndiaMART",
    className: "border-[#0b5bd3]/20 bg-[#e9f1ff] text-[#0b5bd3]",
  },
  {
    name: "Flipkart",
    className: "border-[#2874f0]/20 bg-[#edf4ff] text-[#2874f0]",
  },
  {
    name: "Amazon",
    className: "border-[#ff9900]/25 bg-[#fff4e2] text-[#111827]",
  },
];

import {
  bonsaiProducts,
  machineryProducts,
  medicineProducts,
  organicFoodProducts,
  seedProducts,
  toolsProducts,
} from "./data/products";

const testimonials = [
  {
    quote:
      "The seed quality is excellent and delivery was on time. My wheat yield improved noticeably.",
    name: "Ramesh Kumar",
    location: "Haryana",
    image: "/images/testimonial-img.jpeg",
  },
  {
    quote:
      "Their guidance helped me choose the right fertilizer and I saw healthier crop growth.",
    name: "Savitri Devi",
    location: "Andhra Pradesh",
    image: "/images/testimonial-img.jpeg",
  },
  {
    quote:
      "Good pricing and honest service. I recommend Narayana Agri Solutions to my village.",
    name: "Mahesh Patil",
    location: "Maharashtra",
    image: "/images/testimonial-img.jpeg",
  },
];

const testimonialTrustPoints: { label: string; value: string; icon: IconType }[] = [
  { label: "Farmer Rating", value: "5.0/5", icon: FaStar },
  { label: "Verified Reviews", value: "100%", icon: FaCircleCheck },
  { label: "Trusted Support", value: "Farmer First", icon: FaShieldHeart },
];

const contactInfo: { label: string; value: string; icon: IconType }[] = [
  {
    label: "Address",
    value: "Harihar Chamber, Boaring Road Chauraha, Patna, 800001",
    icon: FaLocationDot,
  },
  { label: "Phone", value: "8448611390", icon: FaPhone },
  {
    label: "Email",
    value: "Contact@narayanaagrisolutions.com",
    icon: FaEnvelope,
  },
];

function useAutoCarousel(length: number, delayMs: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, delayMs);
    return () => clearInterval(id);
  }, [length, delayMs]);

  const setSafeIndex = (value: number) => {
    if (value < 0) return setIndex(length - 1);
    if (value >= length) return setIndex(0);
    setIndex(value);
  };

  return { index, setIndex: setSafeIndex };
}

export default function Home() {
  const hero = useAutoCarousel(heroSlides.length, 3000);
  const reviewCarousel = useAutoCarousel(testimonials.length, 4000);
  const heroSlide = useMemo(() => heroSlides[hero.index], [hero.index]);
  const review = useMemo(
    () => testimonials[reviewCarousel.index],
    [reviewCarousel.index],
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-black text-white"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${heroSlide.image})` }}
          ></div>
          <div className="absolute inset-0 hero-mask"></div>
          <div className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center gap-10 px-6 py-20 md:py-28">
            <div className="max-w-xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--green-200)]">
                Narayana Agri Solutions
              </p>
              <h1 className="heading-font text-4xl font-semibold leading-tight md:text-5xl">
                {heroSlide.title}
              </h1>
              <p className="text-base text-white/80 md:text-lg">
                {heroSlide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--green-800)] transition hover:bg-[var(--green-200)]">
                  {heroSlide.cta}
                </button>
                <button className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
                  Talk to Us
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {heroSlides.map((_, idx) => (
                <button
                  key={`hero-dot-${idx}`}
                  onClick={() => hero.setIndex(idx)}
                  aria-label={`Show slide ${idx + 1}`}
                  className={`h-3 w-3 rounded-full transition ${
                    hero.index === idx ? "bg-white" : "bg-white/40"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--green-200)]/70 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--green-700)]">
              Marketplace Presence
            </p>
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-end">
              {marketplaceMembers.map((marketplace) => (
                <div
                  key={marketplace.name}
                  className={`flex min-w-[140px] items-center justify-center rounded-2xl border px-5 py-3 text-sm font-bold tracking-[0.08em] shadow-[0_10px_24px_rgba(31,60,10,0.05)] ${marketplace.className}`}
                >
                  {marketplace.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
                Our Work
              </p>
              <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
                Field-ready solutions in action
              </h2>
              <p className="max-w-2xl text-base text-[var(--ink-700)]">
                A quick look at how Narayana Agri Solutions supports farmers
                across India with trusted inputs and practical innovation.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {displayImages.map((src, index) => (
                <div
                  key={src}
                  className="relative h-60 overflow-hidden rounded-3xl md:h-72"
                >
                  <Image
                    src={src}
                    alt={`Narayana Agri Solutions showcase ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad gradient-bg">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] bg-[var(--green-200)]/80 p-8">
              <div className="grain-bg absolute inset-0 opacity-50"></div>
              <div className="relative h-80 w-full rounded-3xl bg-[url('/images/about-img.jpeg')] bg-cover bg-center"></div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
                About Us
              </p>
              <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
                Narayana Farmers Agritech (OPC) Pvt. Ltd.
              </h2>
              <p className="text-base text-[var(--ink-700)] md:text-lg">
                Since 2023, Narayana Agri Solutions has served customers across
                India with biostimulants, plant growth promoters, insecticides,
                herbicides, fungicides, and technical raw materials. Based in
                Patna, Bihar, we operate as a manufacturer, exporter, and
                supplier under our own brand, “Narayana,” while also supplying
                bulk formulations and raw ingredients to leading agrochemical
                companies nationwide.
              </p>
              <p className="text-base text-[var(--ink-700)] md:text-lg">
                Led by Managing Director Mr. Saurabh, we have built a strong
                reputation for honest business practices, competitive pricing,
                and farmer-first support. We invest in sustainable operations,
                recycling, energy conservation, and training programs that help
                farmers adopt eco-friendly, high‑yield methods.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-[var(--green-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-800)]">
                  Learn More
                </button>
                <button className="rounded-full border border-[var(--green-700)] px-6 py-3 text-sm font-semibold text-[var(--green-800)] transition hover:bg-[var(--green-700)] hover:text-white">
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
                Company Profile
              </p>
              <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
                Narayana Agri Solutions at a Glance
              </h2>
              <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
                We are ahead of our competition because of the trust and support
                of farmers across India. Our sustainable practices, strong
                research focus, and dedicated specialists help deliver consistent
                results year after year.
              </p>
            </div>
            <div className="grid gap-6 rounded-3xl bg-white p-8 soft-shadow md:grid-cols-2">
              <div className="grid gap-3 text-sm text-[var(--ink-700)]">
                {companyProfileLeft.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-[var(--green-700)]">
                      <item.icon />
                    </div>
                    <p>
                      <span className="font-semibold text-[var(--ink-900)]">
                        {item.label}:
                      </span>{" "}
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 text-sm text-[var(--ink-700)]">
                {companyProfileRight.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[var(--green-700)]/10 text-[var(--green-700)]">
                      <item.icon />
                    </div>
                    <p>
                      <span className="font-semibold text-[var(--ink-900)]">
                        {item.label}:
                      </span>{" "}
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-gray-50">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
                Our Impact
              </p>
              <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
                By the Numbers
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[var(--ink-700)]">
                We are proud to have supported thousands of farmers with
                quality products and reliable service.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              <div className="rounded-3xl bg-white p-8 soft-shadow">
                <p className="heading-font text-5xl font-semibold text-[var(--green-700)]">
                  10,000+
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--ink-900)]">
                  Farmers Served
                </p>
                <p className="mt-1 text-sm text-[var(--ink-700)]">
                  Across India
                </p>
              </div>
              <div className="rounded-3xl bg-white p-8 soft-shadow">
                <p className="heading-font text-5xl font-semibold text-[var(--green-700)]">
                  50,000+
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--ink-900)]">
                  Products Delivered
                </p>
                <p className="mt-1 text-sm text-[var(--ink-700)]">
                  Seeds, Medicines, Tools
                </p>
              </div>
              <div className="rounded-3xl bg-white p-8 soft-shadow">
                <p className="heading-font text-5xl font-semibold text-[var(--green-700)]">
                  15+
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--ink-900)]">
                  States Covered
                </p>
                <p className="mt-1 text-sm text-[var(--ink-700)]">
                  Expanding our reach
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="section-pad">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
                Why Farmers Trust Us
              </p>
              <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
                Built for reliability, growth, and results
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {trustCards.map((card) => (
                <article
                  key={card.title}
                  className="card-shadow flex flex-col gap-4 rounded-3xl bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-700)] text-xl text-white">
                    <card.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--ink-900)]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-700)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div id="products">
          <div id="seeds">
            <ProductGrid
              title="Our Seeds Collection"
              subtitle="Hybrid and organic options selected for consistent germination and stronger yield."
              buttonLabel="Buy Now"
              items={seedProducts}
              showHeader
              viewAllHref="/seeds"
              limit={3}
            />
          </div>
          <div id="medicine">
            <ProductGrid
              title="Plant Medicine & Fertilizers"
              subtitle="Balanced nutrition and protection to keep crops healthy at every stage."
              buttonLabel="Buy Now"
              items={medicineProducts}
              showHeader
              viewAllHref="/medicine"
              limit={3}
            />
          </div>
          <div id="machinery">
            <ProductGrid
              title="Machinery and Tools"
              subtitle="Reliable machinery and durable tools together for preparation, planting, irrigation, and everyday farm work."
              buttonLabel="View Details"
              items={[...machineryProducts, ...toolsProducts]}
              showHeader
              viewAllHref="/machinery"
              limit={3}
            />
          </div>
          <div id="organic-food">
            <ProductGrid
              title="Organic Food"
              subtitle="Naturally grown staples and food products selected for purity, taste, and everyday nutrition."
              buttonLabel="Buy Now"
              items={organicFoodProducts}
              showHeader
              viewAllHref="/organic-food"
              limit={3}
            />
          </div>
          <div id="bonsai">
            <ProductGrid
              title="Bonsai"
              subtitle="Decorative bonsai plants selected for gifting, home styling, and calm green spaces."
              buttonLabel="Buy Now"
              items={bonsaiProducts}
              showHeader
              viewAllHref="/bonsai"
              limit={3}
            />
          </div>
        </div>

        <section
          id="testimonials"
          className="section-pad relative overflow-hidden bg-[var(--green-900)] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,232,207,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-200)]">
                  Testimonials
                </p>
                <h2 className="heading-font text-3xl font-semibold md:text-4xl">
                  What Farmers Say About Us
                </h2>
                <p className="max-w-2xl text-sm text-white/72 md:text-base">
                  Real feedback from farmers who rely on Narayana Agri Solutions
                  for practical guidance, dependable inputs, and responsive support.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {testimonialTrustPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[var(--green-200)]">
                      <item.icon />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
              <div className="grid gap-0">
                <div className="card-shadow rounded-[2rem] border border-white/12 bg-white/[0.08] p-8 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[var(--green-200)]">
                      <FaQuoteLeft className="text-sm" />
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/84">
                        Featured Review
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#f4c542]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} className="text-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-8 text-xl leading-relaxed text-white/92 md:text-2xl">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={52}
                        height={52}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-base font-semibold text-white">{review.name}</p>
                        <p className="text-sm text-white/68">{review.location}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-semibold text-white">
                      <FaCircleCheck className="text-[var(--green-200)]" />
                      Verified Farmer
                    </div>
                  </div>
                </div>
                <div className="hidden">
              <div className="card-shadow rounded-3xl bg-white/10 p-8">
                <div className="flex items-center gap-2 text-[var(--green-200)] [&>span:first-child]:text-[#f4c542]">
                  <span className="text-xl">★★★★★</span>
                  <span className="text-sm">5.0 rating</span>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/90">
                  “{review.quote}”
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={52}
                      height={52}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold">{review.name}</p>
                      <p className="text-sm text-white/70">{review.location}</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold text-white transition hover:border-white">
                    <FaCircleCheck className="text-[var(--green-200)]" />
                    Verified Farmer
                  </button>
                </div>
              </div>
                </div>
              </div>
              <div className="grid gap-4">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.name}
                    onClick={() => reviewCarousel.setIndex(idx)}
                    className={`rounded-[1.75rem] border px-5 py-5 text-left transition ${
                      reviewCarousel.index === idx
                        ? "border-[var(--green-200)]/60 bg-white/12 shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
                        : "border-white/14 bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                        <p className="text-xs text-white/68">
                          {item.location}
                        </p>
                      </div>
                      </div>
                      <div className="flex items-center gap-1 text-[#f4c542]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FaStar key={starIndex} className="text-[10px]" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/80">
                      {item.quote}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--green-200)]">
                      <FaCircleCheck />
                      Verified review
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-shadow rounded-3xl bg-white p-8">
              <h2 className="heading-font text-3xl font-semibold text-[var(--ink-900)]">
                Contact Narayana Agri Solutions
              </h2>
              <p className="mt-3 text-sm text-[var(--ink-700)]">
                Have a question or need help choosing the right product? Send us
                a message and our team will get back to you quickly.
              </p>
              <form className="mt-8 grid gap-4">
                <input
                  className="w-full rounded-2xl border border-[var(--green-200)] bg-[var(--cream-50)] px-4 py-3 text-sm focus:border-[var(--green-700)] focus:outline-none"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="w-full rounded-2xl border border-[var(--green-200)] bg-[var(--cream-50)] px-4 py-3 text-sm focus:border-[var(--green-700)] focus:outline-none"
                  placeholder="Phone"
                  type="tel"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border border-[var(--green-200)] bg-[var(--cream-50)] px-4 py-3 text-sm focus:border-[var(--green-700)] focus:outline-none"
                  placeholder="Message"
                ></textarea>
                <button className="rounded-full bg-[var(--green-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-800)]">
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl bg-[var(--green-200)]/60 p-8">
              <div>
                <h3 className="text-lg font-semibold text-[var(--ink-900)]">
                  Reach Us
                </h3>
                <div className="mt-3 grid gap-3">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3 text-sm text-[var(--ink-700)]">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-[var(--green-700)]">
                        <item.icon />
                      </div>
                      <p>
                        <span className="font-semibold text-[var(--ink-900)]">
                          {item.label}:
                        </span>{" "}
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                className="rounded-full border border-[var(--green-700)] px-5 py-2 text-sm font-semibold text-[var(--green-800)] transition hover:bg-[var(--green-700)] hover:text-white text-center"
                href="https://wa.me/918448611390?text=Hello%20Narayana%20Agri%20Solutions%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <div className="rounded-3xl bg-white/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--green-700)]">
                  Service Regions
                </p>
                <p className="mt-3 text-sm text-[var(--ink-700)]">
                  We deliver to farmers across all major agricultural states in
                  India with fast and secure logistics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
