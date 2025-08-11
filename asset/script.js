// Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#4fd1c5" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#9f7aea",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 1, direction: "none", out_mode: "out" },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
  },
});

// Typed.js for hero section
var typed = new Typed("#typed-text", {
  strings: ["web.", "future.", "extraordinary."],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

// GSAP ScrollTrigger for section animations
gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleClass: "is-visible",
      once: true,
    },
  });
});

// GSAP for skill card animations
const skillCards = document.querySelectorAll(".skill-card");
gsap.from(skillCards, {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 70%",
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
});
