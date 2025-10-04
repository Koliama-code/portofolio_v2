"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react"; // Moins besoin de ChevronLeft/Right
import useEmblaCarousel from "embla-carousel-react";

// --- DONNÉES DE PROJETS (Gardées pour référence) ---
const projects = [
  {
    title: "Medico Platform",
    description:
      "Application de consultation médicale avec gestion des patients, ordonnances et historique. Stack temporaire en JSON, mais structure évolutive.",
    techs: ["React", "Tailwind", "Vite", "JSON Server"],
    link: "https://github.com/ton-projet",
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
    title: "WitoXR VR Tester (1)",
    description:
      "Mon site personnel pour présenter mes compétences, projets et parcours en tant que développeur et designer.",

    techs: ["Unity", "VR", "UX Testing"],
    link: "#",
    image: "/images/wito-vr-screenshot.jpg",
  },
  {
    title: "WitoXR VR Tester (2)",
    description:
      "Deuxième projet de test et feedback sur des projets en réalité virtuelle.",
    techs: ["Unity", "VR", "UX Testing"],
    link: "#",
    image: "/images/wito-vr-screenshot.jpg",
  },
];

// --- Composant pour une seule carte de projet ---
const ProjectCard = ({ project }) => (
  <div className="rounded-xl border dark:border-white/10 border-zinc-200 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
    <div className="h-40 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
      <img
        src={project.image}
        alt={`Capture d'écran de ${project.title}`}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-zinc-900/40 via-transparent" />
    </div>

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
);

// ----------------------------------------------------------------------
// --- Composant Carrousel mis à jour (SANS Boutons Prev/Next) ---
// ----------------------------------------------------------------------
const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Les fonctions scrollPrev et scrollNext ne sont plus nécessaires
  // car les boutons associés ont été retirés.

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative">
      {/* Conteneur principal Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              // Les classes pour l'affichage 1/3 sur desktop sont conservées
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------
        SUPPRESSION DES BOUTONS DE NAVIGATION 
        Le bloc 'hidden lg:block' a été retiré.
        -------------------------------------------
      */}

      {/* --- Pagination par Points (Boules) --- */}
      <div className="flex justify-center mt-12 space-x-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-zinc-900 dark:bg-white scale-110"
                : "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-500 dark:hover:bg-zinc-500"
            }`}
            aria-label={`Aller au groupe de projets ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// --- Composant principal Projects (Inchangé) ---
// ----------------------------------------------------------------------
export default function Projects() {
  const isCarousel = projects.length > 3;

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-16">
          Mes projets récents 🚀
        </h2>

        {isCarousel ? (
          <ProjectsCarousel />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
