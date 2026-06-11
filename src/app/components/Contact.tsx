"use client";

import { useState } from "react";

const EMAIL = "peteramajor@hotmail.com";

const CONTACT_LINKS = [
  { label: "GITHUB", href: "https://github.com/peteramajor" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/petera-major" },
  { label: "EMAIL", href: `mailto:${EMAIL}` },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-5 sm:px-8 py-16 border-t border-[#1a0505]" style={{ background: "#050101" }}>
      <p className="font-vt323 text-xs tracking-[5px] text-[#CC0000] mb-2">// THE LIGHTS ARE ON</p>
      <h2 className="font-baskerville font-bold text-3xl sm:text-4xl text-[#e8e0d0] mb-4">Let&apos;s talk.</h2>
      <p className="text-sm text-[#555] mb-10 max-w-md leading-relaxed" style={{ fontFamily: "'Special Elite', serif" }}>
        Open to full stack roles, contract work, and collabs on cool projects. Especially if you&apos;re building something fast and shipping it.
      </p>

      <button
        onClick={copyEmail}
        className="font-vt323 text-lg sm:text-xl tracking-[2px] sm:tracking-[3px] text-[#e8e0d0] border border-[#333] px-6 sm:px-8 py-3 hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-200 mb-10 block w-full sm:w-auto text-left sm:text-center"
      >
        {copied ? "✓ COPIED!" : EMAIL}
      </button>

      <div className="flex flex-wrap gap-6 sm:gap-8">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-vt323 text-sm tracking-[2px] text-[#444] hover:text-[#CC0000] transition-colors duration-200"
          >
            {link.label} →
          </a>
        ))}
      </div>

      <div className="mt-16 pt-6 border-t border-[#1a0505] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p className="font-vt323 text-xs tracking-[3px] text-[#333]">TERA MAJOR © 2026</p>
        <p className="font-vt323 text-xs tracking-[2px] text-[#1a0808]">BUILT IN THE RIGHT-SIDE UP</p>
      </div>
    </section>
  );
}
