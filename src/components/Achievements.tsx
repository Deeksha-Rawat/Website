"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
  noteColor: string;
  rotate: number;
  emoji: string;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "Top Rookie Award",
    description:
      "Awarded for exemplary contributions and dedication as a new team member.",
    noteColor: "var(--sticky-yellow)",
    rotate: -2,
    emoji: "🏆",
  },
  {
    icon: Zap,
    title: "Spot Award",
    description:
      "Recognizes exceptional performance, initiative, and impact beyond regular responsibilities.",
    noteColor: "var(--sticky-pink)",
    rotate: 3,
    emoji: "⚡",
  },
  {
    icon: Wrench,
    title: "TroubleShooter Award",
    description:
      "Awarded for outstanding problem-solving skills and resolving complex challenges efficiently.",
    noteColor: "var(--sticky-green)",
    rotate: -1,
    emoji: "🔧",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotate: 0 },
  visible: (rotate: number) => ({
    opacity: 1,
    y: 0,
    rotate,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 200 },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="scrapbook-section">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat text-5xl font-bold text-ink hand-underline">
          Awards & Kudos ⭐
        </h2>
        <p className="font-hand text-ink-light mt-3 text-lg">
          Recognition for going above and beyond.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={cardVariants}
              custom={item.rotate}
              whileHover={{ rotate: 0, scale: 1.05, y: -6 }}
              className="sticky-note rounded-lg p-7 text-center relative overflow-visible"
              style={{ background: item.noteColor }}
            >
              {/* Pin */}
              <div className="push-pin" />

              <div className="text-4xl mb-4">{item.emoji}</div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/50 mb-4">
                <Icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-caveat text-2xl font-bold text-ink mb-2">
                {item.title}
              </h3>
              <p className="font-hand text-ink-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
