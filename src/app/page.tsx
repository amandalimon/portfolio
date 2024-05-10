import { About } from "app/components/About";
import { Contact } from "app/components/Contact";
import { Hero } from "app/components/Hero";
import { Projects } from "app/components/Projects";
import { Skills } from "app/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
