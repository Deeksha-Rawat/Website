"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scrapbook-section">
      {/* Section heading with washi tape */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat text-5xl font-bold text-ink hand-underline">
          About Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text on notebook paper */}
        <motion.div
          className="notebook-paper rounded-sm relative transform -rotate-1"
          initial={{ opacity: 0, x: -40, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-hand text-lg text-ink mb-4 leading-relaxed">
            Hey, I’m Deeksha 👋 I build fast, scalable, and engaging web
            experiences at Junglee Games.
          </p>
          <p className="font-hand text-lg text-ink mb-4 leading-relaxed">
            I work on high-impact UI systems used by millions—focused on
            performance, seamless user journeys, and real business outcomes like
            retention and monetization.
          </p>
          <p className="font-hand text-lg text-ink leading-relaxed">
            From real-time engagement features to large-scale campaign flows
            during events like IPL and World Cup, I ensure products stay smooth
            even under peak traffic.
          </p>
          <p className="font-hand text-lg text-ink leading-relaxed">
            I care deeply about performance, clean architecture, and building
            systems that scale—improving speed, reducing effort, and delivering
            measurable results.
          </p>
        </motion.div>

        {/* Photo in polaroid frame */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 3 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="polaroid transform rotate-3 relative tape-tl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/400x350/e8dfd0/3d2b1f?text=Deeksha"
              alt="About Me"
              className="w-full h-72 object-cover"
            />
            <p className="font-caveat text-center text-ink text-xl mt-3">
              That&apos;s me! 📸
            </p>
          </div>
        </motion.div>
      </div>

      {/* Coffee stain decoration */}
      <div className="coffee-stain relative h-0" />
    </section>
  );
}
