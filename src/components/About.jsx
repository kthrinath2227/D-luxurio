
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Clock, number: '1000+', label: 'Projects Completed' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
              About <span className="text-gradient">D'LUXURIO</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              D'LUXURIO is a premier architecture and interior design studio dedicated to creating 
              extraordinary spaces that reflect your unique style and vision. With over 15 years 
              of experience, we specialize in luxury residential and commercial projects.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Under the leadership of Director V. Vinod Kumar, our team combines innovative design 
              concepts with meticulous attention to detail, ensuring every project exceeds expectations 
              and stands as a testament to exceptional craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img  
                className="w-full h-[600px] object-cover"
                alt="D'LUXURIO team working on architectural designs and interior planning"
               src="https://images.unsplash.com/photo-1695527081728-e3a42f0ce261" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Award Winning</h4>
                  <p className="text-sm text-gray-600">Design Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
