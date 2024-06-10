import { About } from "app/components/About";
import { Contact } from "app/components/Contact";
import { Hero } from "app/components/Hero";
import { NavbarServer } from "app/components/Navbar/NavbarServer";
import { ProjectsServer } from "app/components/Projects/ProjectsServer";
import { Skills } from "app/components/Skills";

export default function Home() {
  return (
    <main>
      <NavbarServer />
      <Hero />
      <About />
      <Skills />
      <ProjectsServer />
      <Contact />
    </main>
  );
}
