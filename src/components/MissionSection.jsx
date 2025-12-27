
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles } from 'lucide-react';

const MissionSection = ({ content }) => {
  const icons = [Leaf, Heart, Sparkles];

  return (
    <section id="mission" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-2 block">Sứ mệnh</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">
            {content.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {content.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-stone-50 p-10 rounded-2xl hover:bg-teal-50 transition-colors duration-300 group border border-stone-100 hover:border-teal-100"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 text-teal-600">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
