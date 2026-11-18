
import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
