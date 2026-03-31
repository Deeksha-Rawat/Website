"use client";

import { useCallback, useEffect, useRef } from "react";
import { useSpring, animated, to } from "@react-spring/web";

/* ── SVG Origami & Craft Shapes ── */

function PaperPlane({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 32L58 6L38 58L30 36L6 32Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M30 36L58 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaperPlaneFilled({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 32L58 6L38 58L30 36L6 32Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M30 36L58 6L6 32L30 36Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      <path
        d="M30 36L58 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function PaperPlaneAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 32L58 6L38 58L30 36L6 32Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.45"
      />
      <path
        d="M30 36L58 6L38 58L30 36Z"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M30 36L58 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Trailing dash */}
      <path
        d="M6 32L-10 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.4"
      />
    </svg>
  );
}

function Butterfly({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left wing */}
      <path
        d="M32 32C24 20 8 14 10 28C12 42 28 38 32 32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Right wing */}
      <path
        d="M32 32C40 20 56 14 54 28C52 42 36 38 32 32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Lower left */}
      <path
        d="M32 32C26 38 14 48 18 38C22 28 30 34 32 32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Lower right */}
      <path
        d="M32 32C38 38 50 48 46 38C42 28 34 34 32 32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Body */}
      <path
        d="M32 24V44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Antennae */}
      <path
        d="M32 24C30 18 26 14 24 12M32 24C34 18 38 14 40 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaperBoat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 36L32 8L56 36H8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M4 36C4 36 16 44 32 44C48 44 60 36 60 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 8V36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
    </svg>
  );
}

function OrigamiCrane({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 40L32 16L56 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M32 16L20 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 16L44 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 16L20 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4L29.5 18H44L32.5 27L37 42L24 33L11 42L15.5 27L4 18H18.5L24 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 42S4 28 4 16C4 8 10 4 16 4C20 4 23 7 24 10C25 7 28 4 32 4C38 4 44 8 44 16C44 28 24 42 24 42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
}

function Scissors({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 14L40 38M16 34L40 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DottedLine({
  x1,
  y1,
  x2,
  y2,
  color,
}: {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  color: string;
}) {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{ left: x1, top: y1, width: "120px", height: "2px" }}
    >
      <line
        x1="0"
        y1="1"
        x2="120"
        y2="1"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity="0.3"
      />
    </svg>
  );
}

/* ── Graffiti Doodles (spray paint style text/shapes) ── */

function GraffitiSplat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 5C20 5 5 20 8 35C11 50 30 55 45 50C60 45 75 35 70 20C65 5 55 5 40 5Z"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M15 25C12 22 10 28 14 29C18 30 17 28 15 25Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M60 15C58 12 55 16 58 18C61 20 63 18 60 15Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </svg>
  );
}

/* ── Decoration items with positions ── */

interface DecoItem {
  Component: React.FC<{ className?: string }>;
  xPct: number;
  yPct: number;
  size: number;
  color: string;
  baseRotate: number;
  floatAmplitude: number;
  floatDuration: number;
  isPlane?: boolean;
}

const decorations: DecoItem[] = [
  // Paper planes — mix of outlined and filled
  {
    Component: PaperPlaneFilled,
    xPct: 5,
    yPct: 8,
    size: 48,
    color: "var(--accent-coral)",
    baseRotate: 15,
    floatAmplitude: 12,
    floatDuration: 6,
    isPlane: true,
  },
  {
    Component: PaperPlane,
    xPct: 88,
    yPct: 25,
    size: 36,
    color: "var(--accent-teal)",
    baseRotate: -20,
    floatAmplitude: 8,
    floatDuration: 7,
    isPlane: true,
  },
  {
    Component: PaperPlaneAccent,
    xPct: 75,
    yPct: 72,
    size: 42,
    color: "var(--accent-mustard)",
    baseRotate: 30,
    floatAmplitude: 10,
    floatDuration: 5.5,
    isPlane: true,
  },
  {
    Component: PaperPlaneFilled,
    xPct: 50,
    yPct: 5,
    size: 40,
    color: "var(--tape-lavender)",
    baseRotate: -10,
    floatAmplitude: 8,
    floatDuration: 8,
    isPlane: true,
  },
  {
    Component: PaperPlaneAccent,
    xPct: 20,
    yPct: 50,
    size: 34,
    color: "var(--tape-pink)",
    baseRotate: 5,
    floatAmplitude: 6,
    floatDuration: 7,
    isPlane: true,
  },

  // Butterflies
  {
    Component: Butterfly,
    xPct: 92,
    yPct: 12,
    size: 44,
    color: "var(--tape-pink)",
    baseRotate: -10,
    floatAmplitude: 15,
    floatDuration: 4,
  },
  {
    Component: Butterfly,
    xPct: 3,
    yPct: 42,
    size: 38,
    color: "var(--tape-lavender)",
    baseRotate: 8,
    floatAmplitude: 12,
    floatDuration: 5,
  },
  {
    Component: Butterfly,
    xPct: 85,
    yPct: 55,
    size: 32,
    color: "var(--accent-coral)",
    baseRotate: -5,
    floatAmplitude: 10,
    floatDuration: 4.5,
  },

  // Paper boats
  {
    Component: PaperBoat,
    xPct: 8,
    yPct: 68,
    size: 50,
    color: "var(--accent-teal)",
    baseRotate: -5,
    floatAmplitude: 6,
    floatDuration: 8,
  },
  {
    Component: PaperBoat,
    xPct: 90,
    yPct: 90,
    size: 40,
    color: "var(--kraft)",
    baseRotate: 8,
    floatAmplitude: 5,
    floatDuration: 7,
  },

  // Origami cranes
  {
    Component: OrigamiCrane,
    xPct: 12,
    yPct: 28,
    size: 40,
    color: "var(--accent-mustard)",
    baseRotate: 12,
    floatAmplitude: 10,
    floatDuration: 6.5,
  },
  {
    Component: OrigamiCrane,
    xPct: 78,
    yPct: 42,
    size: 36,
    color: "var(--tape-mint)",
    baseRotate: -15,
    floatAmplitude: 8,
    floatDuration: 5,
  },

  // Stars
  {
    Component: Star,
    xPct: 18,
    yPct: 15,
    size: 24,
    color: "var(--accent-mustard)",
    baseRotate: 10,
    floatAmplitude: 5,
    floatDuration: 4,
  },
  {
    Component: Star,
    xPct: 82,
    yPct: 5,
    size: 20,
    color: "var(--accent-coral)",
    baseRotate: -8,
    floatAmplitude: 4,
    floatDuration: 5,
  },
  {
    Component: Star,
    xPct: 95,
    yPct: 65,
    size: 22,
    color: "var(--tape-yellow)",
    baseRotate: 15,
    floatAmplitude: 6,
    floatDuration: 6,
  },

  // Hearts
  {
    Component: Heart,
    xPct: 6,
    yPct: 55,
    size: 22,
    color: "var(--tape-pink)",
    baseRotate: -12,
    floatAmplitude: 8,
    floatDuration: 4.5,
  },
  {
    Component: Heart,
    xPct: 70,
    yPct: 8,
    size: 18,
    color: "var(--accent-coral)",
    baseRotate: 20,
    floatAmplitude: 5,
    floatDuration: 5.5,
  },

  // Scissors
  {
    Component: Scissors,
    xPct: 15,
    yPct: 82,
    size: 30,
    color: "var(--ink-faded)",
    baseRotate: 25,
    floatAmplitude: 3,
    floatDuration: 9,
  },

  // Graffiti splats
  {
    Component: GraffitiSplat,
    xPct: 25,
    yPct: 5,
    size: 90,
    color: "var(--tape-pink)",
    baseRotate: -8,
    floatAmplitude: 3,
    floatDuration: 10,
  },
  {
    Component: GraffitiSplat,
    xPct: 60,
    yPct: 35,
    size: 80,
    color: "var(--tape-lavender)",
    baseRotate: 12,
    floatAmplitude: 2,
    floatDuration: 11,
  },
  {
    Component: GraffitiSplat,
    xPct: 40,
    yPct: 75,
    size: 100,
    color: "var(--tape-mint)",
    baseRotate: -15,
    floatAmplitude: 4,
    floatDuration: 9,
  },
];

/* ── Repulsion radius in px ── */
const REPULSE_RADIUS = 150;
const REPULSE_STRENGTH = 120;

const WANDER_INTERVAL_MIN = 5000; // ms
const WANDER_INTERVAL_MAX = 10000; // ms

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

/**
 * Compute a random waypoint in px, measured from the item's CSS anchor.
 * The target is a random spot on the full viewport, converted to an offset
 * from the element's anchor (xPct%, yPct%).
 */
function randomViewportOffset(anchorXPct: number, anchorYPct: number) {
  // Pick a random target position anywhere on screen (with some padding)
  const targetXPct = randomBetween(5, 95);
  const targetYPct = randomBetween(5, 95);
  // Convert % difference to px using viewport dimensions
  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const dx = ((targetXPct - anchorXPct) / 100) * vw;
  const dy = ((targetYPct - anchorYPct) / 100) * vh;
  return { x: dx, y: dy };
}

/* ── Single wandering + repulsing origami item ── */
function FloatingItem({
  deco,
  index,
  mouseRef,
}: {
  deco: DecoItem;
  index: number;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const elRef = useRef<HTMLDivElement>(null);
  const floatPhase = useRef(Math.random() * Math.PI * 2);
  const floatYRef = useRef(0);
  const wanderTarget = useRef({ x: 0, y: 0 });
  const repulseOffset = useRef({ x: 0, y: 0 });

  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotate: deco.baseRotate,
    scale: 1,
    config: { tension: 8, friction: 22 }, // very slow, gliding drift
  }));

  // Wandering: pick random spots across the full viewport
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const pickNewTarget = () => {
      const offset = randomViewportOffset(deco.xPct, deco.yPct);
      const prevX = wanderTarget.current.x;
      const prevY = wanderTarget.current.y;
      wanderTarget.current = offset;

      // Rotate to face the direction of travel
      const travelAngle =
        Math.atan2(offset.y - prevY, offset.x - prevX) * (180 / Math.PI);

      // Planes point nose in travel direction; others just tilt gently
      const targetRotate = deco.isPlane
        ? travelAngle - 45 // -45 because the SVG nose points upper-right
        : travelAngle * 0.3 + deco.baseRotate;

      api.start({
        x: offset.x + repulseOffset.current.x,
        y: offset.y + repulseOffset.current.y,
        rotate: targetRotate,
        scale: 1,
        config: deco.isPlane
          ? { tension: randomBetween(5, 10), friction: randomBetween(24, 35) } // extra smooth for planes
          : { tension: randomBetween(6, 14), friction: randomBetween(20, 30) },
      });

      const next = randomBetween(WANDER_INTERVAL_MIN, WANDER_INTERVAL_MAX);
      timeout = setTimeout(pickNewTarget, next);
    };

    // Stagger start
    const initialDelay = index * 600 + randomBetween(0, 3000);
    timeout = setTimeout(pickNewTarget, initialDelay);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, deco.baseRotate, deco.xPct, deco.yPct, index]);

  // Ambient float (small vertical bob) via raf — written to ref to avoid setState 60fps
  useEffect(() => {
    let raf: number;
    const animate = () => {
      const t = Date.now() / 1000;
      floatYRef.current =
        Math.sin((t * Math.PI * 2) / deco.floatDuration + floatPhase.current) *
        deco.floatAmplitude;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [deco.floatDuration, deco.floatAmplitude]);

  // Mouse repulsion check via raf
  useEffect(() => {
    let raf: number;
    const check = () => {
      if (!elRef.current) {
        raf = requestAnimationFrame(check);
        return;
      }
      const rect = elRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const dx = cx - mx;
      const dy = cy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPULSE_RADIUS && dist > 0) {
        const force =
          ((REPULSE_RADIUS - dist) / REPULSE_RADIUS) * REPULSE_STRENGTH;
        const angle = Math.atan2(dy, dx);
        const rx = Math.cos(angle) * force;
        const ry = Math.sin(angle) * force;
        repulseOffset.current = { x: rx, y: ry };
        api.start({
          x: wanderTarget.current.x + rx,
          y: wanderTarget.current.y + ry,
          rotate: deco.baseRotate + rx / 2,
          scale: 1.15,
          config: { tension: 200, friction: 14 }, // snappy repulsion
        });
      } else {
        if (repulseOffset.current.x !== 0 || repulseOffset.current.y !== 0) {
          repulseOffset.current = { x: 0, y: 0 };
          api.start({
            x: wanderTarget.current.x,
            y: wanderTarget.current.y,
            scale: 1,
            config: { tension: 120, friction: 14 }, // spring back
          });
        }
      }
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, [api, deco.baseRotate, mouseRef]);

  const { Component } = deco;

  return (
    <animated.div
      ref={elRef}
      className="absolute pointer-events-auto cursor-default"
      style={{
        left: `${deco.xPct}%`,
        top: `${deco.yPct}%`,
        width: deco.size,
        height: deco.size,
        color: deco.color,
        transform: to(
          [spring.x, spring.y, spring.rotate, spring.scale],
          (xVal, yVal, rot, sc) =>
            `translate3d(${xVal}px, ${yVal + floatYRef.current}px, 0) rotate(${rot}deg) scale(${sc})`,
        ),
        opacity: 1,
      }}
    >
      <Component className="w-full h-full" />
    </animated.div>
  );
}

export default function ScrapbookDecorations() {
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Graffiti text doodles */}
      <span
        className="graffiti-text absolute text-[var(--tape-pink)]"
        style={{
          left: "2%",
          top: "20%",
          fontSize: "28px",
          transform: "rotate(-12deg)",
        }}
      >
        create!
      </span>
      <span
        className="graffiti-text absolute text-[var(--accent-teal)]"
        style={{
          right: "3%",
          top: "48%",
          fontSize: "22px",
          transform: "rotate(8deg)",
        }}
      >
        dream ★
      </span>
      <span
        className="graffiti-text absolute text-[var(--accent-mustard)]"
        style={{
          left: "60%",
          top: "3%",
          fontSize: "20px",
          transform: "rotate(-5deg)",
        }}
      >
        code &lt;/&gt;
      </span>
      <span
        className="graffiti-text absolute text-[var(--tape-lavender)]"
        style={{
          left: "4%",
          top: "92%",
          fontSize: "24px",
          transform: "rotate(6deg)",
        }}
      >
        build ✦
      </span>
      <span
        className="graffiti-text absolute text-[var(--accent-coral)]"
        style={{
          right: "8%",
          top: "78%",
          fontSize: "18px",
          transform: "rotate(-10deg)",
        }}
      >
        design~
      </span>

      {/* Dotted cut lines */}
      <DottedLine
        x1="10%"
        y1="35%"
        x2="20%"
        y2="35%"
        color="var(--ink-faded)"
      />
      <DottedLine
        x1="80%"
        y1="60%"
        x2="90%"
        y2="60%"
        color="var(--ink-faded)"
      />

      {/* Floating origami & craft items with mouse repulsion */}
      {decorations.map((deco, i) => (
        <FloatingItem key={i} deco={deco} index={i} mouseRef={mouseRef} />
      ))}

      {/* Spray paint dots (scattered) */}
      {[
        { x: "20%", y: "12%", c: "var(--tape-pink)" },
        { x: "45%", y: "8%", c: "var(--tape-lavender)" },
        { x: "72%", y: "18%", c: "var(--tape-mint)" },
        { x: "30%", y: "45%", c: "var(--accent-coral)" },
        { x: "55%", y: "65%", c: "var(--tape-yellow)" },
        { x: "15%", y: "75%", c: "var(--accent-teal)" },
        { x: "85%", y: "85%", c: "var(--tape-pink)" },
        { x: "50%", y: "92%", c: "var(--tape-lavender)" },
      ].map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${6 + (i % 4) * 3}px`,
            height: `${6 + (i % 4) * 3}px`,
            background: dot.c,
            opacity: 0.15 + (i % 3) * 0.05,
          }}
        />
      ))}
    </div>
  );
}
