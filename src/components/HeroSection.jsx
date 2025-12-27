
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const HeroSection = ({ content }) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReviews = () => {
    const element = document.getElementById('reviews');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('https://horizons-cdn.hostinger.com/77c982cb-193a-488c-831b-d9b10bc00be7/829085d77002dae31751218203d59a67.png')`
      }}
    >
      {/* Dark overlay for text readability against the spa image */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-teal-50/10 backdrop-blur-sm border border-teal-200/20 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-bold text-teal-50 uppercase tracking-wider">Spa Dưỡng Sinh & Nail Art</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] font-serif drop-shadow-xl">
              {content.title}
            </h1>
            
            <p className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed max-w-lg drop-shadow-md font-light">
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg border-2 border-transparent"
              >
                {content.ctaText}
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full text-lg font-medium text-white border-2 border-white/60 hover:bg-white hover:text-teal-900 transition-all duration-300 backdrop-blur-sm"
              >
                Xem dịch vụ
              </button>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Product Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://horizons-cdn.hostinger.com/77c982cb-193a-488c-831b-d9b10bc00be7/32ba4294630addbe22c7cd0e2a2e895c.png" 
                alt="Spa products and relaxation" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Review Card */}
            <motion.button
              onClick={scrollToReviews}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -left-12 bg-white p-5 rounded-2xl shadow-xl max-w-xs cursor-pointer text-left group z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-800">
                    +1k
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-800 text-lg group-hover:text-teal-700 transition-colors">1000+ Khách</span>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-1 font-medium">Tin tưởng & Hài lòng</p>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
