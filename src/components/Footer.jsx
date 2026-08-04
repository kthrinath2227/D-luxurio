import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, MapPin, Mail, Compass, X, Send, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
  });

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Lime Plastering',
    'Micro Topping',
    'Liquid Metal',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn', handle: '@dluxurio' },
    { icon: Instagram, href: '#', name: 'Instagram', handle: '@dluxurio.in' },
    { icon: Facebook, href: '#', name: 'Facebook', handle: "D'LUXURIO" },
    { icon: Twitter, href: '#', name: 'Twitter', handle: '@dluxurio' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, city } = formData;
    
    // Replace with your official WhatsApp business phone number (with country code, e.g., 919876543210)
    const phoneNumber = "919381187905"; 
    
    const message = `Hello D'LUXURIO Team,\n\nI want to start a project.\n\n*Name:* ${name}\n*Mobile:* ${mobile}\n*City:* ${city}\n\n #Lead From Website#`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="relative text-white bg-black overflow-hidden border-t border-white/10">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] bg-[#E5C158]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10 space-y-12">
          
          {/* Top Full-Width Horizontal "Let's Connect & Project Starter" Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-black border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl backdrop-blur-xl group"
          >
            {/* Glowing Ambient Corner Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E5C158]/20 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              {/* Left: Heading & Call to Action */}
              <div className="space-y-2 max-w-xl">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[3px] text-[#E5C158] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
                  Collaborate With Us
                </span>
                <h3 className="text-2xl sm:text-3xl font-playfair font-semibold tracking-wide text-white">
                  Ready to elevate your architectural space?
                </h3>
                <p className="text-neutral-400 text-sm font-sans leading-relaxed">
                  Connect through our social channels or start your custom consultation project today.
                </p>
              </div>

              {/* Middle/Right: Action Button to Start Project */}
              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-[#E5C158] hover:bg-[#d4ae47] text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-[#E5C158]/20 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Let's Start the Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Social Links Row inside Horizontal Card */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-8 mt-8 border-t border-white/10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-[#E5C158]/10 hover:border-[#E5C158]/40 transition-all duration-300 group/item"
                  aria-label={social.name}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover/item:text-[#E5C158] group-hover/item:border-[#E5C158]/40 transition-colors">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-medium text-white group-hover/item:text-[#E5C158] transition-colors">
                        {social.name}
                      </span>
                      <span className="text-[10px] text-neutral-500">
                        {social.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover/item:text-[#E5C158] transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Main Footer Info Grid (Visit Us Map UI Card, Quick Links, Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start pt-4">
            
            {/* Visit Us - Map UI Style Card (Span 6 on LG) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl group"
            >
              {/* Map UI Decorative Grid Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-playfair font-semibold tracking-wide text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#E5C158]" />
                    Visit Our Studio
                  </span>
                  <span className="text-[10px] tracking-wider uppercase bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] px-2.5 py-1 rounded-full font-medium">
                    Hyderabad HQ
                  </span>
                </div>

                {/* Mock Map Container Styling */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3 relative group/map">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#E5C158]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-neutral-300 text-sm space-y-1 font-sans">
                      <p className="text-white font-medium">D'LUXURIO Pvt Ltd</p>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        Shivam Building, 3rd Floor, Sriram Nagar, Botanical Garden Road, Kondapur, Hyderabad - 500084
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 text-xs">
                    <a 
                      href="mailto:dluxurio.in@gmail.com"
                      className="text-[#E5C158] hover:underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      dluxurio.in@gmail.com
                    </a>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>Open in Maps</span>
                      <ArrowUpRight className="w-3 h-3 text-[#E5C158]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links (Span 3 on LG) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-3 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >
              <span className="text-xl font-playfair font-semibold tracking-wide text-white block">Menu</span>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-400 hover:text-[#E5C158] transition-colors duration-300 text-left text-sm cursor-pointer flex items-center justify-between w-full group/link"
                    >
                      <span>{link.name}</span>
                      <span className="text-[#E5C158] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services (Span 3 on LG) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-3 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >
              <span className="text-xl font-playfair font-semibold tracking-wide text-white block">Our Services</span>
              <ul className="space-y-2.5">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-neutral-400 text-sm hover:text-[#E5C158] transition-colors duration-300 cursor-pointer block">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Bottom Bar Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8 space-y-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              
              {/* Copyright */}
              <p className="text-neutral-400 text-xs sm:text-sm tracking-wide">
                © {currentYear} D'LUXURIO Pvt Ltd. All rights reserved.
              </p>

              {/* Developer Credit */}
              <div itemScope itemType="https://schema.org/Organization">
                <a
                  itemProp="url"
                  href="https://www.thedevstechnologies.in"
                  target="_blank"
                  rel="author noopener noreferrer"
                  title="TheDevsTechnologies - Website Design, Web Development & Digital Marketing Company"
                  aria-label="Website designed and developed by TheDevsTechnologies"
                  className="group inline-block"
                >
                  <span className="text-neutral-400 text-xs sm:text-sm tracking-wide">
                    Designed &amp; Developed by{" "}
                  </span>
                  <span
                    itemProp="name"
                    className="font-semibold bg-gradient-to-r from-[#F5D98A] via-[#E5C158] to-[#FFD700] bg-clip-text text-transparent transition group-hover:brightness-125"
                  >
                    TheDevsTechnologies
                  </span>
                </a>
              </div>

            </div>

            {/* Director Sub-footer */}
            <div className="text-center pt-2">
              <p className="text-neutral-500 text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase font-light">
                Director: V. Vinod Kumar
                <span className="text-[#E5C158] mx-2.5 sm:mx-3">•</span>
                Crafting Exceptional Spaces Since 2009
              </p>
            </div>
          </motion.div>

        </div>
      </footer>

      {/* Project Inquiry Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E5C158]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
              <div>
                <span className="text-xs uppercase tracking-[2px] text-[#E5C158] font-medium block mb-1">
                  Instant Connect
                </span>
                <h3 className="text-xl font-playfair font-semibold text-white">
                  Let's Start Your Project
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 pt-6 relative z-10">
              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-medium tracking-wide">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5C158] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-medium tracking-wide">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5C158] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-medium tracking-wide">Name of City</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Hyderabad"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5C158] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#d4ae47] text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Footer;