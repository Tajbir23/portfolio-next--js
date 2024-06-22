"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className}`}>
      {items.map((item, idx) => (
        <div key={item.idx} className="relative group block p-2 h-56 w-56"
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
            {/* <imageCard> */}
              <Image width={100} height={100} src={item?.image} className="m-auto" alt="image not found" />
            {/* </imageCard> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// const imageCard = ({ className, children }) => {
//   return (
//     <div className={`rounded-2xl h-5 p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}>
//       {children}
//     </div>
//   );
// }

// const CardTitle = ({ className, children }) => {
//   return (
//     <h4 className={`text-zinc-100 font-bold tracking-wide mt-4 ${className}`}>
//       {children}
//     </h4>
//   );
// };

// const CardDescription = ({ className, children }) => {
//   return (
//     <p className={`mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}>
//       {children}
//     </p>
//   );
// };

// export { HoverEffect, Card, CardTitle, CardDescription };
export { HoverEffect, Card};
