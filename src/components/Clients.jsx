import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [
    { name: "Prestige Group", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784685/logo_o1buck.png", alt: "Prestige Group logo" },
    { name: "Sobha Ltd", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784685/logo_o1buck.png", alt: "Sobha Ltd logo" },
    { name: "DLF", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784685/logo_o1buck.png", alt: "DLF logo" },
    { name: "My Home Group", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785171/logo_1_xdyuwg.jpg", alt: "My Home Group logo" },
    { name: "Aparna Constructions", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785280/cropped-ysrealty-e1546241768536-2_lwu4t7.png", alt: "Aparna Constructions logo" },
    { name: "Taj Hotels", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785057/aparna-logo_spgy20.jpg", alt: "Taj Hotels logo" },
    { name: "Marriott International", Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785065/logo_o2yeoc.jpg", alt: "Marriott International logo" },
  ];

  const duplicatedLogos = [...logos, ...logos];
  const containerRef = useRef(null);
  const [centerX, setCenterX] = useState(0);

  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCenterX(rect.width / 2);
      }
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  return (
    <section id="clients" className="section-padding bg-transparent">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-gray-900">
            Trusted By The Best
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to have collaborated with some of the most prestigious names in the industry.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div ref={containerRef} className="relative w-full overflow-hidden">
          {/* Fading mask edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
              transition: {
                ease: "linear",
                duration: 35,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={index} logo={logo} centerX={centerX} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoItem = ({ logo, centerX }) => {
  const ref = useRef(null);
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (ref.current && centerX > 0) {
        const rect = ref.current.getBoundingClientRect();
        const logoCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - logoCenter);

        // if logo is near the middle → highlight
        setIsCenter(distance < 300); // tweak this threshold for 3 logos
      }
    };

    const interval = setInterval(checkPosition, 200); // check continuously
    return () => clearInterval(interval);
  }, [centerX]);

  return (
    <div ref={ref} className="flex-shrink-0 mx-10 w-40 flex items-center justify-center">
      <img
        src={logo.Image}
        alt={logo.alt}
        className={`h-16 w-auto object-contain transition-all duration-500 ${
          isCenter ? "opacity-100 grayscale-0" : "opacity-40 grayscale"
        }`}
      />
    </div>
  );
};

export default Clients;
