import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../Components/assets/profil2.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 md:py-28 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Image */}
          <div className="col-span-12 lg:col-span-5  xl:col-span-4 xl:col-start-2 text-center lg:text-start">
            <div className="w-78 h-78 lg:mx-18 overflow-hidden rounded-full border-[8px] border-white shadow-2xl sm:mt-12 mx-auto">
              {" "}
              <Image
                src={logo}
                alt="Photo de Geek_dieud"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />{" "}
            </div>
          </div>

          {/* Texte */}
          <div className="col-span-12 lg:col-span-7 xl:col-start-6 lg:pl-6 xl:pl-12 text-center lg:text-start">
            <div className="flex flex-col justify-center h-full">
              <p className="text-[#1e293b] font-medium uppercase tracking-wider mb-2">
                Développeur Web & UI/UX Designer
              </p>
              <h1 className="text-gray-600 text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Hello, moi c’est <br />
                <span className="text-[#1e293b] ">Geek_dieud 👋</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
                Je conçois des interfaces modernes, intuitives et performantes
                avec passion. Curieux, créatif et toujours à la recherche de
                solutions élégantes. 🔥📚✨
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="#!"
                  className="bg-[#1e293b] text-white py-3 px-8 rounded-lg hover:bg-[#0b1727] transition-all flex items-center gap-2"
                >
                  📂 Télécharger mon CV <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nathanaelkoliama@gmail.com"
                  className="border-2 border-[#0b1727]  py-3 px-8 rounded-lg hover:bg-[#1e293b] hover:text-white transition-all flex items-center gap-2"
                >
                  ✉️ Me contacter <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
