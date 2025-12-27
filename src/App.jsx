
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [content, setContent] = useState(() => {
    // Clear old pet data if exists to ensure new content loads
    const saved = localStorage.getItem('lamYenContent_v5'); // Update key to force refresh
    return saved ? JSON.parse(saved) : {
      hero: {
        title: 'Lam Yên Dưỡng Sinh',
        subtitle: 'Tìm về sự bình yên trong tâm hồn và thư giãn cơ thể với liệu pháp gội đầu dưỡng sinh & chăm sóc móng chuyên nghiệp.',
        ctaText: 'Đặt lịch ngay'
      },
      mission: {
        title: 'Về Lam Yên',
        description: 'Lam Yên Dưỡng Sinh ra đời với mong muốn mang lại một không gian tĩnh lặng, nơi bạn có thể gác lại những bộn bề lo toan để chăm sóc bản thân một cách trọn vẹn nhất.',
        features: [
          {
            title: 'Thư giãn tuyệt đối',
            description: 'Không gian được thiết kế tinh tế với hương thảo mộc dịu nhẹ và âm nhạc thiền định, giúp đánh thức mọi giác quan và xoa dịu tinh thần.'
          },
          {
            title: 'Liệu pháp chuyên sâu',
            description: 'Kỹ thuật massage ấn huyệt cổ truyền kết hợp với các phương pháp chăm sóc hiện đại giúp đả thông kinh lạc, giảm đau mỏi vai gáy hiệu quả.'
          },
          {
            title: 'Sản phẩm tự nhiên',
            description: 'Chúng tôi cam kết sử dụng 100% thảo dược thiên nhiên, an toàn, lành tính, giúp nuôi dưỡng mái tóc và làn da từ sâu bên trong.'
          }
        ]
      },
      services: {
        title: 'Dịch vụ của chúng tôi',
        description: 'Trải nghiệm quy trình chăm sóc sức khỏe và sắc đẹp toàn diện',
        items: [
          {
            title: 'Gội đầu dưỡng sinh',
            price: 'Chỉ từ 199k',
            features: [
              'Khai huyệt vùng đầu',
              'Gội thảo dược thiên nhiên',
              'Massage cổ vai gáy chuyên sâu',
              'Xông hơi mắt thảo dược',
              'Sấy tóc & Xịt dưỡng',
              'Trà thảo mộc & Bánh ngọt'
            ]
          },
          {
            title: 'Chăm sóc móng',
            price: 'Chỉ từ 299k',
            features: [
              'Cắt da tay/chân chi tiết',
              'Sơn gel cao cấp Hàn Quốc',
              'Massage tay/chân thư giãn',
              'Chà gót chân hồng hào',
              'Dưỡng móng vitamin E',
              'Thiết kế mẫu theo yêu cầu'
            ]
          },
          {
            title: 'Combo Dưỡng Sinh & Nail',
            price: 'Chỉ từ 499k',
            features: [
              'Gội đầu dưỡng sinh 60 phút',
              'Cắt da & Sơn gel trơn',
              'Massage tay chân 20 phút',
              'Đắp mặt nạ thiên nhiên',
              'Ngâm chân thảo dược',
              'Tiết kiệm 20% so với giá lẻ'
            ]
          }
        ]
      },
      contact: {
        title: 'Liên hệ với Lam Yên',
        address: '123 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP. HCM',
        phone: '090 123 4567',
        email: 'contact@lamyenduongsinh.com',
        hours: {
          weekday: 'Thứ 2 - Thứ 6: 9:00 - 21:00',
          weekend: 'Thứ 7 - Chủ nhật: 8:30 - 22:00'
        },
        quickLinks: ['Trang chủ', 'Về Lam Yên', 'Dịch vụ', 'Đặt lịch']
      },
      booking: {
        title: 'Đặt lịch hẹn',
        description: 'Để lại thông tin để Lam Yên chuẩn bị đón tiếp bạn chu đáo nhất'
      },
      reviews: {
        items: [
          {
            name: "Chị Minh Anh",
            role: "Khách hàng thân thiết",
            comment: "Kỹ thuật viên chuyên nghiệp, massage rất tay nghề. Gội đầu thảo mộc xong cảm thấy nhẹ nhõm, mọi mệt mỏi đều tan biến. Rất đáng trải nghiệm!",
            rating: 5,
            avatar: 10
          },
          {
            name: "Bạn Thu Thảo",
            role: "Khách hàng mới",
            comment: "Làm nail cực kỳ tỉ mỉ, form móng đẹp và màu sơn rất bền. Tiệm cập nhật nhiều mẫu mã trendy, không gian lại xinh xắn và thư giãn.",
            rating: 5,
            avatar: 25
          },
          {
            name: "Chị Ngọc Diệp",
            role: "Khách hàng",
            comment: "Dịch vụ tận tâm, không gian sạch sẽ và không chèo kéo khách. Cả gội đầu và làm nail đều rất ưng ý. Sẽ quay lại thường xuyên!",
            rating: 5,
            avatar: 32
          }
        ]
      }
    };
  });

  useEffect(() => {
    localStorage.setItem('lamYenContent_v5', JSON.stringify(content));
  }, [content]);

  return (
    <>
      <Helmet>
        <title>Lam Yên Dưỡng Sinh - Gội Đầu & Nail Spa</title>
        <meta name="description" content="Lam Yên Dưỡng Sinh - Nơi thư giãn tuyệt vời với dịch vụ gội đầu dưỡng sinh thảo dược và chăm sóc móng chuyên nghiệp tại TP.HCM." />
      </Helmet>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
        <Navbar />
        <HeroSection content={content.hero} setContent={setContent} />
        <MissionSection content={content.mission} setContent={setContent} />
        <ServicesSection content={content.services} setContent={setContent} />
        <ReviewsSection content={content.reviews} />
        <BookingSection content={content.booking} setContent={setContent} />
        <ContactSection content={content.contact} setContent={setContent} />
        <Footer content={content.contact} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
