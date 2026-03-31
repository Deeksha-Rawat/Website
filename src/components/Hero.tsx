"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["web.", "future.", "extraordinary."],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center md:pt-1 relative"
    >
      {/* Decorative tape strips */}
      <div className="absolute top-10 right-10 w-24 h-6 bg-[var(--tape-pink)] opacity-50 rotate-12 hidden md:block" />
      <div className="absolute bottom-20 left-0 w-20 h-5 bg-[var(--tape-mint)] opacity-40 -rotate-6 hidden md:block" />

      <div className="text-center md:text-left max-w-4xl relative">
        {/* Sticky note "Hi" */}
        <motion.div
          className="sticky-note inline-block mb-6 transform -rotate-2"
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <p className="font-hand text-xl text-ink">Hi, my name is</p>
        </motion.div>

        <motion.h1
          className="font-caveat text-6xl md:text-8xl font-bold text-ink mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="marker-highlight">Deeksha Rawat</span>
          <span className="text-coral">.</span>
        </motion.h1>

        <motion.h2
          className="font-typewriter text-2xl md:text-4xl text-ink-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build things for the <span ref={typedRef}></span>
        </motion.h2>

        <motion.div
          className="notebook-paper max-w-xl rounded-sm transform rotate-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p className="font-hand text-lg text-ink-light leading-relaxed">
            Frontend Engineer at Junglee Games crafting fast, scalable, and
            user-first experiences. I turn ideas into products that people
            actually enjoy using.
          </p>
        </motion.div>

        {/* Decorative stamp */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
        >
          <span className="stamp">Frontend Developer</span>
        </motion.div>
      </div>
    </section>
  );
}
