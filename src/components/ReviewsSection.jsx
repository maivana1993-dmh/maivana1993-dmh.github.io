
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = ({ content }) => {
  const reviews = content?.items || [
    {
      name: "Minh Anh",
      role: "Nhân viên văn phòng",
      comment: "Dịch vụ tuyệt vời! Sau khi gội đầu dưỡng sinh ở đây mình thấy nhẹ đầu hẳn, ngủ ngon hơn. Kỹ thuật viên tay nghề rất tốt.",
      rating: 5,
      avatar: 10
    },
    {
      name: "Thanh Hằng",
      role: "Kinh doanh tự do",
      comment: "Nail làm rất kỹ và đẹp. Mình thích nhất là không gian yên tĩnh, mùi tinh dầu sả chanh rất thư giãn. Sẽ quay lại dài dài.",
      rating: 5,
      avatar: 25
    },
    {
      name: "Ngọc Lan",
      role: "Giáo viên",
      comment: "Combo 499k quá hời cho 90 phút thư giãn. Vừa được gội đầu, vừa được làm nail cơ bản. Nhân viên nhiệt tình, dễ thương.",
      rating: 5,
      avatar: 32
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Đánh giá</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-serif">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-stone-600">
            Niềm tin của bạn là động lực để Lam Yên hoàn thiện mỗi ngày
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg relative border border-stone-100"
            >
              <Quote className="absolute top-6 right-6 text-teal-100 w-12 h-12" />
              
              <div className="flex items-center gap-1 mb-6 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-current w-5 h-5" />
                ))}
              </div>

              <p className="text-stone-600 mb-6 italic relative z-10 leading-relaxed">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${review.avatar}`} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">{review.name}</h4>
                  <p className="text-sm text-stone-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
