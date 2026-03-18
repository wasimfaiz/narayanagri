import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--green-900)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Narayana Agri Solutions logo"
              width={200}
              height={80}
              className="h-16 w-40 object-contain invert"
            />
          </div>
          <p className="text-sm text-white/70">
            Certified seeds, plant protection, machinery, and tools trusted by
            farmers nationwide.
          </p>
          <div className="flex gap-3">
            {[
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
            ].map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  aria-label={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm text-white transition hover:border-white"
                >
                  <item.icon />
                </a>
              ) : (
                <button
                  key={item.label}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm text-white transition hover:border-white"
                >
                  <item.icon />
                </button>
              ),
            )}
            <a
              aria-label="WhatsApp"
              href="https://wa.me/qr/BMOQTOR2O2HTA1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm text-white transition hover:border-white"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <p className="text-base font-semibold text-white">Quick Links</p>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About Us
          </Link>
          <Link href="/#products" className="hover:text-white">
            Products
          </Link>
          <Link href="/#why-us" className="hover:text-white">
            Our Services
          </Link>
          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-base font-semibold">Find Us</p>
          <div className="h-40 overflow-hidden rounded-2xl border border-white/30 bg-white/10">
            <iframe
              title="Narayana Agri Solutions Location"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=25.6168639,85.1874319&z=17&output=embed"
            ></iframe>
          </div>
          <p className="text-xs text-white/60">
            Patna, Bihar (25.6168639, 85.1874319)
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © 2026 Narayana Agri Solutions. All rights reserved.
      </div>
    </footer>
  );
}
