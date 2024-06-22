import TypeWriter from "./TypeWriter";
import LinkPreview from "./ui/link-preview";
import Vortex from "./ui/vortex";


export default function Hero() {
  return (
    <div className="w-full mx-auto rounded-md  overflow-hidden snap-center">
      <Vortex
        backgroundColor="black"
        className="flex  flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold">
          Hi! i am <LinkPreview url="https://i.ibb.co/MsjpfXV/12555.jpg" className='text-blue-700'>Tajbir islam</LinkPreview>
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 ">
        A skilled MERN stack developer. I specialize in creating powerful web applications with MongoDB, Express.js, React, and Node.js. Let&apos;s turn your ideas into reality!
        </p>
        <div className="flex flex-col sm:flex-row  gap-4 mt-6">
          <a href="https://facebook.com" className="px-4 w-max py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Download resume
          </a>
        </div>
      </Vortex>
    </div>
  );
}
