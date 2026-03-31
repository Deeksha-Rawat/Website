"use client";

import { useCallback, useEffect, useRef } from "react";

const TRAIL_LENGTH = 60;
const TRAIL_FADE_SPEED = 0.012;
const DOT_SPACING = 12;
const SNIP_SPACING = 6; // small paper snips beside line

interface TrailDot {
  x: number;
  y: number;
  opacity: number;
}

interface Snip {
  x: number;
  y: number;
  opacity: number;
  angle: number;
  side: number; // -1 or 1
  size: number;
}

export default function PlaneCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const prevMouse = useRef({ x: -100, y: -100 });
  const angle = useRef(-Math.PI / 4);
  const trail = useRef<TrailDot[]>([]);
  const snips = useRef<Snip[]>([]);
  const bladeOpen = useRef(0); // 0 = closed, 1 = fully open
  const isVisible = useRef(false);
  const snipSide = useRef(1);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
    isVisible.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isVisible.current = false;
  }, []);

  useEffect(() => {
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(style);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.documentElement.style.cursor = "";
      document.head.removeChild(style);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawScissors = (
      cx: number,
      cy: number,
      rot: number,
      openAmt: number,
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      const bladeAngle = 0.15 + openAmt * 0.35; // blade spread

      // ── Top blade ──
      ctx.save();
      ctx.rotate(-bladeAngle);
      // Blade
      ctx.beginPath();
      ctx.moveTo(2, 0);
      ctx.lineTo(22, -2.5);
      ctx.lineTo(24, -1);
      ctx.lineTo(24, 1);
      ctx.lineTo(22, 2);
      ctx.lineTo(2, 1);
      ctx.closePath();
      const topGrad = ctx.createLinearGradient(2, -2.5, 24, 0);
      topGrad.addColorStop(0, "#a0a0a0");
      topGrad.addColorStop(0.4, "#d4d4d4");
      topGrad.addColorStop(0.6, "#e8e8e8");
      topGrad.addColorStop(1, "#b0b0b0");
      ctx.fillStyle = topGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 80, 80, 0.6)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
      // Cutting edge
      ctx.beginPath();
      ctx.moveTo(3, -0.5);
      ctx.lineTo(23, -2);
      ctx.strokeStyle = "rgba(60, 60, 60, 0.4)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // ── Bottom blade ──
      ctx.save();
      ctx.rotate(bladeAngle);
      ctx.beginPath();
      ctx.moveTo(2, 0);
      ctx.lineTo(22, 2.5);
      ctx.lineTo(24, 1);
      ctx.lineTo(24, -1);
      ctx.lineTo(22, -2);
      ctx.lineTo(2, -1);
      ctx.closePath();
      const botGrad = ctx.createLinearGradient(2, 2.5, 24, 0);
      botGrad.addColorStop(0, "#909090");
      botGrad.addColorStop(0.4, "#c8c8c8");
      botGrad.addColorStop(0.6, "#dcdcdc");
      botGrad.addColorStop(1, "#a0a0a0");
      ctx.fillStyle = botGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 80, 80, 0.6)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(3, 0.5);
      ctx.lineTo(23, 2);
      ctx.strokeStyle = "rgba(60, 60, 60, 0.4)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // ── Pivot screw ──
      ctx.beginPath();
      ctx.arc(2, 0, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#888";
      ctx.fill();
      ctx.strokeStyle = "#666";
      ctx.lineWidth = 0.8;
      ctx.stroke();
      // Screw cross
      ctx.beginPath();
      ctx.moveTo(1, 0);
      ctx.lineTo(3, 0);
      ctx.moveTo(2, -1);
      ctx.lineTo(2, 1);
      ctx.strokeStyle = "rgba(50, 50, 50, 0.5)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // ── Top handle (finger loop) ──
      ctx.save();
      ctx.rotate(-bladeAngle);
      ctx.beginPath();
      ctx.ellipse(-14, -4, 10, 6, 0.1, 0, Math.PI * 2);
      const handleGrad1 = ctx.createRadialGradient(-14, -4, 2, -14, -4, 10);
      handleGrad1.addColorStop(0, "#e8856c"); // coral
      handleGrad1.addColorStop(1, "#c06050");
      ctx.fillStyle = handleGrad1;
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 40, 30, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
      // Inner hole
      ctx.beginPath();
      ctx.ellipse(-14, -4, 6, 3.5, 0.1, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(245, 240, 232, 0.9)"; // paper bg shows through
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 40, 30, 0.3)";
      ctx.lineWidth = 0.6;
      ctx.stroke();
      ctx.restore();

      // ── Bottom handle ──
      ctx.save();
      ctx.rotate(bladeAngle);
      ctx.beginPath();
      ctx.ellipse(-14, 4, 10, 6, -0.1, 0, Math.PI * 2);
      const handleGrad2 = ctx.createRadialGradient(-14, 4, 2, -14, 4, 10);
      handleGrad2.addColorStop(0, "#e8856c");
      handleGrad2.addColorStop(1, "#c06050");
      ctx.fillStyle = handleGrad2;
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 40, 30, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(-14, 4, 6, 3.5, -0.1, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(245, 240, 232, 0.9)";
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 40, 30, 0.3)";
      ctx.lineWidth = 0.6;
      ctx.stroke();
      ctx.restore();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const px = prevMouse.current.x;
      const py = prevMouse.current.y;

      const dx = mx - px;
      const dy = my - py;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Smooth angle
      if (speed > 1) {
        const targetAngle = Math.atan2(dy, dx);
        let diff = targetAngle - angle.current;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        angle.current += diff * 0.15;
      }

      // Animate blade open/close based on speed
      const targetOpen = speed > 2 ? Math.min(speed / 12, 1) : 0;
      bladeOpen.current += (targetOpen - bladeOpen.current) * 0.15;

      // Add dotted-line trail
      if (speed > 1.5 && isVisible.current) {
        const lastDot = trail.current[trail.current.length - 1];
        const shouldAdd =
          !lastDot || Math.hypot(mx - lastDot.x, my - lastDot.y) > DOT_SPACING;

        if (shouldAdd) {
          trail.current.push({ x: mx, y: my, opacity: 0.8 });
          if (trail.current.length > TRAIL_LENGTH) {
            trail.current.shift();
          }
        }

        // Paper snips fly off when cutting fast
        if (speed > 5) {
          const lastSnip = snips.current[snips.current.length - 1];
          const shouldSnip =
            !lastSnip ||
            Math.hypot(mx - lastSnip.x, my - lastSnip.y) > SNIP_SPACING * 3;
          if (shouldSnip && Math.random() < 0.4) {
            snipSide.current *= -1;
            const perpAngle = angle.current + (Math.PI / 2) * snipSide.current;
            const dist = 6 + Math.random() * 10;
            snips.current.push({
              x: mx + Math.cos(perpAngle) * dist,
              y: my + Math.sin(perpAngle) * dist,
              opacity: 0.7,
              angle: angle.current + (Math.random() - 0.5) * 1.5,
              side: snipSide.current,
              size: 3 + Math.random() * 4,
            });
            if (snips.current.length > 30) {
              snips.current.shift();
            }
          }
        }
      }

      // ── Draw dotted cut line ──
      for (let i = 0; i < trail.current.length; i++) {
        const dot = trail.current[i];
        dot.opacity -= TRAIL_FADE_SPEED;
        if (dot.opacity <= 0) continue;

        const nextDot = trail.current[i + 1];
        if (nextDot && nextDot.opacity > 0) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(nextDot.x, nextDot.y);
          ctx.strokeStyle = `rgba(0, 0, 0, ${Math.min(dot.opacity + 0.2, 1)})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
      trail.current = trail.current.filter((d) => d.opacity > 0);

      // ── Draw paper snips ──
      for (const sn of snips.current) {
        sn.opacity -= 0.01;
        sn.y += 0.3; // gentle fall
        sn.angle += 0.02 * sn.side;
        if (sn.opacity <= 0) continue;

        ctx.save();
        ctx.translate(sn.x, sn.y);
        ctx.rotate(sn.angle);
        ctx.globalAlpha = sn.opacity;

        // Small irregular paper scrap
        ctx.beginPath();
        ctx.moveTo(-sn.size, -sn.size * 0.4);
        ctx.lineTo(-sn.size * 0.3, -sn.size * 0.6);
        ctx.lineTo(sn.size * 0.5, -sn.size * 0.2);
        ctx.lineTo(sn.size * 0.3, sn.size * 0.5);
        ctx.lineTo(-sn.size * 0.5, sn.size * 0.3);
        ctx.closePath();
        ctx.fillStyle = "#f5f0e8"; // paper color
        ctx.fill();
        ctx.strokeStyle = "rgba(61, 43, 31, 0.2)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.globalAlpha = 1;
        ctx.restore();
      }
      snips.current = snips.current.filter((s) => s.opacity > 0);

      // ── Draw scissors ──
      if (isVisible.current) {
        drawScissors(mx, my, angle.current, bladeOpen.current);
      }

      prevMouse.current = { x: mx, y: my };
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
}
