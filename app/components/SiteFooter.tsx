import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/17yRY6eYGY/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/narayanaagrisolutions?igsh=ZXF3eGwxZXFvbnZo",
  },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "YouTube", icon: FaYoutube },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/qr/BMOQTOR2O2HTA1",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Our Services", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#132707] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,232,207,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.2))]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-[2.25rem] border border-white/12 bg-white/[0.05] px-6 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm md:px-8 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr_1fr] lg:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--green-200)]">
                Narayana Agri Solutions
              </p>
              <Image
                src="/logo.png"
                alt="Narayana Agri Solutions logo"
                width={200}
                height={80}
                className="mt-5 h-16 w-40 object-contain invert"
              />
              <p className="mt-5 max-w-md text-sm leading-7 text-white/82 md:text-[15px]">
                Certified seeds, plant protection, machinery, and tools trusted
                by farmers nationwide with practical guidance that keeps decisions
                simple and field-ready.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      aria-label={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/[0.07] text-sm text-white transition hover:-translate-y-0.5 hover:border-[var(--green-200)]/45 hover:bg-white/[0.12]"
                    >
                      <item.icon />
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/[0.07] text-sm text-white/90 transition hover:border-white/25"
                    >
                      <item.icon />
                    </button>
                  ),
                )}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-200)]">
                Quick Links
              </p>
              <div className="mt-5 grid gap-3 border-l border-white/10 pl-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="w-fit text-sm text-white/84 transition hover:text-[var(--green-200)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-200)]">
                Find Us
              </p>
              <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/14 bg-black/14">
                <iframe
                  title="Narayana Agri Solutions Location"
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=25.6168639,85.1874319&z=17&output=embed"
                ></iframe>
              </div>
              <div className="mt-4 flex items-start gap-3 text-sm text-white/82">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.09] text-[var(--green-200)]">
                  <FaLocationDot />
                </div>
                <p className="pt-2">Patna, Bihar (25.6168639, 85.1874319)</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-5 text-xs text-white/72 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Narayana Agri Solutions. All rights reserved.</p>
            <p>
              Developed by{" "}
              <a
                href="https://www.setzet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition hover:text-[var(--green-200)]"
              >
                Setzet
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
