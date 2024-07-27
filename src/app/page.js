
import { CardHover } from "@/components/CardHover";
import Contact from "@/components/Contact";
import Education from "@/components/Education/Education";
import Contributions from "@/components/Github/Contributions";
import Pinned from "@/components/Github/Pinned";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <CardHover />
      <Projects />
      <Pinned />
      <Contributions />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
