import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const designs = [
  {
    title: 'Concrete Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684319/Concrete_x222bj.jpg',
    alt: 'Close-up of a smooth, polished concrete wall',
    subtitle: 'Industrial Minimalist'
  },
  {
    title: 'Stucco Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684335/Stucco_wqvcp3.jpg',
    alt: 'A living room wall painted in a deep matte blue color, creating a cozy atmosphere',
    subtitle: 'Classic Textured Italian'
  },
  {
    title: 'Travertine Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684338/Travertine_mbbyoq.jpg',
    alt: 'A modern bathroom with seamless tadelakt plaster walls in a neutral tone',
    subtitle: 'Natural Stone Elegance'
  },
  {
    title: 'Perlata Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684324/Perlata_l6xv8u.jpg',
    alt: 'A textured wall with a subtle color wash effect, blending multiple shades of beige',
    subtitle: 'Shimmering Pearlescent'
  },
  {
    title: 'Istinto Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684322/Istinto_e6hheh.jpg',
    alt: 'A close-up of a wall with a rich, velvety finish in a deep charcoal color',
    subtitle: 'Raw Architectural Art'
  },
  {
    title: 'Venetian Plaster',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684341/Venetian_ceapn0.jpg',
    alt: 'A close-up of a wall with a rich, velvety finish in a deep charcoal color',
    subtitle: 'Timeless Polished Marble'
  },
  {
    title: 'Custom Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684326/Custom-Metalic_ooqmnd.jpg',
    alt: 'A close-up of a wall with a shimmering metallic finish in a rich gold color',
    subtitle: 'Bespoke Metallics'
  },
  {
    title: 'Pitted Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684328/Pitted_qjhznk.jpg',
    alt: 'A close-up of a wall with a smooth matte finish in a soft pastel color',
    subtitle: 'Organic Earthy Depth'
  },
  {
    title: 'Rugged Concrete',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684331/Rugged_phlebw.jpg',
    alt: 'A close-up of a wall with a rugged texture in a natural gray color',
    subtitle: 'Brutalist Tactile Form'
  },
  {
    title: 'Sharki Finish',
    image: 'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757684333/Sharki_Gold_jwheq6.jpg',
    alt: 'A close-up of a wall with a smooth matte finish in a soft pastel color',
    subtitle: 'Gilded Royal Gold'
  }
];

const LimePlasterDesigns = () => {
  const [selectedDesign, setSelectedDesign] = useState(designs[0]);

  // 3D Parallax effect setup for desktop
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left - width / 2;
    const offsetY = e.clientY - top - height / 2;
    x.set(offsetX / 15);
    y.set(offsetY / 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="lime-designs" 
      className="h-screen w-full bg-[#0a0a0a] text-white overflow-hidden relative flex flex-col justify-between py-6 lg:py-8"
    >
      {/* Background Texture & Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757598200/PDS_TheFirstByDSR__DSC2810_wcrt9o.jpg")`
        }}
      />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col h-full justify-between max-w-7xl">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-2 lg:mb-4 shrink-0"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg mb-2">
            <Sparkles className="w-3 h-3 text-[#E5C158]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E5C158]">
              Surface Artistry
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight mb-2 text-white">
            Artistry in Finishes
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-lg mx-auto">
            Specializing in Lime Plaster & Bespoke Painting, transforming surfaces into timeless works of art.
          </p>
        </motion.div>

        {/* Main Balanced Layout Grid (Optimized for full viewport height constraint) */}
        <div className="grid grid-cols-1 lg:grid-cols-[52%_44%] gap-6 lg:gap-10 items-center flex-grow min-h-0 py-2">
          
          {/* Left: Floating 3D Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative h-[260px] sm:h-[340px] lg:h-full max-h-[440px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#141414] group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDesign.title}
                style={{ rotateX, rotateY }}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 transition-all duration-700"
                  src={selectedDesign.image}
                  alt={selectedDesign.alt}
                />
                
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-90" />
                
                {/* Top Gold Border Light Accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

                {/* Floating Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold block mb-0.5">
                      {selectedDesign.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-white tracking-wide drop-shadow-lg">
                      {selectedDesign.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C158] shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Immersive Options Grid with Visible Micro-Card Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              }
            }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 sm:gap-2.5 overflow-y-auto max-h-[380px] lg:max-h-[440px] pr-1.5 custom-scrollbar"
          >
            {designs.map((design) => {
              const isActive = selectedDesign.title === design.title;
              return (
                <motion.div
                  key={design.title}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setSelectedDesign(design)}
                  onClick={() => setSelectedDesign(design)}
                  className={`relative p-2.5 sm:p-3 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border backdrop-xl flex items-center space-x-3 group ${
                    isActive
                      ? 'bg-[#1a1a1a]/95 border-[#D4AF37]/70 shadow-lg shadow-black/60 ring-1 ring-[#D4AF37]/30'
                      : 'bg-[#141414]/70 border-white/10 hover:bg-[#1a1a1a]/90 hover:border-white/25'
                  }`}
                >
                  {/* Micro Thumbnail Preview Image inside card */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 border border-white/15 shadow-md">
                    <img 
                      src={design.image} 
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Active Gold Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-[#D4AF37] to-[#E5C158] rounded-r-full shadow-md" />
                  )}

                  <div className="relative z-10 min-w-0 flex-1">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#E5C158] font-medium block truncate">
                      {design.subtitle}
                    </span>
                    <h4 className={`font-serif text-xs sm:text-sm font-medium tracking-wide truncate transition-colors duration-300 ${
                      isActive ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {design.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LimePlasterDesigns;