
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  category: string;
  number: string;
  description: string;
  link: string;
  technologies: readonly string[];
  index: number;
};

export const ProjectCard = ({
  src,
  title,
  category,
  number,
  description,
  link,
  technologies,
  index,
}: ProjectCardProps) => {
  // Cursor-reactive 3D tilt
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);

  const rotateX = useSpring(rotateXValue, {
    stiffness: 150,
    damping: 20,
  });

  const rotateY = useSpring(rotateYValue, {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateXValue.set((0.5 - y) * 7);
    rotateYValue.set((x - 0.5) * 7);
  };

  const handleMouseLeave = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0820]/80 shadow-[0_15px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors duration-300 hover:border-purple-400/50 hover:shadow-[0_15px_60px_rgba(112,66,248,0.15)]"
    >
      {/* IMAGE AREA */}
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#17102e] to-[#08051c] sm:h-64">
        <Image
          src={src}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0820] via-transparent to-transparent" />

        {/* Project number */}
        <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs font-bold tracking-[0.2em] text-purple-200 backdrop-blur-md">
          PROJECT {number}
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded-full border border-purple-300/30 bg-purple-500/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-200 backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/0 blur-[65px] transition-all duration-500 group-hover:bg-purple-500/20" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Project title */}
        <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
          {description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-6">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-gray-500">
            TECHNOLOGIES & AREAS
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-gray-300 transition-colors duration-300 group-hover:border-purple-400/20 group-hover:bg-purple-500/[0.07]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* ACTION */}
        <div className="mt-7 border-t border-white/[0.08] pt-5">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Naitik Raghav's GitHub profile for ${title}`}
            className="inline-flex items-center gap-3 text-sm font-semibold text-purple-300 transition-all duration-300 hover:gap-5 hover:text-purple-200"
          >
            Find on GitHub

            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
