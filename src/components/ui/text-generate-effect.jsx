"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.3),
      }
    );
  }, [scope, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white  opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-4">
        <div className="dark:text-white  leading-snug tracking-wide text-white text-sm md:text-xl max-w-xl mt-6">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
