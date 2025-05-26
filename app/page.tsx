import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { StackedCircularFooter } from "./Components/Footer/StackedCircularFooter";
import Techno from "./Components/Techno";

export default function Home() {
  return (
    <main>
      {/* Header */}

      <Header />
      <Hero />
      <Techno />
      <StackedCircularFooter />
    </main>
  );
}
