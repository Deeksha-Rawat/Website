"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="scrapbook-section">
      <motion.div
        className="max-w-3xl mx-auto relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* ── Airmail envelope wrapper ── */}
        <div className="relative bg-[#faf6ee] rounded-lg overflow-hidden shadow-xl">
          {/* Airmail border stripes — top */}
          <div className="h-4 flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? "bg-[#dc3545]" : "bg-[#2563eb]"}`}
              />
            ))}
          </div>

          <div className="px-8 sm:px-12 py-10 relative">
            {/* ── Postage stamp (top right) ── */}
            <motion.div
              className="absolute top-4 right-6 w-20 h-24 bg-white border-2 border-dashed border-ink/30 flex flex-col items-center justify-center rounded-sm"
              initial={{ opacity: 0, rotate: 8 }}
              whileInView={{ opacity: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.1)" }}
            >
              <span className="text-3xl">✈️</span>
              <span className="font-typewriter text-[8px] text-ink/60 mt-1 tracking-widest uppercase">
                Air Mail
              </span>
              <span className="font-caveat text-ink/40 text-xs mt-0.5">
                2026
              </span>
            </motion.div>

            {/* ── Postmark circle (overlapping stamp) ── */}
            <motion.div
              className="absolute top-6 right-2 w-24 h-24 rounded-full border-2 border-ink/15 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{ transform: "rotate(-15deg)" }}
            >
              <div className="text-center">
                <div className="font-typewriter text-[6px] text-ink/20 tracking-[3px] uppercase">
                  Delivered
                </div>
                <div className="w-12 h-[1px] bg-ink/10 mx-auto my-0.5" />
                <div className="font-typewriter text-[6px] text-ink/20">
                  31.03.2026
                </div>
              </div>
            </motion.div>

            {/* ── "TO:" address lines ── */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="font-typewriter text-xs text-ink/40 uppercase tracking-widest">
                To:
              </span>
              <p className="font-caveat text-2xl text-ink mt-1">
                A Wonderful Recruiter / Collaborator
              </p>
              <div className="w-64 h-[1px] bg-ink/10 mt-1" />
              <p className="font-hand text-ink/50 text-sm mt-1">
                Somewhere amazing, Internet
              </p>
              <div className="w-48 h-[1px] bg-ink/10 mt-1" />
            </motion.div>

            {/* ── Letter body (notebook lines) ── */}
            <motion.div
              className="relative bg-white/60 rounded-md p-6 mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, rgba(61,43,31,0.08) 27px, rgba(61,43,31,0.08) 28px)",
                backgroundPosition: "0 8px",
              }}
            >
              {/* Red margin line */}
              <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-red-300/30" />

              <p className="font-hand text-ink text-lg leading-[28px] pl-6">
                Dear Reader,
              </p>
              <p className="font-hand text-ink-light text-lg leading-[28px] pl-6 mt-2">
                I&apos;m currently open to new opportunities and would love to
                hear from you! Whether it&apos;s about a role, a collaboration,
                or just to say hello — my inbox is always open and I promise to
                write back.
              </p>
              <p className="font-hand text-ink text-lg leading-[28px] pl-6 mt-3">
                Looking forward to connecting ✨
              </p>
              <p className="font-caveat text-xl text-coral pl-6 mt-2">
                — Deeksha
              </p>
            </motion.div>

            {/* ── Wax seal + CTA ── */}
            <motion.div
              className="flex items-center gap-6 justify-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              {/* Wax seal */}
              <motion.div
                className="relative w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #e8856c, #c0504d, #8b2500)",
                  boxShadow:
                    "inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,200,180,0.3), 2px 3px 8px rgba(0,0,0,0.2)",
                }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <span className="font-caveat text-white text-xl font-bold drop-shadow-md">
                  D
                </span>
              </motion.div>

              <motion.a
                href="mailto:deeksha9557@gmail.com"
                className="inline-block font-hand text-lg bg-[var(--sticky-yellow)] text-ink px-8 py-3 shadow-md hover:shadow-lg transition duration-300 relative"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Tape on button */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-[var(--tape-mint)] opacity-50 rounded-sm" />
                Say Hello 👋
              </motion.a>
            </motion.div>
          </div>

          {/* Airmail border stripes — bottom */}
          <div className="h-4 flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? "bg-[#2563eb]" : "bg-[#dc3545]"}`}
              />
            ))}
          </div>
        </div>

        {/* ── Decorative tape holding the envelope ── */}
        <div className="absolute -top-3 left-12 w-20 h-5 bg-[var(--tape-yellow)] opacity-60 -rotate-12 rounded-sm" />
        <div className="absolute -top-2 right-16 w-14 h-5 bg-[var(--tape-pink)] opacity-50 rotate-6 rounded-sm" />
      </motion.div>
    </section>
  );
}
