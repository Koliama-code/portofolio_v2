"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

// --- MISE À JOUR : Ajout du champ 'image' pour la capture d'écran du projet ---
const projects = [
  {
    title: "Medico Platform",
    description:
      "Application de consultation médicale avec gestion des patients, ordonnances et historique. Stack temporaire en JSON, mais structure évolutive.",
    techs: ["React", "Tailwind", "Vite", "JSON Server"],
    link: "https://github.com/ton-projet",
    // REMPLACEZ CECI par le chemin réel vers une capture d'écran de votre projet
    image: "/images/medico-platform-screenshot.jpg",
  },
  {
    title: "Portfolio Geek_dieud",
    description:
      "Mon site personnel pour présenter mes compétences, projets et parcours en tant que développeur et designer.",
    techs: ["Next.js", "Tailwind", "React-icons"],
    link: "https://tonportfolio.com",
    image: "/images/portfolio-geekdieud-screenshot.jpg",
  },
  {
    title: "WitoXR VR Tester",
    description:
      "Test et feedback sur des projets en réalité virtuelle durant un stage chez WitoXR.",
    techs: ["Unity", "VR", "UX Testing"],
    link: "#",
    image: "/images/wito-vr-screenshot.jpg",
  },
];

export default function Projects() {
  // Le tableau 'highlightedTechs' est utilisé pour simuler des éléments dans un carrousel
  const highlightedTechs = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Figma",
    "Node.js",
    "MongoDB",
    "Git",
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-16">
          Mes projets récents 🚀
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl border dark:border-white/10 border-zinc-200 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* --- IMAGE/BACKGROUND DU PROJET --- */}
              {/* REMARQUE: Cette image sert de "background" visuel pour le projet */}
              <div className="h-40 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Capture d'écran de ${project.title}`}
                  // 'object-cover' pour s'assurer que l'image couvre le conteneur
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                {/* Overlay pour un effet stylistique */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-zinc-900/40 via-transparent" />
              </div>

              {/* --- CONTENU DE LA CARTE --- */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-zinc-800 text-white dark:bg-zinc-700 dark:text-zinc-200 px-2 py-0.5 rounded-full"
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
                    className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:underline hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Voir le projet <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION CARROUSEL DES COMPÉTENCES (Ajouté) --- */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-zinc-900 dark:text-white mb-8">
            Compétences mises en avant 💡
          </h3>
          {/* ATTENTION: Ceci est la structure Tailwind CSS. 
            Pour le faire défiler, vous DEVEZ intégrer une librairie de carrousel (ex: Swiper, Keen-slider)
          */}
          <div className="flex overflow-x-auto py-4 space-x-4 custom-scrollbar">
            {highlightedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-[200px] h-24 flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700/50"
              >
                <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  {tech}
                </p>
              </div>
            ))}
            {/* Dupliquez les éléments pour un effet de carrousel infini */}
            {highlightedTechs.map((tech, index) => (
              <div
                key={index + highlightedTechs.length}
                className="flex-shrink-0 min-w-[200px] h-24 flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700/50"
                aria-hidden="true"
              >
                <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  {tech}
                </p>
              </div>
            ))}
          </div>

          <style jsx global>{`
            /* Style simple pour cacher la barre de défilement tout en gardant le défilement horizontal */
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .custom-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
