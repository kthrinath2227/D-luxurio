import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LogoReveal = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // smoother sync
  });

  // Animate shutter moving up on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const maskSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="190" font-family="Arial" font-weight="bold">D</text>
  </svg>
`);


  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] w-full bg-white overflow-hidden"
    >
      {/* Full background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dzwxkhkvi/video/upload/v1756019080/SSYouTube.online_LUXURY_INTERIOR_DESIGN_for_spending_the_best_life_1080p_wkrr0k.mp4"
          type="video/mp4"
        />
      </video>

      {/* Shutter (moves away to reveal video) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gray-100 z-10"
      />

      {/* Masked logo in center */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <video
          className="w-48 h-48 object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{
            WebkitMaskImage: `url('data:image/svg+xml;utf8,${maskSvg}')`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url('data:image/svg+xml;utf8,${maskSvg}')`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        >
          <source
            src="https://res.cloudinary.com/dzwxkhkvi/video/upload/v1756019080/SSYouTube.online_LUXURY_INTERIOR_DESIGN_for_spending_the_best_life_1080p_wkrr0k.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default LogoReveal;
