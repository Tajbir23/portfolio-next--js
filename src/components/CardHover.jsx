

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div className="w-full h-screen snap-center mx-auto px-8 flex items-center justify-center">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    description:
      "A technology company that builds economic infrastructure for the internet.",
  },
  {
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
  {
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      image: '/images/1.jpg'
  },
];
