
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
    title: "Chat app",
    description:
      "Chat app uses Redux Toolkit, TypeScript, React.js, and Tailwind CSS. It features a responsive UI with toggling sidebars, message input, and file uploads. Messages are aligned right for the user and left for others. Socket.io events are modularized.",
    link: 'https://realtime-chat-app-tajbir.web.app',
    client: 'https://github.com/Tajbir23/realtime-chat-app.git',
    server: 'https://github.com/Tajbir23/realtime-chat-app-server.git',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/projects/Chat.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Chat"
        />
      </div>
    ),
  },
  {
    title: "INSTAPAY",
    description:
      "Discover inspiring artworks, join interactive workshops, connect with fellow artists, access a rich resource library, and shop quality art supplies at Artisan Haven. Unleash your inner artist with us today!",
    link: 'https://mfs-app-4e475.web.app/login',
    client: 'https://github.com/Tajbir23/mfs-client.git',
    server: 'https://github.com/Tajbir23/mfs-server.git',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/projects/instapay.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="instapay"
        />
      </div>
    ),
  },
  
];
export function Projects() {
  return (
    <div id="projects" className="p-10 flex flex-col w-full items-center justify-center">
    <h1 className="font-bold text-4xl mb-10 text-white">My projects</h1>
      <StickyScroll content={content} />
    </div>
  );
}
