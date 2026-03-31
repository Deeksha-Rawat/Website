"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Deeksha-Rawat",
    icon: Github,
    label: "Check my code! 🖥️",
    popupClass: "social-popup-github",
    handle: "@Deeksha-Rawat",
    hoverRotate: "-rotate-6",
  },
  {
    href: "https://www.linkedin.com/in/deeksha-rawat-555719186/",
    icon: Linkedin,
    label: "Let's connect! 🤝",
    popupClass: "social-popup-linkedin",
    handle: "Deeksha Rawat",
    hoverRotate: "rotate-6",
  },
  {
    href: "mailto:deeksha9557@gmail.com",
    icon: Mail,
    label: "Send me a letter! ✉️",
    popupClass: "social-popup-email",
    handle: "deeksha9557@gmail.com",
    hoverRotate: "-rotate-3",
  },
];

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t-2 border-dashed border-kraft relative">
      <div className="flex justify-center items-end space-x-10 mb-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.href} className="social-link-wrapper">
              {/* Popup card */}
              <div className={`social-popup ${link.popupClass}`}>
                <p className="font-caveat text-lg font-bold">{link.label}</p>
                <p className="font-typewriter text-xs mt-1 opacity-70">
                  {link.handle}
                </p>
              </div>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-ink-faded hover:text-coral transition-all duration-300 transform hover:scale-125 hover:${link.hoverRotate} inline-block`}
              >
                <Icon className="w-7 h-7" />
              </a>
            </div>
          );
        })}
      </div>
      <p className="font-hand text-ink-faded text-lg">
        Designed & Built by Deeksha ✏️
      </p>
    </footer>
  );
}
