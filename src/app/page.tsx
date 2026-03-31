import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrapbookDecorations from "@/components/ScrapbookDecorations";
import PlaneCursor from "@/components/PlaneCursor";

export default function Home() {
  return (
    <>
      <PlaneCursor />
      <ScrapbookDecorations />
      <Header />
      <main className="container mx-auto px-6 relative z-10 max-w-6xl">
        <Hero />
        <div className="scrapbook-divider" />
        <About />
        <div className="scrapbook-divider" />
        <Skills />
        <div className="scrapbook-divider" />
        <WorkExperience />
        <div className="scrapbook-divider" />
        <Education />
        <div className="scrapbook-divider" />
        <Projects />
        <div className="scrapbook-divider" />
        <Achievements />
        <div className="scrapbook-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
