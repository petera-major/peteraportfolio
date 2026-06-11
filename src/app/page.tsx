"use client";

import ChristmasLights from "./components/ChristmasLights";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { PROJECTS, ProjectCard } from "./components/Projects";
import FlexynMockup from "./components/FlexynMockup";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#080808" }}>
      <Navbar />
      <ChristmasLights />
      <Hero />
      <ScrollEffects />

      {/* Wavy divider */}
      <div className="w-full overflow-hidden" style={{ height: "40px", background: "#080808" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" fill="#0a0505" />
        </svg>
      </div>

      {/* Projects */}
      <section id="work" className="px-5 sm:px-8 py-16" style={{ background: "#0a0505" }}>
        <p className="font-vt323 text-xs tracking-[5px] text-[#CC0000] mb-2">// THE DEMO TAPE</p>
        <h2 className="font-baskerville font-bold text-3xl text-[#e8e0d0] mb-10">Things I&apos;ve built</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>

        {/* Flexyn interactive demo */}
        <div className="mt-14">
          <p className="font-vt323 text-xs tracking-[5px] text-[#CC0000] mb-2">// LIVE PREVIEW</p>
          <h3 className="font-baskerville font-bold text-xl text-[#e8e0d0] mb-1">Flexyn — tap to explore</h3>
          <p className="text-xs text-[#555] mb-6" style={{ fontFamily: "'Special Elite', serif" }}>
            Tap the exercise cards to expand sets. Switch tabs to see Progress and AI Coach.
          </p>
          <FlexynMockup />
        </div>
      </section>

      {/* Experience */}
      <Experience />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact />
    </main>
  );
}
