import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757669477/NOH01895_1_glimmi.jpg",
    },
    {
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757598200/PDS_TheFirstByDSR__DSC2810_wcrt9o.jpg",
    },
    {
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756556498/1000035655_chxwm1.jpg",
    },
    {
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757596072/AID08284_jeosms.jpg",
    },
    {
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757598582/NOH02071_1_cuin6n.jpg",
    },
    {
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756556494/PDS_JupallyRameshwarRao__DSC3677_hzf3uo.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Cinematic Dynamic Animated Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.15, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Active Image with Dynamic Zoom & Pan Motion */}
          <motion.img
            src={slides[currentSlide].image}
            alt="Gallery Slide"
            initial={{ scale: 1.02, x: 0 }}
            animate={{ scale: 1.1, x: currentSlide % 2 === 0 ? -15 : 15 }}
            transition={{ duration: 7, ease: "linear" }}
            className="w-full h-full object-cover object-center"
          />

          {/* Cinematic Vignette & Ambient Luxury Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Arrows */}
      <div className="absolute inset-x-6 sm:inset-x-10 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto p-3.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all duration-300 shadow-2xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto p-3.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all duration-300 shadow-2xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Elegant Progress Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] shadow-md"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;