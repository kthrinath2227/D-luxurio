import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [
    {
      name: "Alekhya Homes",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756033540/main-logo_i2cllc.jpg",
      alt: "Alekhya Homes logo",
    },
    {
      name: "Amara Raja",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756033461/HI_Logo2025-1-1_zi3pjh.png",
      alt: "Amara Raja logo",
    },
    {
      name: "Aparna Constructions",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785280/cropped-ysrealty-e1546241768536-2_lwu4t7.png",
      alt: "Aparna Constructions logo",
    },
    {
      name: "Arttdinox",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785057/aparna-logo_spgy20.jpg",
      alt: "Arttdinox logo",
    },
    {
      name: "Assetz",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785065/logo_o2yeoc.jpg",
      alt: "Assetz logo",
    },
    {
      name: "Buffalo Wild Wings",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784685/logo_o1buck.png",
      alt: "Buffalo Wild Wings logo",
    },
    {
      name: "DSR Builders",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784685/logo_o1buck.png",
      alt: "DSR Builders logo",
    },
    {
      name: "EIPL",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755785171/logo_1_xdyuwg.jpg",
      alt: "EIPL logo",
    },
    {
      name: "Geetanjali",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755784685/logo_o1buck.png",
      alt: "Geetanjali logo",
    },
    {
      name: "HCL",
      Image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756033438/logo-348_dms3oa.png",
      alt: "HCL logo",
    },
  ];

  return (
    <section id="clients" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-gray-900">
            Trusted By The Best
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to have collaborated with some of the most prestigious
            names in the industry.
          </p>
        </motion.div>

        {/* Grid with borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-gray-200">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-gray-200 bg-white h-32"
            >
              <img
                src={logo.Image}
                alt={logo.alt}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
