import { About } from "app/components/About";
import { Contact } from "app/components/Contact";
import { Hero } from "app/components/Hero";
import { Navbar } from "app/components/Navbar";
import { Projects } from "app/components/Projects";
import { Skills } from "app/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
