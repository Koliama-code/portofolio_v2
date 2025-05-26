import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../Components/assets/profil2.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="ezy__header6 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5 xl:col-span-4 xl:col-start-2 text-center lg:text-start">
            <Image
              src={logo}
              width={300}
              height={200}
              alt=""
              className="border-[20px] border-white dark:border-slate-800 shadow-xl rounded-full mx-auto"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-start-6 lg:pl-6 xl:pl-12 text-center lg:text-start">
            <div className="flex flex-col justify-center h-full">
              <p className="text-xl leading-normal mb-2 opacity-50">
                Web Designer
              </p>
              <h2 className="text-3xl font-bold leading-none md:text-[70px] mb-6">
                Geek_dieud
              </h2>
              <p className="text-xl leading-normal opacity-75">
                Sed ut in perspiciatis unde omnis iste natus error sit on i
                tatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae.
              </p>
              <div className="mt-6 md:mt-12">
                <a
                  href="#!"
                  className="bg-background py-3 px-8 border-2 text-white hover:bg-opacity-90 rounded mr-2 my-1 duration-300 inline-flex items-center"
                >
                  Download CV
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#!"
                  className="py-3 px-8 border-2 border-black  hover:bg-black duration-300 hover:text-white rounded my-1 inline-flex items-center"
                >
                  Contact
                  <ArrowRight className="ml-2 w-4 h-4" />
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
