
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

const ImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const slides = [
    { image: "https://ik.imagekit.io/ThedevsTechnologies/Serene%20Sprout%20Serendipity_%20Modern%20Green%20Kitchens%20Resonating%20with%20Nature's%20Charm.jpg?updatedAt=1754746080989", title: "Sleek Kitchens" },
    { image: "https://ik.imagekit.io/ThedevsTechnologies/15%20Best%20Moody%20Mid%20Century%20Modern%20Living%20Room%20Ideas%20-%20Lovely%20Harbor.jpg?updatedAt=1754737267088", title: "Living Spaces" },
    { image: "https://ik.imagekit.io/ThedevsTechnologies/38%20Diverse%20Blue%20Bathroom%20Styles%20-%20Glamorous%20Place.jpg?updatedAt=1754731013240", title: "Elegant Bathrooms" },
    { image: "https://ik.imagekit.io/ThedevsTechnologies/27%20Elegant%20Dusty%20Blue%20Bedroom%20Ideas%20for%20Sophisticated%20Comfort.jpg?updatedAt=1754746080886", title: "Serene Bedrooms" },
    { image: "https://ik.imagekit.io/ThedevsTechnologies/15%20Inspiring%20Office%20Decor%20Ideas%20to%20Transform%20Your%20Workspace%20-%20George's%20inspirations.jpg?updatedAt=1754746081156", title: "Productive Offices" },
    { image: "https://ik.imagekit.io/ThedevsTechnologies/download.jpg?updatedAt=1754746081028", title: "Chic Restaurants" },
    { image: "https://ik.imagekit.io/ThedevsTechnologies/download%20(1).jpg?updatedAt=1754746080809", title: "Modern Facades" },
  ];
  
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [emblaApi]);


  return (
    <section className="py-16 sm:py-24 bg-gray-100 overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {[...slides, ...slides].map((slide, index) => (
            <div className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] min-w-0 pl-4" key={index}>
              <motion.div 
  className="relative h-96 w-full rounded-xl shadow-lg overflow-hidden group"
  whileHover={{ scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <img 
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    alt={slide.title}
    src={slide.image}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
  <div className="absolute bottom-0 left-0 p-6">
    <h3 className="text-white text-2xl font-playfair font-semibold drop-shadow-lg">{slide.title}</h3>
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
