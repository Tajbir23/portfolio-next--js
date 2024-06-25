
import LinkPreview from "./ui/link-preview";
import TextGenerateEffect from "./ui/text-generate-effect";
import Vortex from "./ui/vortex";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    const words = `A skilled MERN stack developer. I specialize in creating powerful web applications with MongoDB, Express.js, React, and Node.js. Let's turn your ideas into reality!`

  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden bg-black">
      <Vortex
        backgroundColor="black"
        className="flex  flex-col justify-center md:px-10  w-full h-full px-5"
      >
        <h2 data-aos="fade-left" className="text-white text-2xl md:text-6xl font-bold ">
          Hi! i am <LinkPreview url="https://i.ibb.co/MsjpfXV/12555.jpg" className='text-blue-700'>Tajbir islam</LinkPreview>
        </h2>
        
        <TextGenerateEffect words={words} />
        <div className="mt-6">
          <ul className="text-green-600 text-4xl flex items-center gap-5">
            <li><a href="https://linkedin.com/in/tajbir-islam"><FaLinkedin /></a></li>
            <li><a href="https://github.com/Tajbir23"><FaGithub /></a></li>
          </ul>
        </div>
        <div data-aos="fade-right" className="flex flex-col sm:flex-row  gap-4 mt-6">
          <a href="https://drive.google.com/file/d/1acMNxI1GphUz_kF8vwYh1d7RD7w_sgPl/view?usp=sharing" className="px-4 w-max py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          
            Download resume
          </a>
        </div>
      </Vortex>
    </div>
  );
}
