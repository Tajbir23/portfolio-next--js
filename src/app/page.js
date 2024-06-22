
import { CardHover } from "@/components/CardHover";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <CardHover />
      <Projects />
    </div>
  );
}
