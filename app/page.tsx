"use client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { StackedCircularFooter } from "./Components/Footer/StackedCircularFooter";
import Techno from "./Components/Techno";
import { Contact } from "./Components/Contact";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main>
      {/* Header */}

      <Header />
      <Hero />
      <Techno />
      <Projects />
      <Contact />
      <StackedCircularFooter />
    </main>
  );
}
