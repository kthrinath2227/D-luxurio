import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Paintbrush, Palette } from 'lucide-react';

const designs = [
  {
    category: 'Lime Plaster',
    title: 'Venetian Elegance',
    description: 'A high-gloss, marble-like finish that adds depth and sophistication to any interior wall.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755770462/Venetian_Elegance_tceji9.jpg',
    alt: 'Close-up of a smooth, polished Venetian plaster wall with a marble effect',
  },
  {
    category: 'Painting',
    title: 'Modern Matte',
    description: 'A velvety, non-reflective finish that hides imperfections and creates a contemporary, uniform look.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755770219/Modern_Matte_s5hhpx.jpg',
    alt: 'A living room wall painted in a deep matte blue color, creating a cozy atmosphere',
  },
  {
    category: 'Lime Plaster',
    title: 'Rustic Tadelakt',
    description: 'A traditional Moroccan waterproof plaster, perfect for creating seamless, organic surfaces in bathrooms.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755770219/Rustic_Tadelakt_asjhsb.jpg',
    alt: 'A modern bathroom with seamless tadelakt plaster walls in a neutral tone',
  },
  {
    category: 'Painting',
    title: 'Color Wash Layers',
    description: 'A technique of applying thin layers of translucent glaze to create a soft, textured, and aged appearance.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755770219/Color_Wash_Layers_whiadj.jpg',
    alt: 'A textured wall with a subtle color wash effect, blending multiple shades of beige',
  },
  {
    category: 'Lime Plaster',
    title: 'Textured Marmorino',
    description: 'Offers a range of textures from light sand to a more dragged or pitted look for a natural, earthy feel.',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755770226/Textured_Marmorino_gmlszm.png',
    alt: 'A close-up of a textured Marmorino plaster wall with a natural, earthy feel',
  },
];

const LimePlasterDesigns = () => {
  const [selectedDesign, setSelectedDesign] = useState(designs[0]);

  // Parallax effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left - width / 2;
    const offsetY = e.clientY - top - height / 2;
    x.set(offsetX / 10); // reduce intensity
    y.set(offsetY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="lime-designs" className="section-padding bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
            Artistry in Finishes
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-20 h-1 bg-blue-600 mx-auto mb-8 origin-left"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in Lime Plaster & Bespoke Painting, we transform surfaces into timeless works of art.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Floating Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDesign.title}
                style={{ rotateX, rotateY }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  src={selectedDesign.image}
                  alt={selectedDesign.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Options List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            {designs.map((design) => (
              <motion.div
                key={design.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setSelectedDesign(design)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-l-4 ${
                  selectedDesign.title === design.title
                    ? 'bg-blue-50/80 border-blue-600 shadow-xl'
                    : 'bg-gray-50/80 border-transparent hover:bg-gray-100/80'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  {design.category === 'Lime Plaster' ? (
                    <Paintbrush className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Palette className="w-5 h-5 text-blue-600" />
                  )}
                  <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                    {design.category}
                  </span>
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
                  {design.title}
                </h3>
                <p className="text-gray-600">{design.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LimePlasterDesigns;
