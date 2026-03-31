"use client";

import { motion } from "framer-motion";

interface WorkItem {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  subProjects?: { name: string; points: string[] }[];
}

const experience: WorkItem[] = [
  {
    title: "SDE II – FrontEnd",
    company: "Junglee Games, Gurugram",
    period: "Dec 2022 – Present",
    highlights: [
      "Built and scaled high-impact UI systems for large promotional campaigns, driving user engagement, retention, and monetization across platforms.",

      "Developed real-time interactive features including live leaderboards, Spin the Wheel, Daily Login Challenges, and feedback modules used by millions of users.",

      "Delivered performance-critical features during peak events like IPL and World Cup, ensuring platform stability and seamless user experience under heavy traffic.",

      "Improved performance and SEO using lazy loading, code splitting, image optimization, and modular architecture → achieving 75%+ PageSpeed and reducing manual effort by ~50%.",

      "Implemented user journey tracking, event instrumentation, and clickstream analytics to enable data-driven product decisions and campaign optimization.",

      "Collaborated with cross-functional teams (product, design, backend, analytics) to build KPI-driven, scalable frontend solutions.",
    ],

    subProjects: [
      {
        name: "Rafflee",
        points: [
          "Built reusable and scalable UI components with efficient state management using React and Redux.",

          "Integrated REST APIs for dynamic content rendering, promo validation, cart workflows, and order creation ensuring reliable end-to-end transactions.",

          "Implemented clickstream tracking and user journey analytics for attribution and performance insights.",

          "Designed admin panel interfaces for campaign configuration, analytics, and operational workflows.",
        ],
      },

      {
        name: "Core Systems",
        points: [
          "Designed and launched a virtual credit system using Redux and API-driven transactions, improving user retention and Average Order Value (AOV).",

          "Built a scalable subscription management module handling purchase, upgrade, downgrade, and cancellation flows with robust transaction handling.",

          "Developed embedded mobile web views enabling seamless cross-platform engagement.",
        ],
      },

      {
        name: "Achievement Badges",
        points: [
          "Designed and implemented a scalable badge system with 35+ configurable badge types across multiple engagement categories.",

          "Enabled real-time progress tracking for millions of users, increasing campaign participation by 22%.",

          "Improved social engagement with interactive animations and one-click WhatsApp sharing → 2× increase in shares.",
        ],
      },

      {
        name: "GameBetter.in",
        points: [
          "Developed a responsive platform promoting healthy gaming habits and mental well-being.",

          "Built self-assessment tools, appointment booking, and educational resources with strong accessibility and mobile-first design.",
        ],
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="workexperience" className="scrapbook-section">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat text-5xl font-bold text-ink hand-underline">
          Work Experience 💼
        </h2>
        <p className="font-hand text-ink-light mt-3 text-lg">
          Highlights of my professional journey.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((job) => (
          <motion.div
            key={job.company}
            className="paper-card rounded-lg p-8 relative tape-tl tape-br overflow-visible"
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Push pin */}
            <div className="push-pin absolute top-0 right-8" />

            <h3 className="font-caveat text-3xl font-bold text-ink mb-1">
              {job.title}
            </h3>
            <p className="font-hand text-coral text-lg mb-1">{job.company}</p>
            <p className="font-typewriter text-ink-faded text-sm italic mb-5">
              {job.period}
            </p>

            <ul className="space-y-3 mb-6">
              {job.highlights.map((point, i) => (
                <motion.li
                  key={i}
                  className="font-typewriter text-ink-light text-sm flex gap-2 leading-relaxed"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <span className="text-coral mt-0.5 shrink-0">▸</span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <div className="scrapbook-divider" />

            {job.subProjects?.map((proj, pIdx) => {
              const noteColors = [
                "sticky-note sticky-pink",
                "sticky-note sticky-blue",
                "sticky-note sticky-green",
              ];
              const rotations = ["rotate-1", "-rotate-1", "rotate-2"];
              return (
                <motion.div
                  key={proj.name}
                  className={`${noteColors[pIdx % 3]} rounded-sm p-5 mb-4 transform ${rotations[pIdx % 3]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                >
                  <h4 className="font-caveat text-2xl font-bold text-ink mb-2">
                    {proj.name}
                  </h4>
                  <ul className="space-y-1">
                    {proj.points.map((pt, i) => (
                      <li
                        key={i}
                        className="font-hand text-ink-light text-sm flex gap-2"
                      >
                        <span className="text-ink-faded mt-0.5 shrink-0">
                          •
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
