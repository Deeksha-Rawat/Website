"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#workexperience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Awards" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="scrapbook-nav sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-caveat text-3xl font-bold text-ink tracking-wider"
        >
          Deeksha<span className="text-coral">.</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-hand text-lg text-ink-light hover:text-coral transition duration-300 relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-coral"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block font-hand text-lg bg-[var(--sticky-yellow)] text-ink px-5 py-2 shadow-md hover:shadow-lg transition duration-300 transform hover:-rotate-1 hover:scale-105"
        >
          Say Hi ✉️
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-ink-light hover:bg-paper-dark"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 border-t-2 border-dashed border-kraft">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="block py-3 font-hand text-lg text-ink-light hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block mt-3 font-hand text-lg bg-[var(--sticky-yellow)] text-ink text-center px-4 py-2 shadow-md"
          >
            Say Hi ✉️
          </a>
        </div>
      )}
    </header>
  );
}
