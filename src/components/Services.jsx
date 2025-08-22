import React from 'react';
import { motion } from 'framer-motion';
import { Building, Dribbble, Sofa } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Architecture',
      description: 'Innovative and sustainable building designs.',
      animation: { x: -150, y: 0 }, // from left
    },
    {
      icon: Dribbble,
      title: 'Interiors',
      description: 'Elegant spaces that reflect your personal style.',
      animation: { x: 0, y: 150 }, // from bottom
    },
    {
      icon: Sofa,
      title: 'Furnitures',
      description: 'Custom, high-quality furniture pieces.',
      animation: { x: 150, y: 0 }, // from right
    },
  ];

  const handleServiceClick = (serviceName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Detailed information about ${serviceName} will be available soon.`,
      duration: 4000,
    });
  };

  return (
    <section 
      id="services" 
      className="relative section-padding bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755858882/download_5_pxb6ev.jpg')" 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content wrapper */}
      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-white">
            Our Expertise
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We craft beautiful and functional spaces, from architectural blueprints to the finest interior details.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...service.animation }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => handleServiceClick(service.title)}
              className="bg-white group rounded-2xl shadow-md hover:shadow-2xl 
                         transition-all duration-300 p-8 text-center cursor-pointer 
                         transform hover:-translate-y-2"
            >
              {/* Icon wrapper */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-blue-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
