
import Link from "next/link";
import { FaArrowUp, FaCode } from "react-icons/fa";

import { FOOTER_DATA, NAV_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#030014]/70 px-6 pb-8 pt-16 text-gray-300 backdrop-blur-xl sm:px-10">

      {/* TOP GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP SECTION */}
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-12 md:flex-row md:items-center">

          {/* BRAND */}
          <div className="max-w-md">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 text-sm font-bold text-purple-300 transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                NR
              </div>

              <div>
                <h2 className="text-base font-bold tracking-[0.15em] text-white">
                  NAITIK RAGHAV
                </h2>

                <p className="mt-1 text-[9px] tracking-[0.25em] text-gray-500">
                  DEVELOPER / ENGINEER
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Building ideas into intelligent systems.
              Exploring software development, AI and technology
              to create solutions that matter.
            </p>
          </div>

          {/* BACK TO TOP */}
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-3 rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 py-3 text-xs font-semibold tracking-wide text-purple-200 transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
          >
            BACK TO TOP

            <FaArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-[0.25em] text-white">
              EXPLORE
            </h3>

            <div className="flex flex-col items-start gap-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:translate-x-1 hover:text-purple-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* OTHER FOOTER LINKS */}
          {FOOTER_DATA.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-xs font-bold tracking-[0.25em] text-white">
                {column.title.toUpperCase()}
              </h3>

              <div className="flex flex-col items-start gap-4">
                {column.data.map(({ icon: Icon, name, link }) => {
                  const isEmail = link.startsWith("mailto:");

                  return (
                    <Link
                      key={`${column.title}-${name}`}
                      href={link}
                      target={isEmail ? undefined : "_blank"}
                      rel={
                        isEmail ? undefined : "noopener noreferrer"
                      }
                      className="group inline-flex items-center gap-3 text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-purple-300"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 transition-colors group-hover:text-purple-300" />
                      )}

                      {name}

                      <span className="text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Naitik Raghav. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-2 text-xs text-gray-600">
            <FaCode className="text-purple-400" />
            Designed & built with curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
};
