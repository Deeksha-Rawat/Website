import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["var(--font-caveat)", "cursive"],
        hand: ["var(--font-patrick-hand)", "cursive"],
        typewriter: ["var(--font-special-elite)", "Courier New", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "#f5f0e8",
          dark: "#e8dfd0",
        },
        kraft: "#c9a96e",
        ink: {
          DEFAULT: "#3d2b1f",
          light: "#6b5744",
          faded: "#9b8b78",
        },
        coral: "#e8856c",
        teal: "#5ba4a4",
        mustard: "#d4a843",
      },
    },
  },
  plugins: [],
};

export default config;
