import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Special_Elite } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick-hand",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "Deeksha - Portfolio",
  description:
    "I'm a FrontEnd developer specializing in creating exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caveat.variable} ${patrickHand.variable} ${specialElite.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
