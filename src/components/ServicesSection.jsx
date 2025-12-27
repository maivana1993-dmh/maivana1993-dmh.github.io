
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServicesSection = ({ content }) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 relative bg-stone-100 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://horizons-cdn.hostinger.com/77c982cb-193a-488c-831b-d9b10bc00be7/88aabdb2242010e04a0b7846faec7c80.jpg')`
      }}
    >
      {/* Light overlay to maintain readability of content but show background texture */}
      <div className="absolute inset-0 bg-stone-100/90 backdrop-blur-[1px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Dịch vụ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-serif">
            {content.title}
          </h2>
          <p className="text-xl text-stone-600">
            {content.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className="bg-teal-700 p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-30" />
                <h3 className="text-2xl font-bold mb-2 font-serif relative z-10">{service.title}</h3>
                <p className="text-3xl font-bold text-teal-100 relative z-10">{service.price}</p>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-teal-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToBooking}
                  className="w-full bg-stone-100 text-teal-800 py-3 rounded-full font-semibold hover:bg-teal-700 hover:text-white transition-all duration-300 border border-teal-700"
                >
                  Đặt lịch ngay
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
