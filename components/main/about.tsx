
"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaTrophy,
  FaMedal,
  FaBrain,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";

const ACHIEVEMENTS = [
  {
    number: "01",
    title: "Published Patent",
    subtitle: "Edusync",
    description:
      "Recognition for an innovation in attendance and feedback recording technology.",
    icon: FaAward,
  },
  {
    number: "02",
    title: "Top 20",
    subtitle: "SquareHack · IIT Delhi",
    description:
      "Selected among the top 20 teams at the hackathon.",
    icon: FaTrophy,
  },
  {
    number: "03",
    title: "2nd Runner-up",
    subtitle: "College Coding Competition",
    description:
      "Secured second runner-up position during my first year.",
    icon: FaMedal,
  },
];

const INTERESTS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Full-Stack Development",
  "Computer Vision",
  "Agentic AI",
  "Quantum Computing",
];

export const About = () => {
  return (
    <section
      id="about-me"
      className="relative isolate w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-600/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-purple-400 sm:text-sm">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Beyond the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              code.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A little about my journey, the things I build and
            the ideas that keep me curious.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2">
              <FaCode className="h-3.5 w-3.5 text-purple-300" />
              <span className="text-xs font-medium tracking-wide text-purple-200">
                THE PERSON BEHIND THE PROJECTS
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              I&apos;m Naitik Raghav.
              <span className="mt-2 block text-purple-300">
                I build. I experiment. I keep learning.
              </span>
            </h3>

            <p className="mt-7 text-sm leading-8 text-gray-400 sm:text-base">
              I&apos;m a B.Tech Computer Science Engineering student
              passionate about technology and problem-solving.
              I enjoy turning ideas into practical applications
              through software development, artificial intelligence
              and emerging technologies.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
              My journey involves building projects, participating
              in hackathons and exploring ways to solve real-world
              problems. From academic technology platforms to
              AI-powered systems, I like learning by building
              things that have a purpose.
            </p>

            <div className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <FaLightbulb className="h-4 w-4 text-purple-300" />
                <h4 className="text-sm font-semibold tracking-widest text-white">
                  AREAS OF INTEREST
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-200"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-500/[0.05] p-6">
              <FaBrain className="mb-4 h-6 w-6 text-purple-300" />
              <p className="text-base font-medium leading-7 text-gray-200">
                &quot;I believe the best way to learn technology
                is to build with it, experiment with it and
                challenge what is possible.&quot;
              </p>
              <p className="mt-4 text-xs tracking-widest text-gray-500">
                MY APPROACH TO TECHNOLOGY
              </p>
            </div>
          </motion.div>

          {/* ACHIEVEMENTS */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-purple-400">
                MILESTONES
              </p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Achievements & Recognition
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                A few milestones from my journey so far.
              </p>
            </motion.div>

            {ACHIEVEMENTS.map((item, index) => {
              const AchievementIcon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ x: 5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0820]/75 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:bg-[#120b2c]/90 sm:p-7"
                >
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/20">
                      <AchievementIcon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
                        {item.number}
                      </span>

                      <h4 className="mt-2 text-lg font-bold text-white sm:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm font-medium text-purple-300">
                        {item.subtitle}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-gray-400 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/[0.08] pt-10 text-center"
        >
          <p className="text-xs font-medium tracking-[0.3em] text-gray-500 sm:text-sm">
            THE JOURNEY IS JUST GETTING STARTED.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
