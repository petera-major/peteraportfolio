"use client";

import { useEffect, useRef } from "react";

// ============================================
// SCROLL EFFECTS — drop this once in page.tsx
// Handles: floating spore particles, section
// heading flicker on scroll, cursor glow trail
// ============================================

export default function ScrollEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<{ x: number; y: number; alpha: number }[]>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  // ── 1. FLOATING SPORE PARTICLES ──────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Spore = {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      alphaSpeed: number;
      color: string;
    };

    const COLORS = [
      "204,0,0",
      "180,30,0",
      "220,80,0",
      "150,0,0",
      "200,50,20",
    ];

    const spores: Spore[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.2 + 0.4,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.18 + 0.04,
      alphaSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spores.forEach((s) => {
        s.y += s.speedY;
        s.x += s.speedX;
        s.alpha += s.alphaSpeed;
        if (s.alpha > 0.22 || s.alpha < 0.02) s.alphaSpeed *= -1;
        if (s.y < -10) { s.y = canvas.height + 10; s.x = Math.random() * canvas.width; }
        if (s.x < -10 || s.x > canvas.width + 10) s.x = Math.random() * canvas.width;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.alpha})`;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── 2. CURSOR GLOW TRAIL ─────────────────────────────────
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      trailRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1 });
      if (trailRef.current.length > 18) trailRef.current.shift();
    };

    const renderTrail = () => {
      if (!cursor) return;
      trailRef.current = trailRef.current
        .map((p) => ({ ...p, alpha: p.alpha - 0.055 }))
        .filter((p) => p.alpha > 0);

      cursor.innerHTML = "";
      trailRef.current.forEach((p) => {
        const dot = document.createElement("div");
        const size = Math.max(3, p.alpha * 10);
        dot.style.cssText = `
          position:fixed;
          left:${p.x}px;
          top:${p.y}px;
          width:${size}px;
          height:${size}px;
          border-radius:50%;
          background:rgba(204,0,0,${p.alpha * 0.6});
          transform:translate(-50%,-50%);
          pointer-events:none;
          z-index:9999;
        `;
        cursor.appendChild(dot);
      });
      requestAnimationFrame(renderTrail);
    };

    window.addEventListener("mousemove", onMouseMove);
    renderTrail();
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // ── 3. SECTION HEADING FLICKER ON SCROLL ─────────────────
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "h2.font-baskerville, h3.font-baskerville"
    );

    const flicker = (el: HTMLElement) => {
      const original = el.style.opacity;
      const steps = [0.1, 1, 0.2, 1, 0.05, 1, 0.6, 1];
      let i = 0;
      const interval = setInterval(() => {
        el.style.opacity = String(steps[i]);
        i++;
        if (i >= steps.length) {
          el.style.opacity = original || "1";
          clearInterval(interval);
        }
      }, 60);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            flicker(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Particle canvas — fixed behind everything */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Cursor trail container */}
      <div ref={cursorRef} aria-hidden="true" />
    </>
  );
}
