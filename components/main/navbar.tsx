
"use client";

import { useState } from "react";
import Link from "next/link";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 sm:px-8">
      <nav className="mx-auto mt-4 flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#030014]/75 px-5 shadow-[0_8px_40px_rgba(112,66,248,0.12)] backdrop-blur-xl sm:px-8">

        {/* PERSONAL BRAND */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Naitik Raghav home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 text-sm font-bold text-purple-300 transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]">
            NR
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.15em] text-white sm:text-base">
              NAITIK RAGHAV
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gray-500">
              DEVELOPER / ENGINEER
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="relative text-sm text-gray-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-5 md:flex">
          {SOCIALS.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-purple-300"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}

          <Link
            href="mailto:naitikrghv@gmail.com"
            className="rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-xs font-semibold tracking-wide text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            LET&apos;S TALK <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-purple-400/50 md:hidden"
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#08051c]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "max-h-96 border-white/10 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-purple-500/10 hover:text-purple-300"
            >
              {item.title}
            </Link>
          ))}

          <div className="my-2 h-px bg-white/10" />

          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex gap-5">
              {SOCIALS.map(({ name, icon: Icon, link }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-gray-400 transition hover:text-purple-300"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            <Link
              href="mailto:naitikrghv@gmail.com"
              onClick={closeMenu}
              className="text-xs font-semibold tracking-wide text-purple-300"
            >
              CONTACT ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
