"use client";

import { useEffect, useState } from "react";

type BulbColor = {
  bg: string;
  shadow: string;
};

const BULB_COLORS: BulbColor[] = [
  { bg: "#CC0000", shadow: "#880000" },
  { bg: "#1144CC", shadow: "#0A2A88" },
  { bg: "#118833", shadow: "#0A5522" },
  { bg: "#AA8800", shadow: "#775500" },
  { bg: "#CCCCBB", shadow: "#888877" },
  { bg: "#CC4400", shadow: "#882200" },
  { bg: "#661199", shadow: "#440077" },
];

const NUM_BULBS = 28;

export default function ChristmasLights() {
  const [flickering, setFlickering] = useState<Set<number>>(new Set());

  useEffect(() => {
    const flicker = () => {
      const count = Math.floor(Math.random() * 3) + 1;
      const indices = new Set<number>();
      while (indices.size < count) {
        indices.add(Math.floor(Math.random() * NUM_BULBS));
      }
      setFlickering(indices);
      setTimeout(() => {
        setFlickering(new Set());
      }, 100 + Math.random() * 150);
    };

    const interval = setInterval(flicker, 800 + Math.random() * 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-1 bg-[#050505] overflow-hidden">
      {/* Wire */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#222] -translate-y-1/2" />

      {/* Bulbs */}
      <div className="relative z-10 flex justify-around items-start px-2">
        {Array.from({ length: NUM_BULBS }).map((_, i) => {
          const color = BULB_COLORS[i % BULB_COLORS.length];
          const isFlickering = flickering.has(i);
          return (
            <div key={i} className="flex flex-col items-center">
              {/* Wire drop */}
              <div className="w-px bg-[#333]" style={{ height: `${8 + (i % 3) * 4}px` }} />
              {/* Bulb cap */}
              <div
                className="w-2 h-1 rounded-sm mb-0"
                style={{ background: "#1a1a1a" }}
              />
              {/* Bulb */}
              <div
                style={{
                  width: "12px",
                  height: "16px",
                  borderRadius: "50% 50% 40% 40%",
                  background: color.bg,
                  boxShadow: isFlickering
                    ? "none"
                    : `0 0 6px ${color.bg}, 0 0 14px ${color.shadow}`,
                  opacity: isFlickering ? 0.15 : 1,
                  transition: "opacity 0.05s, box-shadow 0.05s",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
