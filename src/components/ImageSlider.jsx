import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

const ImageSlider = () => {
  // Embla Carousel initialized with smooth looping and alignment
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    dragFree: true
  });

  const slides = [
    { image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757654626/IMG-20250811-WA0016_zlfaw8.jpg", title: "Italian Lime Plaster" },
    { image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757654735/PDS_TheFirstByDSR__DSC2706_j7ygc3.jpg", title: "Architectural Micro-Topping" },
    { image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757654795/HYD-Aaidu-12-1536x1110_l2dcor.jpg", title: "Bespoke Wall Textures" },
    { image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757672720/WhatsApp_Image_2025-09-12_at_15.52.29_41023b3a_hqdgys.jpg", title: "Seamless Luxury Finishes" },
    { image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757654926/Terrazzo-6_uha7qb.jpg", title: "Polished Terrazzo Artistry" },
    { image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757654985/PDS_JupallyRameshwarRao__DSC3803_lnj1qk.jpg", title: "Exclusive Interiors" },
  ];

  // Auto-scroll loop timer
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-[#0a0a0a] relative">
      {/* Ambient background architectural glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C158]">
                Mastercrafted Surfaces
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Featured Portfolio
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={scrollPrev}
              className="p-3.5 rounded-full bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-transparent transition-all duration-300 shadow-xl"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3.5 rounded-full bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-transparent transition-all duration-300 shadow-xl"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="embla__container flex -ml-4 sm:-ml-6">
          {[...slides, ...slides].map((slide, index) => (
            <div 
              className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_36%] min-w-0 pl-4 sm:pl-6" 
              key={index}
            >
              <motion.div 
                className="relative h-[440px] sm:h-[480px] w-full rounded-2xl shadow-2xl overflow-hidden group border border-white/10 bg-[#141414]"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Image with zoom and smooth filter transition */}
                <img 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                  alt={slide.title}
                  src={slide.image}
                />

                {/* Rich cinematic luxury gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Subtle Top Gold Border Accent on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold mb-2">
                    D'Luxurio Signature
                  </p>
                  <h3 className="text-white text-2xl sm:text-3xl font-serif font-medium tracking-wide drop-shadow-md">
                    {slide.title}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;