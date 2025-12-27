
import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = ({ content }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 relative overflow-hidden">
      {/* Decorative gradient blob in footer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Circular frame added around the logo's core graphic in the footer */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-0.5 border-2 border-teal-700 shadow-lg flex-shrink-0">
                <img
                  src="https://horizons-cdn.hostinger.com/77c982cb-193a-488c-831b-d9b10bc00be7/83b83fedb662a97e7ec1b9454ffa9df9.jpg"
                  alt="Lam Yên Dưỡng Sinh Logo"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
              {/* Text part of the logo */}
              <span className="text-2xl font-bold text-white tracking-wide font-serif">Lam Yên</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-xs">
              Nơi tìm về sự bình yên, thư giãn và chăm sóc bản thân trọn vẹn giữa lòng thành phố.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:contact@lamyen.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Liên kết nhanh</h3>
            <ul className="space-y-4">
              {content.quickLinks.map((link, index) => {
                const sectionIds = ['home', 'mission', 'services', 'booking'];
                return (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(sectionIds[index])}
                      className="text-stone-400 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-stone-600 rounded-full group-hover:bg-teal-400 transition-colors" />
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Thông tin liên hệ</h3>
            <div className="space-y-4 text-stone-400">
              <p className="flex items-start gap-3">
                <span className="text-teal-500 font-bold min-w-[80px]">Địa chỉ:</span>
                <span>{content.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-teal-500 font-bold min-w-[80px]">Hotline:</span>
                <span>{content.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-teal-500 font-bold min-w-[80px]">Email:</span>
                <span>{content.email}</span>
              </p>
              <div className="mt-6 pt-6 border-t border-stone-800">
                <p className="text-sm text-stone-500">Giờ mở cửa:</p>
                <p className="text-white mt-1">{content.hours.weekday}</p>
                <p className="text-white mt-1">{content.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-stone-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Lam Yên Dưỡng Sinh. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed with <span className="text-teal-500">♥</span> for peace of mind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
