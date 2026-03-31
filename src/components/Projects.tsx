"use client";

import { FolderGit2, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  rotate: number;
  noteColor: string;
}

const projects: Project[] = [
  {
    title: "GameBetter.in",
    description:
      "Resources, tools, and support to help you create a balanced gaming experience.",
    tags: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
    liveUrl: "https://gamebetter.in/",
    rotate: -2,
    noteColor: "var(--sticky-yellow)",
  },
  {
    title: "Swiggy Clone",
    description:
      "A feature-rich clone of the Swiggy food delivery platform, built using modern web technologies.",
    tags: ["React", "RapidAPI", "MaterialUI"],
    githubUrl: "https://github.com/Deeksha-Rawat/Clone",
    liveUrl: "https://orderit-now.netlify.app/",
    rotate: 3,
    noteColor: "var(--sticky-pink)",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio, showcasing my skills and projects with a clean, professional design.",
    tags: ["Reactjs", "Nextjs", "CSS3", "JavaScript", "Tailwind Css"],
    githubUrl: "https://github.com/Deeksha-Rawat/Website",
    liveUrl: "https://myportfolio-9.netlify.app/",
    rotate: -1,
    noteColor: "var(--sticky-blue)",
  },
  {
    title: "ToDo App React",
    description:
      "A simple yet functional ToDo App built with React, featuring task management, completion tracking, and local storage for saving tasks.",
    tags: ["HTML5", "CSS3", "ReactJs"],
    githubUrl: "https://github.com/Deeksha-Rawat/ToDoApp-React",
    liveUrl: "https://letslistyourwork.netlify.app/",
    rotate: 2,
    noteColor: "var(--sticky-green)",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="paper-card rounded-lg overflow-visible group relative"
      style={{ background: project.noteColor }}
      initial={{ opacity: 0, y: 40, rotate: project.rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: project.rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
    >
      {/* Tape on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[var(--tape-mint)] opacity-60 rounded-sm z-10" />

      <div className="p-7">
        <div className="flex justify-between items-center mb-5">
          <FolderGit2 className="w-9 h-9 text-coral" />
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faded hover:text-coral transition"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faded hover:text-coral transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <h3 className="font-caveat text-2xl font-bold text-ink mb-2">
          {project.title}
        </h3>
        <p className="font-hand text-ink-light mb-5 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-typewriter text-xs bg-white/60 text-ink-light px-2 py-1 rounded border border-ink/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Sticky note corner fold */}
      <div
        className="absolute bottom-0 right-0 w-0 h-0"
        style={{
          borderStyle: "solid",
          borderWidth: "0 0 20px 20px",
          borderColor: "transparent transparent var(--paper) transparent",
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scrapbook-section">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat text-5xl font-bold text-ink hand-underline">
          Things I&apos;ve Built 🔨
        </h2>
        <p className="font-hand text-ink-light mt-3 text-lg">
          A selection of my recent projects.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
