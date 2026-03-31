"use client";

import { useEffect, useRef } from "react";

const TRAIL_MAX = 300;
const TRAIL_FADE = 0.003;
const PLANE_SPEED = 2.5;
const PLANE_IDLE_SPEED = 1.8;
const TURN_RATE = 0.04;
const SCROLL_BOOST = 4;

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

export default function PlaneGraffiti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    // State
    let planeX = Math.random() * window.innerWidth * 0.6 + window.innerWidth * 0.2;
    let planeY = Math.random() * window.innerHeight * 0.6 + window.innerHeight * 0.2;
    let planeAngle = -Math.PI / 4;
    let speed = PLANE_SPEED;
    const trail: TrailPoint[] = [];

    // Scroll tracking
    let lastScrollY = window.scrollY;
    let scrollDelta = 0;
    let scrolling = false;
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;

    // Idle wandering target
    let targetX = planeX;
    let targetY = planeY;
    let wanderTimer = 0;

    const pickWanderTarget = () => {
      const margin = 80;
      targetX = margin + Math.random() * (window.innerWidth - margin * 2);
      targetY = margin + Math.random() * (window.innerHeight - margin * 2);
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrolling = true;

      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        scrolling = false;
        scrollDelta = 0;
        pickWanderTarget();
      }, 200);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const drawPlane = (x: number, y: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // Paper airplane shape
      ctx.beginPath();
      // Nose
      ctx.moveTo(18, 0);
      // Top wing
      ctx.lineTo(-14, -12);
      ctx.lineTo(-6, 0);
      // Bottom wing
      ctx.lineTo(-14, 12);
      ctx.closePath();

      // Fill with slight gradient
      const grad = ctx.createLinearGradient(-14, -12, 18, 0);
      grad.addColorStop(0, "rgba(91, 164, 164, 0.85)");
      grad.addColorStop(0.5, "rgba(91, 164, 164, 0.95)");
      grad.addColorStop(1, "rgba(72, 140, 140, 0.9)");
      ctx.fillStyle = grad;
      ctx.fill();

      // Outline
      ctx.strokeStyle = "rgba(61, 43, 31, 0.6)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Center fold line
      ctx.beginPath();
      ctx.moveTo(18, 0);
      ctx.lineTo(-10, 0);
      ctx.strokeStyle = "rgba(61, 43, 31, 0.3)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Tiny tail fin
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(-14, -4);
      ctx.lineTo(-12, 0);
      ctx.lineTo(-14, 4);
      ctx.closePath();
      ctx.fillStyle = "rgba(91, 164, 164, 0.6)";
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (scrolling && Math.abs(scrollDelta) > 0) {
        // When scrolling, move plane diagonally across screen
        const scrollDir = scrollDelta > 0 ? 1 : -1;
        const targetAngle = scrollDir > 0
          ? Math.PI * 0.15   // scroll down → fly slightly downward-right
          : -Math.PI * 0.15; // scroll up → fly slightly upward-right

        let diff = targetAngle - planeAngle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        planeAngle += diff * TURN_RATE * 2;

        speed = PLANE_SPEED + Math.min(Math.abs(scrollDelta) * 0.3, SCROLL_BOOST);
      } else {
        // Idle: wander within viewport
        wanderTimer++;
        if (wanderTimer > 180 || Math.hypot(targetX - planeX, targetY - planeY) < 40) {
          pickWanderTarget();
          wanderTimer = 0;
        }

        const targetAngle = Math.atan2(targetY - planeY, targetX - planeX);
        let diff = targetAngle - planeAngle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        planeAngle += diff * TURN_RATE;

        speed += (PLANE_IDLE_SPEED - speed) * 0.05;
      }

      // Move the plane
      planeX += Math.cos(planeAngle) * speed;
      planeY += Math.sin(planeAngle) * speed;

      // Wrap around viewport edges with padding
      const pad = 30;
      if (planeX > canvas.width + pad) {
        planeX = -pad;
        trail.length = 0; // clear trail on wrap to avoid connecting line
      }
      if (planeX < -pad) {
        planeX = canvas.width + pad;
        trail.length = 0;
      }
      if (planeY > canvas.height + pad) {
        planeY = -pad;
        trail.length = 0;
      }
      if (planeY < -pad) {
        planeY = canvas.height + pad;
        trail.length = 0;
      }

      // Add to trail
      const lastPt = trail[trail.length - 1];
      if (!lastPt || Math.hypot(planeX - lastPt.x, planeY - lastPt.y) > 4) {
        trail.push({ x: planeX, y: planeY, opacity: 0.7 });
        if (trail.length > TRAIL_MAX) trail.shift();
      }

      // Draw trail as dashed line
      for (let i = 0; i < trail.length - 1; i++) {
        const pt = trail[i];
        const next = trail[i + 1];
        pt.opacity -= TRAIL_FADE;
        if (pt.opacity <= 0) continue;

        // Alternate dash segments
        if (i % 3 === 0) {
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(61, 43, 31, ${pt.opacity * 0.6})`;
          ctx.lineWidth = 1.8;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      // Remove dead trail points
      while (trail.length > 0 && trail[0].opacity <= 0) {
        trail.shift();
      }

      // Draw the plane
      drawPlane(planeX, planeY, planeAngle);

      raf = requestAnimationFrame(animate);
    };

    pickWanderTarget();
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9998] pointer-events-none"
      aria-hidden="true"
    />
  );
}
