"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "EXP", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #1a0a0a" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="flex justify-between items-center px-5 sm:px-8 py-4">
        {/* Logo */}
        <a href="#" className="font-vt323 text-2xl tracking-[4px] text-[#CC0000] hover:text-[#ff2222] transition-colors">
          TM
          <span className="inline-block w-2 h-4 bg-[#CC0000] ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-vt323 text-lg tracking-[3px] text-[#666] hover:text-[#CC0000] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px transition-all duration-200" style={{ background: menuOpen ? "#CC0000" : "#666", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
          <span className="block w-6 h-px transition-all duration-200" style={{ background: menuOpen ? "transparent" : "#666", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-200" style={{ background: menuOpen ? "#CC0000" : "#666", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-[#1a0a0a] px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-vt323 text-xl tracking-[3px] text-[#666] hover:text-[#CC0000] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
