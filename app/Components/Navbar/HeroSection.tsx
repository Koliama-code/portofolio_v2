import Header from "../Header";
import { HeroContent } from "./HeroContent";
import { HeroClients } from "./HeroClients";

export function HeroSection() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroContent />
        <HeroClients />
      </main>
    </>
  );
}
