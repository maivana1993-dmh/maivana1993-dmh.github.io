
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-serif">
            {content.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                <MapPin className="text-teal-700" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 text-lg mb-2">Địa chỉ</h3>
                <p className="text-stone-600 text-lg leading-relaxed">{content.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                <Phone className="text-teal-700" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 text-lg mb-2">Số điện thoại</h3>
                <p className="text-stone-600 text-lg">{content.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                <Mail className="text-teal-700" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 text-lg mb-2">Email</h3>
                <p className="text-stone-600 text-lg">{content.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                <Clock className="text-teal-700" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 text-lg mb-2">Giờ mở cửa</h3>
                <p className="text-stone-600">{content.hours.weekday}</p>
                <p className="text-stone-600">{content.hours.weekend}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.6900,10.7600,106.7100,10.7800&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Lam Yên Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
