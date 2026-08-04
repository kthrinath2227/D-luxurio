import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Clients = () => {
  const logos = [
    {
      name: "MyHomegroup",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757588315/logo_pjnrzp.png",
      alt: "MyHomegroup logo",
    },
    {
      name: "Phoenix",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736958/WhatsApp_Image_2025-08-25_at_08.54.50_78c32d46-removebg-preview_zsorob.png",
      alt: "Phoenix logo",
    },
    {
      name: "LEPL",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736958/logo-1-removebg-preview_v6miwm.png",
      alt: "LEPL logo",
    },
    {
      name: "Tridasa",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757653553/tridasa-main-logo_hzxwcn.png",
      alt: "Tridasa logo",
    },
    {
      name: "Sasi",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756737822/sasi-logo-removebg-preview_tyumwt.png",
      alt: "Sasi logo",
    },
    {
      name: "Vertex",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757568546/Capture_gfu0sc.png",
      alt: "Vertex logo",
    },
    {
      name: "STBL",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736959/website-logo_1-removebg-preview_tdhio9.png",
      alt: "STBL logo",
    },
    {
      name: "KMV Vivaan",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736957/WhatsApp_Image_2025-08-25_at_08.54.46_28dc3f48-removebg-preview_hnijrq.png",
      alt: "KMV Vivaan logo",
    },
    {
      name: "Mid vally city",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736958/WhatsApp_Image_2025-08-25_at_08.54.49_85303c28-removebg-preview_auneuz.png",
      alt: "Mid vally city logo",
    },
    {
      name: "Grundfos",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757588316/Capture_1_jh9mcq.png",
      alt: "Grundfos logo",
    },
    {
      name: "United Telugu Kitchens",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757067507/WhatsApp_Image_2025-08-25_at_08.54.47_693d6e08_jtrpp8_1_ohv4mc.jpg",
      alt: "United Telugu Kitchens logo",
    },
    {
      name: "Isthaa",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736958/isthaa-logo-removebg-preview_vuwz5b.png",
      alt: "Isthaa logo",
    },
    {
      name: "NOHO",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757067509/download_1_nozchk.png",
      alt: "NOHO logo",
    },
    {
      name: "Antera",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757588315/images_anbyiy.jpg",
      alt: "Antera logo",
    },
    {
      name: "Aidu",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757067508/images_djfsrr.jpg",
      alt: "Aidu logo",
    },
    {
      name: "lastsaturday",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757314120/LS_Secodary-Horizontal-Gold_ah32er.jpg",
      alt: "lastsaturday logo",
    },
    {
      name: "Teraso",
      Image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757653749/Capture_wmrs3b.png",
      alt: "Teraso logo",
    },
    {
      name: "Over the Moon",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757067162/overthemoon-logo__1_-removebg-preview_lozkqh.png",
      alt: "Over the Moon logo",
    },
    {
      name: "DD Movies",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736959/WhatsApp_Image_2025-08-25_at_08.54.51_c70aea6d-removebg-preview_mlsad3.png",
      alt: "DD Movies logo",
    },
    {
      name: "NEXG",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736959/logo-removebg-preview_zmefu4.png",
      alt: "NEXG logo",
    },
    {
      name: "Bay Window",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756736958/WhatsApp_Image_2025-08-25_at_08.54.49_3316ec77-removebg-preview_ztz8on.png",
      alt: "Bay Window logo",
    },
    {
      name: "ATR Group",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756738033/WhatsApp_Image_2025-08-25_at_08.54.48_28063317_pmwsws.jpg",
      alt: "ATR Group logo",
    },
    {
      name: "Reflections",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756738042/WhatsApp_Image_2025-08-25_at_08.54.46_90d18e0d_tip2va.jpg",
      alt: "Reflections logo",
    },
    {
      name: "eleVateX",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756738041/WhatsApp_Image_2025-08-25_at_08.54.47_f4958f3f_sr2bz4.jpg",
      alt: "eleVateX logo",
    },
  ];

  return (
    <section id="clients" className="relative py-24 md:py-32 bg-[#121212] overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E5C158]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-[#E5C158]/30 shadow-lg mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E5C158]">
              Partnerships
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6 text-white tracking-wide">
            Trusted By The Best
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 1 }}
            className="h-0.5 mx-auto mb-6 bg-gradient-to-r from-transparent via-[#E5C158] to-transparent rounded-full"
          ></motion.div>

          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            We are proud to have collaborated with some of the most prestigious names and industry leaders.
          </p>
        </motion.div>

        {/* Responsive Logo Grid with pure white card background */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex items-center justify-center h-32 sm:h-36 p-4 rounded-xl bg-white shadow-lg border border-neutral-200/80 hover:border-[#E5C158] transition-all duration-300 overflow-hidden"
            >
              <img
                src={logo.Image}
                alt={logo.alt}
                className="max-h-16 max-w-[85%] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;