"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/30 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link className="flex items-center" href="/">
          <Image
            src="/logo.png"
            alt="Narayana Agri Solutions logo"
            width={200}
            height={80}
            className="h-16 w-40 object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--ink-700)] lg:flex">
          <Link className="hover:text-[var(--green-700)]" href="/#home">
            Home
          </Link>
          <Link className="hover:text-[var(--green-700)]" href="/about">
            About Us
          </Link>
          <div className="group relative">
            <Link
              className="inline-flex items-center gap-2 hover:text-[var(--green-700)]"
              href="/seeds"
            >
              Products
              <span className="text-xs">▾</span>
            </Link>
            <div className="absolute left-0 top-full hidden w-52 flex-col gap-1 rounded-2xl border border-[var(--green-200)] bg-white p-3 text-sm text-[var(--ink-700)] shadow-lg group-hover:flex">
              <Link
                className="rounded-lg px-3 py-2 hover:bg-[var(--green-200)]/60"
                href="/seeds"
              >
                Seeds
              </Link>
              <Link
                className="rounded-lg px-3 py-2 hover:bg-[var(--green-200)]/60"
                href="/medicine"
              >
                Medicine
              </Link>
              <Link
                className="rounded-lg px-3 py-2 hover:bg-[var(--green-200)]/60"
                href="/machinery"
              >
                Machinery
              </Link>
              <Link
                className="rounded-lg px-3 py-2 hover:bg-[var(--green-200)]/60"
                href="/tools"
              >
                Tools
              </Link>
            </div>
          </div>
          <Link
            className="hover:text-[var(--green-700)]"
            href="/why-choose-us"
          >
            Why Choose Us
          </Link>
          <Link
            className="hover:text-[var(--green-700)]"
            href="/#testimonials"
          >
            Testimonials
          </Link>
          <Link className="hover:text-[var(--green-700)]" href="/#contact">
            Contact
          </Link>
        </nav>
        <Link
          className="hidden rounded-full bg-[var(--green-700)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--green-800)] lg:inline-flex"
          href="/#products"
        >
          Shop Now
        </Link>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--green-200)] text-[var(--green-800)] transition hover:border-[var(--green-700)] lg:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/40 bg-white/95 px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-[var(--ink-700)]">
            <Link
              className="hover:text-[var(--green-700)]"
              href="/#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-[var(--green-700)]"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="hover:text-[var(--green-700)]"
              href="/seeds"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <div className="grid gap-2 pl-2 text-xs uppercase tracking-[0.2em] text-[var(--green-700)]">
              <Link
                className="text-sm font-semibold text-[var(--ink-700)] hover:text-[var(--green-700)]"
                href="/seeds"
                onClick={() => setMenuOpen(false)}
              >
                Seeds
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--ink-700)] hover:text-[var(--green-700)]"
                href="/medicine"
                onClick={() => setMenuOpen(false)}
              >
                Medicine
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--ink-700)] hover:text-[var(--green-700)]"
                href="/machinery"
                onClick={() => setMenuOpen(false)}
              >
                Machinery
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--ink-700)] hover:text-[var(--green-700)]"
                href="/tools"
                onClick={() => setMenuOpen(false)}
              >
                Tools
              </Link>
            </div>
            <Link
              className="hover:text-[var(--green-700)]"
              href="/why-choose-us"
              onClick={() => setMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              className="hover:text-[var(--green-700)]"
              href="/#testimonials"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              className="hover:text-[var(--green-700)]"
              href="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <Link
            className="mt-5 block w-full rounded-full bg-[var(--green-700)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--green-800)]"
            href="/#products"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
