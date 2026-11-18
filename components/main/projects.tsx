
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-purple-400 sm:text-sm">
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of projects where I explore software development,
            artificial intelligence and technology-driven solutions
            to real-world problems.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              category={project.category}
              number={project.number}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-center gap-5 text-center"
        >
          <p className="text-sm text-gray-400">
            Interested in what I&apos;m building?
          </p>

          <Link
            href="https://github.com/NaitikRaghav"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-purple-400/30 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/20 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]"
          >
            Explore My GitHub

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
