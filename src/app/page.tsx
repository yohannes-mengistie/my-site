import Image from "next/image";
import About from "@/components/About";
import AnimatedBackground from "@/components/AnimatedBackground";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import SkillCategories from "@/components/SkillCategories";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-20 min-h-screen">
        <Hero />
        <About />
        <Projects />
        <SkillCategories/>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
