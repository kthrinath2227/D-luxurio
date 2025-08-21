import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://ik.imagekit.io/ThedevsTechnologies/herosection-edited_SaFkLwEU7?updatedAt=1754733469392",
    },
    {
      image: "https://ik.imagekit.io/ThedevsTechnologies/15%20Best%20Moody%20Mid%20Century%20Modern%20Living%20Room%20Ideas%20-%20Lovely%20Harbor.jpg?updatedAt=1754734078752",
       
    },
    {
      image: "https://ik.imagekit.io/ThedevsTechnologies/watercolor-abstract-background.jpg?updatedAt=1754737267327",
    
    },
    {
      image: "https://ik.imagekit.io/ThedevsTechnologies/8%20Wabi-Sabi%20Bathroom%20Sinks%20for%20a%20Zen%20Retreat.jpg?updatedAt=1754737845667",

    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-blue-50">
 <AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
    className="absolute inset-0"
  >
    <img
      className="w-full h-full object-cover"
      alt={`Architecture and interior design showcase - ${slides[currentSlide].title}`}
      src={slides[currentSlide].image}  // <-- FIX HERE
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
  </motion.div>
</AnimatePresence>


      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            {/* <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 drop-shadow-lg">
              D'LUXURIO
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light drop-shadow-md">
              Design & Decor
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div> */}
          </motion.div>

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-playfair drop-shadow-md">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-sm">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {/* <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg backdrop-blur-sm bg-white/10"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button> */}
            </motion.div>

        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
       <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  );
};

export default Hero;