import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
    'Lime Plastering',
    'Micro Topping'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
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
        backgroundImage: "url('https://res.cloudinary.com/dzwxkhkvi/image/upload/v1755858882/download_5_pxb6ev.jpg')" 
      }}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Now 4 columns */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold mb-4 block">Visit Us</span>
            <div className="text-gray-700 text-sm space-y-2">
              <p>D'LUXURIO Pvt Ltd</p>
              <p>Shivam Building, 3rd Floor</p>
              <p>Sriram Nagar, Botanical Garden Road</p>
              <p>Kondapur, Hyderabad - 500084</p>
              <a 
                href="mailto:dluxurio.in@gmail.com"
                className="block hover:text-yellow-400 transition-colors"
              >
                dluxurio.in@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold mb-4 block">Menu</span>
            <ul className="space-y-3 text-gray-900">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-left"
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
            <span className="text-xl font-semibold mb-4 block">Our Services</span>
            <ul className="space-y-3 text-gray-900">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end"
          >
            <span className="text-xl font-semibold mb-4 block">Let's Connect</span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
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
            <p className="text-gray-700 text-sm">
              © {currentYear} D'LUXURIO Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-700 hover:text-yellow-400 transition-colors cursor-pointer">
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
