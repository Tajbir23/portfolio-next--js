
import Image from "next/image";
import StickyScroll from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "HealthDx",
    description:
      "A platform with secure Firebase login, user registration, profile management, and test bookings with Stripe. Dynamic homepage content and health tips. Admins manage users, tests, reservations, banners, and view statistics, with pagination and JWT authentication.",
    link: 'https://assignment12.tajbirideas.com',
    client: 'https://github.com/Tajbir23/assignment-12-client',
    server: 'https://github.com/Tajbir23/assignment-12-server',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/projects/healthdx.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="HealthDx"
        />
      </div>
    ),
  },
  {
    title: "BookNook",
    description:
      "Our platform simplifies book management with easy additions, seamless borrowing, librarian oversight, hassle-free returns, and automated stock updates.",
    link: 'https://assignment11.tajbirideas.com',
    client: 'https://github.com/Tajbir23/assignment-11-client',
    server: 'https://github.com/Tajbir23/assignment-11-server',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/projects/booknook.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="BookNook"
        />
      </div>
    ),
  },
  {
    title: "Artisan Haven",
    description:
      "Discover inspiring artworks, join interactive workshops, connect with fellow artists, access a rich resource library, and shop quality art supplies at Artisan Haven. Unleash your inner artist with us today!",
    link: 'https://assignment10.tajbirideas.com',
    client: 'https://github.com/Tajbir23/assignment-10-client',
    server: 'https://github.com/Tajbir23/assignment-10-server',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/projects/artisan.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Artisan haven"
        />
      </div>
    ),
  },
  
];
export function Projects() {
  return (
    <div id="projects" className="p-10 md:snap-center flex flex-col items-center justify-center h-screen">
    <h1 className="font-bold text-4xl mb-10">My projects</h1>
      <StickyScroll content={content} />
    </div>
  );
}
