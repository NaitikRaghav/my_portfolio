
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const ROLE_TITLES = [
  "Software Developer",
  "AI/ML Enthusiast",
  "Full-Stack Developer",
  "Technology Explorer",
];

export const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentRole = ROLE_TITLES[roleIndex];
    let delay = isDeleting ? 40 : 85;

    if (!isDeleting && typedRole === currentRole) {
      delay = 1400;
    }

    if (isDeleting && typedRole === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedRole !== currentRole) {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
      } else if (!isDeleting && typedRole === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && typedRole !== "") {
        setTypedRole(typedRole.slice(0, -1));
      } else {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % ROLE_TITLES.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  // Cursor-reactive 3D image
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - y) * 12);
    rotateY.set((x - 0.5) * 15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-20 flex min-h-[90vh] w-full flex-col items-center justify-center gap-12 px-6 pb-16 pt-28 md:flex-row md:gap-8 md:px-12 lg:px-20"
    >
      {/* LEFT CONTENT */}
      <div className="m-auto flex h-full w-full max-w-[650px] flex-col justify-center gap-6 text-center md:text-left">

        {/* Introduction badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box mx-auto flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 md:mx-0"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />

          <h1 className="Welcome-text text-xs tracking-[0.15em] text-purple-200 sm:text-sm">
            WELCOME TO MY DIGITAL SPACE
          </h1>
        </motion.div>

        {/* Main heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3"
        >
          <p className="text-lg font-medium tracking-wide text-gray-400 sm:text-xl">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Naitik
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Raghav.
            </span>
          </h1>
        </motion.div>

        {/* Typing effect */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex min-h-[35px] items-center justify-center gap-2 text-xl font-semibold text-purple-300 md:justify-start sm:text-2xl"
        >
          <span>{typedRole}</span>

          <span className="h-6 w-[2px] animate-pulse bg-cyan-400" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.9)}
          className="max-w-[580px] text-base leading-8 text-gray-400 sm:text-lg"
        >
          I&apos;m a Computer Science Engineering student passionate about
          building intelligent applications, AI-powered systems and
          meaningful software solutions. I enjoy turning ideas into
          technology that solves real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="mt-3 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(139,92,246,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="button-primary rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide text-white"
          >
            Explore My Work <span aria-hidden="true">↗</span>
          </motion.a>

          <motion.a
            href="mailto:naitikrghv@gmail.com"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(167,139,250,0.9)",
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Personal tagline */}
        <motion.p
          variants={slideInFromLeft(1.2)}
          className="mt-3 text-xs tracking-widest text-gray-600"
        >
          BUILDING • EXPERIMENTING • INNOVATING
        </motion.p>
      </div>

      {/* RIGHT SIDE - INTERACTIVE VISUAL */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full max-w-[580px] items-center justify-center"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformPerspective: 1000,
          }}
          whileHover={{ scale: 1.025 }}
          className="relative flex w-full items-center justify-center"
        >
          {/* Ambient glow */}
          <div className="absolute h-[65%] w-[65%] rounded-full bg-purple-600/20 blur-[100px]" />

          {/* Decorative orbital rings */}
          <div className="pointer-events-none absolute h-[85%] w-[85%] rounded-full border border-purple-400/10" />

          <div className="pointer-events-none absolute h-[68%] w-[68%] rounded-full border border-cyan-400/10" />

          {/* Original portfolio technology illustration */}
          <Image
            src="/hero-bg.svg"
            alt="Technology and development illustration"
            width={650}
            height={650}
            priority
            draggable={false}
            className="relative z-10 h-auto w-full select-none object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.2)]"
          />

          {/* Floating status badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] right-[2%] z-20 rounded-xl border border-purple-400/30 bg-[#100a2d]/90 px-4 py-3 shadow-[0_0_25px_rgba(139,92,246,0.15)] backdrop-blur-xl"
          >
            <p className="text-xs font-medium text-purple-200">
              Currently Building
            </p>
            <p className="mt-1 text-[10px] text-gray-400">
              AI & Intelligent Systems
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
