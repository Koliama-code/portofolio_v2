import React from "react";

export const Contact = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h3 className="text-4xl text-[#1e293b] font-bold mb-4">
     On travaille ensemble ? 🧠👨

      </h3>
      <p className="text-zinc-800 dark:text-gray-400 mb-6"> 
        Je suis ouvert à des missions freelance, collaborations ou opportunités.
      </p>
      <a
        href="mailto:nathanaelkoliama@gmail.com"
        className="px-6 py-3 bg-[#1e293b] text-white rounded-lg shadow hover:bg-[#0b1727] transition"
      >
        Discutons-en !
      </a>
    </section>
  );
};
