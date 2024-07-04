
import { CardHover } from "@/components/CardHover";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <CardHover />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
