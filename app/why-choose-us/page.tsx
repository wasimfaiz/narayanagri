import Image from "next/image";

const galleryItems = [
  {
    title: "Mushroom Cultivation",
    description:
      "Specialized workshops and hands-on training for sustainable and profitable mushroom cultivation.",
    image: "/images/whychooseus-img/mashroom cultivation.jpeg",
  },
  {
    title: "Online Courses",
    description: "Learn at your own pace with our comprehensive online courses on various agricultural topics.",
    image: "/images/whychooseus-img/mashroom online course.jpeg",
  },
  {
    title: "Guidance and Support",
    description:
      "Working closely with farming communities to understand their needs and provide solutions.",
    image: "/images/hero-img4.jpeg",
  },
  {
    title: "Timely Support",
    description:
      "Providing expert consultations to farmers for their specific needs and challenges.",
    image: "/images/display-img4.jpeg",
  },
  {
    title: "Commitment to Quality",
    description:
      "Promoting and implementing modern agricultural practices for better yield and sustainability.",
    image: "/images/testimonial-img.jpeg",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-pad gradient-bg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--green-700)]">
            Why Choose Us
          </p>
          <h1 className="heading-font text-4xl font-semibold text-[var(--ink-900)]">
            Key Features
          </h1>
          <p className="max-w-3xl text-base text-[var(--ink-700)] md:text-lg">
            We are dedicated to empowering farmers through education,
            innovation, and unwavering support. Explore our key features and see
            how we are making a difference in the agricultural community.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-12">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div
                className={`relative h-80 w-full overflow-hidden rounded-3xl ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="heading-font text-2xl font-semibold text-[var(--ink-900)]">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--ink-700)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
