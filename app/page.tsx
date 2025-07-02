"use client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { StackedCircularFooter } from "./Components/Footer/StackedCircularFooter";
import Techno from "./Components/Techno";
import { Contact } from "./Components/Contact";

export default function Home() {
  return (
    <main>
      {/* Header */}

      <Header />
      <Hero />
      <Techno />
      <Contact />
      <StackedCircularFooter />
    </main>
  );
}
