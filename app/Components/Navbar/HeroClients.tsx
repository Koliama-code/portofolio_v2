// HeroClients.tsx
import { clientLogos } from "./ClientLogos";
import { ArrowRight } from "lucide-react";

export function HeroClients() {
  return (
    <section className="bg-background pb-16 md:pb-32 overflow-hidden">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm flex items-center gap-1">
              Powering the best teams <ArrowRight className="w-4 h-4" />
            </p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <div className="relative overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex gap-28">
                {clientLogos.concat(clientLogos).map((logo, index) => (
                  <div className="flex" key={index}>
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src={logo.src}
                      alt={logo.alt}
                      height={logo.height}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dégradés à gauche et droite */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
