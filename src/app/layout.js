import { Inter } from "next/font/google";
import "./globals.css";
import TracingBeam from "@/components/ui/tracing-beam";
import Navbar from "@/components/Navbar";
import AosInit from "@/components/AosInit";


const inter = Inter({ subsets: ["latin"] });

const desc = 'I am Tajbir islam, a skilled MERN stack developer. I specialize in creating powerful web applications with MongoDB, Express.js, React, and Node.js. Let&apos;s turn your ideas into reality!'

export const metadata = {
  title: {
    default: "Tajbir islam",
    template: "%s | Tajbir islam",
  },
  description: desc,
  keywords : desc.split(" "),
  openGraph : {
    title: {
      default: "Tajbir islam",
      template: "%s | Tajbir islam",
    },
    description: desc,
    keywords : desc.split(" "),
    type: "website",
    locale: "en_US",
    site_name: "Tajbir islam",
    images: [
      {
        url: "https://i.ibb.co/MsjpfXV/12555.jpg",
        width: 1200,
        height: 630,
        alt: "Tajbir islam",
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        <TracingBeam>
          <div>{children}</div>
          <AosInit />
        </TracingBeam>
      </body>
    </html>
  );
}
