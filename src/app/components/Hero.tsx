"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="about"
      className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 px-5 sm:px-8 py-12 md:py-16 min-h-[65vh]"
    >
      {/* Text side */}
      <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <p className="font-vt323 text-sm tracking-[5px] text-[#CC0000] mb-2">// HELLO, HAWKINS</p>

        <h1
          className="font-baskerville font-bold leading-[1.05] mb-3 select-none"
          style={{
            fontSize: "clamp(38px, 8vw, 72px)",
            color: "#e8e0d0",
            textShadow: "0 0 30px rgba(204,0,0,0.25), 0 0 60px rgba(136,0,0,0.1)",
          }}
        >
          Petera<br />
          <span style={{ color: "#2a1515" }}>Major</span>
        </h1>

        <p className="font-vt323 text-lg sm:text-xl tracking-[4px] text-[#666] mb-5">FULL STACK DEVELOPER</p>

        <p className="text-sm leading-relaxed text-[#555] mb-8 max-w-md" style={{ fontFamily: "'Special Elite', serif" }}>
        Hey, I&apos;m Petera — welcome to my Upside Down. College grad who taught herself to build real things, won a hackathon, digitized 25+ businesses, and somehow still has time to go to the gym. I build fast, I ship faster, and I&apos;m just getting started. 
        </p>
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <a href="#work" className="font-vt323 text-base sm:text-lg tracking-[2px] px-5 py-2 bg-[#CC0000] text-[#e8e0d0] hover:bg-[#ff0000] transition-colors duration-200 uppercase">
            VIEW WORK
          </a>
          <a href="#contact" className="font-vt323 text-base sm:text-lg tracking-[2px] px-5 py-2 border border-[#333] text-[#666] hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-200 uppercase">
            CONTACT
          </a>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/peteramajor" target="_blank" rel="noopener noreferrer" className="font-vt323 text-sm tracking-[2px] text-[#444] hover:text-[#CC0000] transition-colors">GITHUB →</a>
          <a href="https://linkedin.com/in/petera-major" target="_blank" rel="noopener noreferrer" className="font-vt323 text-sm tracking-[2px] text-[#444] hover:text-[#CC0000] transition-colors">LINKEDIN →</a>
        </div>
      </div>

      {/* Photo side */}
      <div className={`flex justify-center items-end transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div
          className="relative scanlines"
          style={{ width: "min(260px, 80vw)", height: "min(320px, 96vw)", border: "1px solid #1a0a0a", background: "#0a0303" }}
        >
          {["tl","tr","bl","br"].map((pos) => (
            <div
              key={pos}
              className="absolute w-4 h-4 opacity-60"
              style={{
                top: pos.startsWith("t") ? "-1px" : "auto",
                bottom: pos.startsWith("b") ? "-1px" : "auto",
                left: pos.endsWith("l") ? "-1px" : "auto",
                right: pos.endsWith("r") ? "-1px" : "auto",
                borderTop: pos.startsWith("t") ? "2px solid #CC0000" : "none",
                borderBottom: pos.startsWith("b") ? "2px solid #CC0000" : "none",
                borderLeft: pos.endsWith("l") ? "2px solid #CC0000" : "none",
                borderRight: pos.endsWith("r") ? "2px solid #CC0000" : "none",
              }}
            />
          ))}
          <div className="absolute left-0 right-0 h-0.5 bg-[#CC0000] opacity-20 z-10 pointer-events-none" style={{ animation: "scan 4s linear infinite" }} />           
          <div className="flex flex-col items-center justify-center h-full gap-3">
          <div className="absolute left-0 right-0 h-0.5 bg-[#CC0000] opacity-20 z-10 pointer-events-none" style={{ animation: "scan 4s linear infinite" }} />
          <Image src="/tera.png" alt="Tera Major" fill className="object-cover object-top" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
