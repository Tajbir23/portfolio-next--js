

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div id="skills" className="flex flex-col items-center justify-center bg-black overflow-hidden md:h-screen px-5">
    <h1 className="font-bold text-4xl">My skills</h1>
    <div className="w-full mx-auto flex items-center justify-center">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    image : '/images/skill/html.png'
  },
  {
    image : '/images/skill/css.png'
  },
  {
    image : '/images/skill/tailwind.png'
  },
  {
    image : '/images/skill/js.webp'
  },
  {
    image : '/images/skill/react.png'
  },
  {
    image : '/images/skill/next.webp'
  },
  {
    image : '/images/skill/node.png'
  },
  {
    image : '/images/skill/express.png'
  },
  {
    image : '/images/skill/firebase.png'
  },
  {
    image : '/images/skill/mongodb.png'
  },
  {
    image : '/images/skill/github.png'
  },
  {
    image : '/images/skill/jwt.png'
  },
];
