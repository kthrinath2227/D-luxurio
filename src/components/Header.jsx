import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <img
              src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757571035/D-luxurio_logo_baqoh0.png"
              alt="D-luxurio Logo"
              className={`transition-all duration-500 object-contain brightness-125 ${
                isScrolled ? 'w-[100px] h-[65px]' : 'w-[150px] h-[90px]'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-5 py-2 text-xs uppercase tracking-wider font-medium transition-colors duration-300 rounded-full ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] shadow-lg rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action / Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:9160000002"
              className="group flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-white/5 text-[#E5C158] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs uppercase tracking-wider font-medium border border-white/10 backdrop-blur-md shadow-lg"
            >
              <div className="p-1 rounded-full bg-[#D4AF37]/20 group-hover:bg-black/10 transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#E5C158] group-hover:text-black" />
              </div>
              <span>+91 91600 00002</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#E5C158]" /> : <Menu className="w-5 h-5 text-[#E5C158]" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-4 right-4 mt-3 md:hidden bg-[#111111]/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden p-2"
          >
            <div className="p-3 space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-5 py-3 rounded-2xl text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#D4AF37] text-black font-bold shadow-md'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10">
                <a
                  href="tel:9160000002"
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-black font-semibold text-xs uppercase tracking-widest shadow-xl active:scale-98 transition-transform"
                >
                  <span className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call: 9160000002</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;