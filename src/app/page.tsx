import { About } from "app/components/About";
import { Hero } from "app/components/Hero";
import { Projects } from "app/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
