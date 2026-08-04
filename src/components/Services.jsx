import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    dragFree: true
  });

  const services = [
    {
      title: 'Lime Plasters',
      description: 'Durable, breathable, and elegant walls with authentic Italian heritage textures.',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757679713/Antoine_Lime_Plaster_diff_seamless_vou2pr.jpg',
    },
    {
      title: 'Micro Toppings',
      description: 'Sophisticated, seamless, and durable surfaces engineered for contemporary living spaces.',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756538024/micro-topping-flooring-1000x1000_dqhbgh.jpg',
    },
    {
      title: 'Liquid Metal',
      description: 'Bespoke, high-end metallic artistry transforming ordinary architectural elements into icons.',
      image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757679574/LM5_o7degx.jpg',
    },
  ];

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "linear-gradient(to bottom, rgba(10, 10, 10, 0.92), rgba(10, 10, 10, 0.97)), url('https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756996942/smoke-background-design_loveez.jpg')",
      }}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Texture Overlay matched to website */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757598200/PDS_TheFirstByDSR__DSC2810_wcrt9o.jpg")`
        }}
      />

      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container mx-auto px-6 sm:px-12 lg:px-20 z-10">
        {/* Invisible SEO heading for local keywords */}
        <h2 className="sr-only">
          Lime plasters, micro toppings and liquid metal finishes in Kondapur, Hyderabad
        </h2>

        {/* Section Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C158]">
                Signature Craftsmanship
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-white">
              Our Expertise
            </h2>
          </motion.div>

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

        {/* Horizontal Swipeable Embla Carousel */}
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex -ml-4 sm:-ml-6">
            {[...services, ...services].map((service, index) => (
              <div 
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_36%] min-w-0 pl-4 sm:pl-6" 
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#141414] h-[440px] sm:h-[480px] flex flex-col justify-end"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Card Image with smooth cinematic zoom on hover */}
                  <img
                    src={service.image}
                    alt={`${service.title} finishes by D'LUXURIO in Kondapur, Hyderabad`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                    itemProp="image"
                  />

                  {/* Rich cinematic luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top accent gold line border on hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Text Content Overlay */}
                  <div className="relative z-10 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold mb-2">
                      D'Luxurio Offering
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3 tracking-wide drop-shadow-md group-hover:text-[#E5C158] transition-colors duration-300"
                      itemProp="name"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed line-clamp-2 group-hover:text-white transition-colors duration-300" itemProp="description">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;