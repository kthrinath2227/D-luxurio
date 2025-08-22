
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Residential Design',
    'Commercial Architecture',
    'Interior Styling',
    'Space Planning',
    'Lighting Design',
    'Project Management'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
  className="relative text-white bg-cover bg-no-repeat"
  style={{ 
    backgroundImage: "url('https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755858249/Nate_Crawford_Heirloom_-_Rigid___24x36_zrxexp.jpg')" 
  }}
>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-playfair">D</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-playfair">D'LUXURIO</span>
                <p className="text-sm text-gray-400">Design & Decor</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating extraordinary spaces that reflect your unique style and vision. 
              Excellence in architecture and interior design since 2009.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold mb-6 block">Our Services</span>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Shivam Building, 3rd Floor</p>
                  <p>Sriram Nagar, Botanical Garden Road</p>
                  <p>Kondapur, Hyderabad - 500084</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>9160000002</p>
                  <p>8096333355</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a 
                  href="mailto:dluxurio.in@gmail.com"
                  className="text-gray-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  dluxurio.in@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-1000 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} D'LUXURIO Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              Director: V. Vinod Kumar | Crafting exceptional spaces since 2009
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
