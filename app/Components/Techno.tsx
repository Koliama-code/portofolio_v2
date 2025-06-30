"use client";
import React from "react";
import {
  Github,
  Zap,
  Flame,
  Layers,
  Package,
  Circle,
  Activity,
  Terminal,
} from "lucide-react";

export default function Techno() {
  const icons = [
    Github,
    Zap,
    Flame,
    Layers,
    Package,
    Circle,
    Activity,
    Terminal,
  ];

  return (
    <section className="bg-gray-100 dark:bg-black py-16">
      <div className="relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6 border-black/10 dark:border-white/10">
            <h1 className="text-end text-1xl font-bold text-black/70 dark:text-white/70">
              Technologies utilisées
            </h1>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)] overflow-hidden">
            {/* Slider */}
            <div className="animate-slide flex gap-20 w-max">
              {[...icons, ...icons].map((Icon, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-[#1a1b26] rounded-xl flex items-center justify-center shadow hover:scale-105 transition-transform"
                >
                  <Icon className="h-8 w-8 text-white/90" />
                </div>
              ))}
            </div>

            {/* Fondu gauche/droite */}
            <div className="absolute inset-y-0 left-0 w-20 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black" />
            <div className="absolute inset-y-0 right-0 w-20 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-black" />
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
