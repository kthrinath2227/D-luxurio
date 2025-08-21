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
    gradient: 'bg-gradient-to-br from-[#CE9FFC]  to-[#7367F0]',
  },
  {
    icon: Dribbble,
    title: 'Interiors',
    description: 'Elegant spaces that reflect your personal style.',
    gradient: 'bg-gradient-to-br from-[#ABDCFF]  to-[#0396FF]',
  },
  {
    icon: Sofa,
    title: 'Furnitures',
    description: 'Custom, high-quality furniture pieces.',
    gradient: 'bg-gradient-to-br from-[#FDEB71]  to-[#F8D800]',
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
    <section id="services" className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-gray-900">
            Our Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We craft beautiful and functional spaces, from architectural blueprints to the finest interior details.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => handleServiceClick(service.title)}
              className={`${service.gradient} group rounded-2xl shadow-md hover:shadow-2xl 
                          transition-all duration-300 p-8 text-center cursor-pointer 
                          transform hover:-translate-y-2`}
            >
              {/* Icon wrapper */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/80 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-blue-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
