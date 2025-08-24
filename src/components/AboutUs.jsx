import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], 
  });

  const text = `Archipelago is a distinguished Australian city-making practice. 
  We challenge the boundaries of conventional design to create great cities and buildings for people, now and in the future.`;

  const words = text.split(" ");

  return (
    <section
      ref={ref}
      className="snap-start h-screen flex justify-center items-center bg-[#f2e7da]"
    >
      <div className="max-w-3xl text-center px-6">
        <p className="text-2xl md:text-3xl font-medium leading-relaxed flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;

            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            const color = useTransform(scrollYProgress, [start, end], ["#b197a2", "#111"]);

            return (
              <motion.span
                key={i}
                style={{ opacity, color, marginRight: "6px" }}
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
