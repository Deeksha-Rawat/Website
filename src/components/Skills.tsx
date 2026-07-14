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
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    rotate: 2,
    color: "var(--sticky-blue)",
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
  {
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    rotate: 2,
    color: "var(--sticky-pink)",
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
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    rotate: 2,
    color: "var(--sticky-yellow)",
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
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    rotate: -1,
    color: "var(--sticky-green)",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    rotate: 3,
    color: "var(--sticky-pink)",
  },
];

interface TagCategory {
  title: string;
  emoji: string;
  tags: string[];
  color: string;
}

const tagCategories: TagCategory[] = [
  {
    title: "State Management",
    emoji: "🔄",
    tags: ["Redux Toolkit (RTK Query)", "Context API"],
    color: "var(--sticky-pink)",
  },
  {
    title: "UI & Architecture",
    emoji: "🎨",
    tags: [
      "Component-Based Architecture",
      "Design Systems",
      "Responsive & Accessible UI",
      "Cross-Browser Compatibility",
    ],
    color: "var(--sticky-blue)",
  },
  {
    title: "Performance & SEO",
    emoji: "⚡",
    tags: [
      "Core Web Vitals",
      "Lazy Loading",
      "Code Splitting",
      "Image Optimization",
      "Google PageSpeed Optimization",
    ],
    color: "var(--sticky-green)",
  },
  {
    title: "System Design & Engineering Practices",
    emoji: "🧩",
    tags: [
      "Scalable Frontend Architecture",
      "System Design",
      "Code Reviews",
      "Component & API Design",
      "Debugging",
    ],
    color: "var(--sticky-yellow)",
  },
  {
    title: "APIs & Data",
    emoji: "🔌",
    tags: ["REST API Integration & Design", "JSON", "Dynamic Content Rendering"],
    color: "var(--sticky-pink)",
  },
  {
    title: "Workflow Practices",
    emoji: "🚀",
    tags: ["Agile/Scrum", "Version Control", "AI-Assisted Development Workflows"],
    color: "var(--sticky-blue)",
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

function TagChip({
  label,
  color,
  rotate,
}: {
  label: string;
  color: string;
  rotate: number;
}) {
  return (
    <motion.span
      className="inline-block font-hand text-ink text-sm sm:text-base px-4 py-1.5 rounded-full shadow-sm border border-ink/10"
      style={{ background: color }}
      variants={stickerVariants}
      custom={rotate}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
    >
      {label}
    </motion.span>
  );
}

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

      {/* Divider */}
      <div className="scrapbook-divider mb-8 mt-12" />

      {/* Practices & Concepts */}
      <h3 className="font-caveat text-3xl font-bold text-coral mb-6">
        Practices & Concepts 🧠
      </h3>
      <div className="space-y-8">
        {tagCategories.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-hand text-ink-light text-lg mb-3">
              {category.emoji} {category.title}
            </p>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {category.tags.map((tag, i) => (
                <TagChip
                  key={tag}
                  label={tag}
                  color={category.color}
                  rotate={i % 2 === 0 ? -1.5 : 1.5}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
