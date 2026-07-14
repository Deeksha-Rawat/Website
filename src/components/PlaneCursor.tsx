"use client";

import { useCallback, useEffect, useRef } from "react";

export default function PlaneCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const isVisible = useRef(false);

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

    const drawPin = (cx: number, cy: number, lift: number) => {
      ctx.save();
      ctx.translate(cx, cy - lift);
      ctx.rotate(-0.5);

      // Shadow cast on the page
      ctx.beginPath();
      ctx.ellipse(2, 15, 5, 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(61, 43, 31, 0.18)";
      ctx.fill();

      // Metal point
      ctx.beginPath();
      ctx.moveTo(-1, 6);
      ctx.lineTo(1, 6);
      ctx.lineTo(0, 15);
      ctx.closePath();
      const pointGrad = ctx.createLinearGradient(-1, 6, 1, 15);
      pointGrad.addColorStop(0, "#c8c8c8");
      pointGrad.addColorStop(1, "#8a8a8a");
      ctx.fillStyle = pointGrad;
      ctx.fill();

      // Pin head
      ctx.beginPath();
      ctx.arc(0, 0, 7, 0, Math.PI * 2);
      const headGrad = ctx.createRadialGradient(-2, -2, 1, 0, 0, 7);
      headGrad.addColorStop(0, "#f2a08c"); // coral
      headGrad.addColorStop(1, "#c9604a");
      ctx.fillStyle = headGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 40, 30, 0.5)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Highlight
      ctx.beginPath();
      ctx.arc(-2.3, -2.3, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
      ctx.fill();

      ctx.restore();
    };

    const animate = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible.current) {
        const lift = Math.sin(t / 500) * 1.5;
        drawPin(mouse.current.x, mouse.current.y, lift);
      }

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
