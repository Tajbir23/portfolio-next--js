
import { CardHover } from "@/components/CardHover";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <CardHover />
      <Projects />
      <Contact />
    </div>
  );
}
