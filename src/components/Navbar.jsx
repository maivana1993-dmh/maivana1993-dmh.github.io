
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Trang chủ', id: 'home' },
    { label: 'Về Lam Yên', id: 'mission' },
    { label: 'Dịch vụ', id: 'services' },
    { label: 'Đặt lịch', id: 'booking' },
    { label: 'Liên hệ', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section - Adjusted for mobile visibility and horizontal alignment */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Circular frame around the graphic part of the logo */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white border border-teal-100 shadow-sm flex-shrink-0 relative">
              <img
                src="https://horizons-cdn.hostinger.com/77c982cb-193a-488c-831b-d9b10bc00be7/83b83fedb662a97e7ec1b9454ffa9df9.jpg"
                alt="Lam Yên Dưỡng Sinh Logo"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
            {/* Text part of the logo - Adjusted font size for mobile */}
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-teal-800 tracking-wide font-serif whitespace-nowrap">
              Lam Yên <span className="hidden sm:inline">Dưỡng Sinh</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-stone-600 hover:text-teal-700 font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              Đặt lịch ngay
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-700 hover:text-teal-700 p-2"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute w-full"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-stone-700 hover:text-teal-700 font-medium py-3 px-2 rounded-lg hover:bg-stone-50 transition-colors duration-200 border-b border-stone-50 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full mt-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-md"
            >
              Đặt lịch ngay
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
