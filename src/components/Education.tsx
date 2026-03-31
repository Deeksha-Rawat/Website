"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  noteColor: string;
  tapeColor: string;
  rotate: string;
}

const educationItems: EducationItem[] = [
  {
    period: "2018 – 2022",
    title: "B.Tech in Computer Science & Engineering",
    institution:
      "Govind Ballabh Pant Institute of Engineering and Technology, Uttarakhand",
    description: "CGPA: 8.4",
    noteColor: "var(--sticky-yellow)",
    tapeColor: "var(--tape-pink)",
    rotate: "-1deg",
  },
  {
    period: "2017 – 2018",
    title: "Intermediate (Senior Secondary)",
    institution: "ST Thomas School, Uttarakhand",
    description: "Aggregate: 94%",
    noteColor: "var(--sticky-pink)",
    tapeColor: "var(--tape-mint)",
    rotate: "2deg",
  },
  {
    period: "2015 – 2016",
    title: "High School",
    institution: "ST Thomas School, Uttarakhand",
    description: "Aggregate: 94.6%",
    noteColor: "var(--sticky-blue)",
    tapeColor: "var(--tape-lavender)",
    rotate: "-2deg",
  },
];

function StackCard({
  item,
  index,
  totalCards,
}: {
  item: EducationItem;
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky"
      style={{
        top: `calc(10rem + ${index * 2.5}rem)`,
        scale,
        opacity,
        zIndex: totalCards - index,
      }}
    >
      <div
        className="rounded-lg p-8 shadow-lg relative overflow-visible"
        style={{
          background: item.noteColor,
          transform: `rotate(${item.rotate})`,
        }}
      >
        {/* Washi tape on top */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-sm opacity-60"
          style={{ background: item.tapeColor }}
        />

        {/* Folded corner */}
        <div
          className="absolute bottom-0 right-0 w-0 h-0"
          style={{
            borderStyle: "solid",
            borderWidth: "0 0 28px 28px",
            borderColor: "transparent transparent var(--paper) transparent",
          }}
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <span className="stamp text-xs mb-3 inline-block">
              {item.period}
            </span>
            <h3 className="font-caveat text-3xl font-bold text-ink mb-2">
              {item.title}
            </h3>
            <p className="font-hand text-ink-light italic text-lg">
              {item.institution}
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-caveat text-4xl font-bold text-coral">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="scrapbook-section">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat text-5xl font-bold text-ink hand-underline">
          Education 🎓
        </h2>
        <p className="font-hand text-ink-light mt-3 text-lg">
          My academic journey & milestones.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <div className="space-y-8 pb-[20vh]">
          {educationItems.map((item, index) => (
            <StackCard
              key={item.period}
              item={item}
              index={index}
              totalCards={educationItems.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
