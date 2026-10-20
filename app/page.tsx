import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
