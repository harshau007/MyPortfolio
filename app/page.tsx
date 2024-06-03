import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experiencenew";
import Github from "@/components/github";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <link rel="icon" href="/icon..png" />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Github />
      <Experience />
      <Contact />
    </main>
  );
}
