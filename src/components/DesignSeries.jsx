import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const seriesData = [
  {
    title: 'Designer / Signature Series',
    description: 'Exclusive, statement-making finishes from the other face of the world that turn walls and ceilings into works of art.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755766817/generated-image_sgc0xl.png',
  },
  {
    title: 'Lime & Luxury Series',
    description: 'A perfect blend of traditional Venetian plaster and marble powders with luxurious, smooth textures and finishes.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755766814/generated-image_1_upihkb.png',
  },
  {
    title: 'Metallic Series',
    description: 'Contemporary finishes of glamour with radiant, reflective surfaces. Smooth and textured finishes add depth and intensity.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755766820/generated-image_2_hgrlkg.png',
  },
  {
    title: 'Marmorino Series',
    description: 'Inspired by the classic Italian Renaissance style, Marmorino creates a polished, marble effect, adding depth and richness.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755766814/generated-image_3_eqxbu4.png',
  },
];

const Card = ({ item, index, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  const handleSeriesClick = (seriesTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Details for the "${seriesTitle}" are coming soon.`,
      duration: 4000,
    });
  };

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{
          scale,
        }}
        className="relative w-[95%] max-w-6xl h-[75vh] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
        onClick={() => handleSeriesClick(item.title)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={item.title}
          src={item.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            {item.title}
          </h3>
          <p className="text-base md:text-lg max-w-3xl">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const DesignSeries = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="design-series"
      ref={containerRef}
      className="relative h-[500vh] bg-gray-100"
    >
      <div className="sticky top-0 h-screen">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-gray-900">
              Our Design Series
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated collections of signature finishes and materials, each telling a unique story.
            </p>
          </motion.div>
        </div>
      </div>
      {seriesData.map((item, index) => {
        const targetScale = 1 - (seriesData.length - index) * 0.05;
        return (
          <Card
            key={index}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={[index * (1 / seriesData.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default DesignSeries;
