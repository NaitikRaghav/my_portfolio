
"use client";

import { motion } from "framer-motion";

import {
  FaBrain,
  FaCamera,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEye,
  FaFire,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaptopCode,
  FaLink,
  FaMobileAlt,
  FaPython,
  FaReact,
  FaRobot,
  FaServer,
  FaShareAlt,
  FaMicrochip,
} from "react-icons/fa";

const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    subtitle: "The foundations",
    number: "01",
    icon: FaCode,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: FaCode },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Web Development",
    subtitle: "Building for the web",
    number: "02",
    icon: FaLaptopCode,
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: FaLaptopCode },
      { name: "Tailwind CSS", icon: FaCode },
    ],
  },
  {
    title: "App Development",
    subtitle: "Mobile experiences",
    number: "03",
    icon: FaMobileAlt,
    skills: [
      { name: "Flutter", icon: FaMobileAlt },
      { name: "Dart", icon: FaCode },
      { name: "Firebase", icon: FaFire },
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent systems",
    number: "04",
    icon: FaBrain,
    skills: [
      { name: "YOLOv8", icon: FaEye },
      { name: "OpenCV", icon: FaCamera },
      { name: "PyTorch", icon: FaBrain },
      { name: "Scikit-learn", icon: FaChartLine },
    ],
  },
  {
    title: "Agentic AI",
    subtitle: "Building AI workflows",
    number: "05",
    icon: FaRobot,
    skills: [
      { name: "LangChain", icon: FaLink },
      { name: "LangGraph", icon: FaShareAlt },
      { name: "Groq LLM", icon: FaMicrochip },
    ],
  },
  {
    title: "Backend & Developer Tools",
    subtitle: "Tools behind the product",
    number: "06",
    icon: FaServer,
    skills: [
      { name: "Supabase", icon: FaDatabase },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Google Colab", icon: FaGoogle },
      { name: "VS Code", icon: FaCode },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden py-24 sm:py-32"
    >
      {/* SPACE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-[-2]">
        <video
          className="h-full w-full object-cover opacity-20"
          preload="metadata"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* BACKGROUND OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-b from-[#030014]/80 via-[#030014]/60 to-[#030014]/90" />

      {/* DECORATIVE GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-purple-400 sm:text-sm">
            MY TECH STACK
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of programming languages, frameworks and tools
            I have explored and used while building software,
            AI-powered applications and intelligent systems.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => {
            const CategoryIcon = group.icon;

            return (
              <motion.div
                key={group.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0820]/75 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-purple-400/40 hover:bg-[#120b2c]/90"
              >
                {/* CARD GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-600/0 blur-[70px] transition-all duration-500 group-hover:bg-purple-600/20" />

                <div className="relative z-10">

                  {/* NUMBER */}
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.3em] text-purple-400">
                      {group.number}
                    </span>

                    <span className="h-px w-12 bg-gradient-to-r from-purple-400/60 to-transparent" />
                  </div>

                  {/* CATEGORY TITLE + ICON */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_18px_rgba(139,92,246,0.2)]">
                      <CategoryIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {group.title}
                      </h3>

                      <p className="mt-1 text-xs tracking-wide text-gray-500">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* TECHNOLOGY TAGS WITH ICONS */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => {
                      const TechnologyIcon = skill.icon;

                      return (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.08 + skillIndex * 0.06,
                          }}
                          className="inline-flex cursor-default items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-200"
                        >
                          <TechnologyIcon
                            className="h-3.5 w-3.5 shrink-0 text-purple-300"
                            aria-hidden="true"
                          />

                          {skill.name}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-xs tracking-[0.2em] text-gray-500 sm:text-sm">
            ALWAYS LEARNING. ALWAYS BUILDING.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
