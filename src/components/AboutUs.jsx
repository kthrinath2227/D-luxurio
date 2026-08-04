import React from "react";
import {
  ShieldAlert,
  Leaf,
  Droplet,
  Wind,
  Thermometer,
  Flame,
  ShieldCheck,
  Recycle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Anti-Bacterial / Anti-Algae", icon: <ShieldCheck className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Anti-Fire", icon: <Flame className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Anti-Crack", icon: <ShieldAlert className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Zero-VOC", icon: <Recycle className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Breathable", icon: <Wind className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Heat-Insulation", icon: <Thermometer className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Eco-Friendly", icon: <Leaf className="w-7 h-7 text-[#E5C158]" /> },
  { name: "Water / Salt – Resistant", icon: <Droplet className="w-7 h-7 text-[#E5C158]" /> },
];

const AboutUs = () => {
  return (
    <>
      {/* ================= About Us Section ================= */}
      <section
        id="about"
        className="relative py-24 sm:py-32 text-white bg-[#0a0a0a] overflow-hidden"
      >
        {/* Ambient Glow Backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C158]">
                Italian Heritage
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6 text-white">
              ABOUT US
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto origin-center"
            />
          </div>

          {/* Content - Fully Readable & Elegantly Spaced */}
          <div className="max-w-3xl mx-auto space-y-6 text-center text-gray-300 font-light text-base sm:text-lg leading-relaxed">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle top border glow */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
              
              <p className="font-serif text-xl sm:text-2xl text-[#E5C158] font-medium tracking-wide mb-6">
                D’ LUXURIO  
                <br />
                <span className="text-sm sm:text-base font-sans tracking-widest uppercase text-gray-400 mt-1 block">
                  Luxe Finishes….. Truly Italian Style.
                </span>
              </p>
              
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p>
                  Since 2016, we are in the Industry dealing with many Italian and Indian Brands serving Architects, Interior Designers and end users for more than 8 years.
                </p>
                <p>
                  The brand D’ Luxurio was registered as a Corporate Entity in 2021 spreading its wings across 4 states of South India.
                </p>
                <p>
                  In dialogue with traditional Italian know-how, we reinterpret an ancient art with an elegant, passionate, and contemporary style that is decidedly modern.
                </p>
                <p>
                  D’ Luxurio creative essence runs through every finish like a subtle fil rouge, delivering unexpected aesthetic experiences that consciously bring to mind a unique lifestyle.
                </p>
                <p className="pt-2 font-serif italic text-gray-200">
                  Between art and craft, we discover endless solutions — each creation becoming a one-of-a-kind masterpiece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= History + Features Section ================= */}
      <section
        id="history"
        className="relative py-24 sm:py-32 text-white bg-[#111111] overflow-hidden border-t border-white/5"
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          
          {/* History Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6 text-white">
              HISTORY OF LIME PLASTER
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto origin-center"
            />
          </div>

          {/* History Content Box */}
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/10 shadow-xl mb-24 space-y-6 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            <p>
              The earliest documented use of lime as a construction material was approximately 4000 B.C., when it was used in Egypt for plastering the pyramids. The beginning of the use of lime in mortars is not clear, but it is well documented that the Roman Empire used lime-based mortars extensively.
            </p>
            <p>
              In 1756, James Smeaton developed perhaps the first hydraulic lime by calcining Blue Lias limestone. An Italian pozzolanic earth from Civita Vecchia was also added to provide strength. This mortar was famously used to build the Eddystone Lighthouse.
            </p>
            <p>
              Prior to 1930, most masonry construction utilized lime-based mortars. Lime has proven performance demonstrated by structures like the Great Wall of China.
            </p>
          </div>

          {/* Features Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6 text-white">
              Features
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto origin-center"
            />
          </div>

          {/* Features Grid - Fully Responsive & Premium Hover States */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#171717] hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-lg overflow-hidden"
              >
                {/* Subtle Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon wrapper with gold accent tint */}
                <div className="relative z-10 p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors duration-300 shadow-inner">
                  {feature.icon}
                </div>

                <p className="relative z-10 text-gray-200 font-medium text-xs sm:text-sm tracking-wide">
                  {feature.name}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;