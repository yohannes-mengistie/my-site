import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillCategories from "@/components/SkillCategories";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Projects />
      <About />
      <Experience />
      <SkillCategories />
      <Contact />
    </main>
  );
}
