
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BookingSection = ({ content }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🎉 Đã nhận thông tin!",
      description: "Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ xác nhận sớm nhất!",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="booking" 
      className="py-24 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://horizons-cdn.hostinger.com/77c982cb-193a-488c-831b-d9b10bc00be7/023190dd3b6fb2d4e33258853b25dee3.png')`
      }}
    >
      {/* Dark Teal Overlay to ensure white text pops and form stands out */}
      <div className="absolute inset-0 bg-teal-900/80 backdrop-blur-[2px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            {content.title}
          </h2>
          <p className="text-xl text-teal-100">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-stone-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                  <User className="inline mr-2 text-teal-600" size={18} />
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-stone-50"
                  placeholder="Nguyễn Thị A"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                  <Phone className="inline mr-2 text-teal-600" size={18} />
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-stone-50"
                  placeholder="090 123 4567"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-stone-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                  <Calendar className="inline mr-2 text-teal-600" size={18} />
                  Ngày đặt
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-stone-50"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                  <Clock className="inline mr-2 text-teal-600" size={18} />
                  Giờ hẹn
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-stone-50"
                  required
                >
                  <option value="">Chọn giờ</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                Dịch vụ quan tâm
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-stone-50"
                required
              >
                <option value="">Chọn dịch vụ</option>
                <option value="goi-dau">Gội đầu dưỡng sinh (199k)</option>
                <option value="nail-care">Chăm sóc móng (299k)</option>
                <option value="combo">Combo Dưỡng sinh & Nail (499k)</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                <FileText className="inline mr-2 text-teal-600" size={18} />
                Ghi chú thêm
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-stone-50 h-24 resize-none"
                placeholder="Bạn có yêu cầu đặc biệt nào không?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-4 rounded-full text-lg font-semibold hover:bg-teal-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 shadow-teal-900/20"
            >
              Xác nhận đặt lịch
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
