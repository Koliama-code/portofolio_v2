"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Medico Platform",
    description:
      "Application de consultation médicale avec gestion des patients, ordonnances et historique. Stack temporaire en JSON, mais structure évolutive.",
    techs: ["React", "Tailwind", "Vite", "JSON Server"],
    link: "https://github.com/ton-projet",
  },
  {
    title: "Portfolio Geek_dieud",
    description:
      "Mon site personnel pour présenter mes compétences, projets et parcours en tant que développeur et designer.",
    techs: ["Next.js", "Tailwind", "React-icons"],
    link: "https://tonportfolio.com",
  },
  {
    title: "WitoXR VR Tester",
    description:
      "Test et feedback sur des projets en réalité virtuelle durant un stage chez WitoXR.",
    techs: ["Unity", "VR", "UX Testing"],
    link: "#", // Peut être vide si pas de lien
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mes projets récents 🚀
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl border dark:border-white/10 border-zinc-200 bg-zinc-50 dark:bg-zinc-900 p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Voir le projet <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
