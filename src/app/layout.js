import { Inter } from "next/font/google";
import "./globals.css";
import TracingBeam from "@/components/ui/tracing-beam";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const desc = 'I am Tajbir islam, a skilled MERN stack developer. I specialize in creating powerful web applications with MongoDB, Express.js, React, and Node.js. Let&apos;s turn your ideas into reality!'

export const metadata = {
  title: {
    default: "Tajbir islam",
    template: "%s | Tajbir islam",
  },
  description: desc,
  keywords : desc.split(" ")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <TracingBeam>
          <div>{children}</div>
        </TracingBeam>
      </body>
    </html>
  );
}
