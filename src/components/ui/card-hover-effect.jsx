"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 m-auto lg:grid-cols-6 py-10 ${className}`}>
      {items.map((item, idx) => (
        <div key={item?.image} className="relative group block p-2 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
              <Image width={500} height={500} src={item?.image} className="m-auto w-auto h-16" alt="image not found" />
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div data-aos="fade-right" className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};


export { HoverEffect, Card};
