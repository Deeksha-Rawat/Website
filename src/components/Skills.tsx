"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  rotate: number;
  color: string;
}

const frontendSkills: Skill[] = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    rotate: -2,
    color: "var(--sticky-yellow)",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    rotate: 3,
    color: "var(--sticky-blue)",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    rotate: -1,
    color: "var(--sticky-yellow)",
  },
  {
    name: "ReactJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    rotate: 2,
    color: "var(--sticky-blue)",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    rotate: 3,
    color: "var(--sticky-green)",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    rotate: -3,
    color: "var(--sticky-green)",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    rotate: 1,
    color: "var(--sticky-pink)",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    rotate: -2,
    color: "var(--sticky-green)",
  },
];

const toolSkills: Skill[] = [
  {
    name: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    rotate: 2,
    color: "var(--sticky-blue)",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    rotate: -3,
    color: "var(--sticky-pink)",
  },
  {
    name: "BitBucket",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
    rotate: 1,
    color: "var(--sticky-blue)",
  },
  {
    name: "JIRA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    rotate: -2,
    color: "var(--sticky-yellow)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const stickerVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
  visible: (rotate: number) => ({
    opacity: 1,
    scale: 1,
    rotate,
    transition: { duration: 0.4, type: "spring" as const, stiffness: 300 },
  }),
};

function StickerCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      className="text-center p-5 rounded-lg shadow-md relative"
      style={{ background: skill.color }}
      variants={stickerVariants}
      custom={skill.rotate}
      whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
    >
      {/* Tape on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[var(--tape-mint)] opacity-60 rounded-sm" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={skill.icon}
        alt={skill.name}
        width={64}
        height={64}
        className="h-16 w-16 mx-auto mb-3"
      />
      <p className="font-hand text-ink text-lg font-semibold">{skill.name}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scrapbook-section">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat text-5xl font-bold text-ink hand-underline">
          My Toolkit ✏️
        </h2>
        <p className="font-hand text-ink-light mt-3 text-lg">
          The tools & technologies I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Frontend stickers */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {frontendSkills.map((skill) => (
          <StickerCard key={skill.name} skill={skill} />
        ))}
      </motion.div>

      {/* Divider */}
      <div className="scrapbook-divider mb-8" />

      {/* Tools */}
      <h3 className="font-caveat text-3xl font-bold text-coral mb-6">
        Tools & Platforms 🛠️
      </h3>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {toolSkills.map((skill) => (
          <StickerCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}
