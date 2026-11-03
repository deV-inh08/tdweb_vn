export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  column: 'left' | 'right';
  iconType: string;
  details?: {
    tagline: string;
    features: string[];
    priceRange?: string;
    targetAudience?: string;
  };
}

export const servicesData: ServiceItem[] = [
  // Column 1
  {
    id: 'web4s',
    slug: 'thiet-ke-web4s',
    title: 'Thiết kế Web4s',
    badge: 'Hot',
    badgeColor: '#ff5722',
    description: '400+ Mẫu website đẹp, được thiết kế chuyên nghiệp, chuẩn SEO',
    column: 'left',
    iconType: 'web4s',
    details: {
      tagline: 'Giải pháp thiết kế website trọn gói hàng đầu Việt Nam',
      features: [
        'Kho 400+ giao diện chuẩn quốc tế, cập nhật xu hướng mới nhất',
        'Tối ưu chuẩn SEO On-page ngay từ cấu trúc code',
        'Tương thích 100% trên thiết bị di động, tablet và desktop',
        'Hệ thống quản trị trực quan, kéo thả dễ sử dụng',
        'Bảo mật SSL, tường lửa chống DDoS và sao lưu dữ liệu tự động'
      ],
      priceRange: 'Từ 9.000đ/ngày',
      targetAudience: 'Doanh nghiệp vừa và nhỏ, cá nhân kinh doanh'
    }
  },
  {
    id: 'landing-page',
    slug: 'thiet-ke-landing-page',
    title: 'Thiết Kế Landing Page',
    description: 'Với hơn 24 năm cung cấp dịch vụ lưu trữ và thiết kế website, phục vụ hàng trăm ngàn khách hàng',
    column: 'left',
    iconType: 'landing-page',
    details: {
      tagline: 'Tăng tỷ lệ chuyển đổi đơn hàng vượt trội với Landing Page tối ưu',
      features: [
        'Thiết kế giao diện thuyết phục, giữ chân khách hàng',
        'Tốc độ tải trang siêu tốc < 1 giây',
        'Tích hợp form đăng ký, cổng thanh toán và hotline tiện lợi',
        'Tối ưu tỷ lệ chuyển đổi (CRO) theo hành vi khách hàng'
      ],
      priceRange: 'Chỉ từ 1.500.000đ',
      targetAudience: 'Chiến dịch quảng cáo Google Ads, Facebook Ads, TikTok Ads'
    }
  },
  {
    id: 'brand-identity',
    slug: 'thiet-ke-nhan-dien-thuong-hieu',
    title: 'Thiết kế nhận diện thương hiệu',
    description: 'Tại Web4s, chúng tôi áp dụng quy trình chuẩn quốc tế để thiết kế bộ nhận diện thương hiệu',
    column: 'left',
    iconType: 'brand-identity',
    details: {
      tagline: 'Định hình bản sắc thương hiệu chuyên nghiệp và độc bản',
      features: [
        'Thiết kế logo sáng tạo, ý nghĩa và bảo hộ độc quyền',
        'Bộ nhận diện văn phòng: namecard, phong bì, tiêu đề thư, kẹp file',
        'Bộ nhận diện số: avatar, cover fanpage, banner website',
        'Cung cấp đầy đủ file gốc vector và cẩm nang hướng dẫn sử dụng'
      ],
      priceRange: 'Theo yêu cầu doanh nghiệp',
      targetAudience: 'Doanh nghiệp mới thành lập hoặc muốn tái định vị thương hiệu'
    }
  },
  {
    id: 'maintenance',
    slug: 'cham-soc-website',
    title: 'Dịch vụ chăm sóc Website',
    description: 'Dịch vụ chăm sóc website chuyên nghiệp, đảm bảo hoạt động ổn định, bảo mật, nâng cao trải nghiệm người dùng',
    column: 'left',
    iconType: 'maintenance',
    details: {
      tagline: 'Đội ngũ kỹ thuật túc trực 24/7 giúp website luôn vận hành trơn tru',
      features: [
        'Cập nhật nội dung, banner, chương trình khuyến mãi định kỳ',
        'Quét mã độc, vá lỗi bảo mật và sao lưu dữ liệu hàng tuần',
        'Tối ưu tốc độ tải trang và sửa các liên kết gãy',
        'Báo cáo hiệu suất truy cập và thứ hạng từ khóa mỗi tháng'
      ],
      priceRange: 'Từ 990.000đ/tháng',
      targetAudience: 'Doanh nghiệp bận rộn không có nhân sự chuyên trách website'
    }
  },

  // Column 2
  {
    id: 'seo-website',
    slug: 'thiet-ke-website-chuan-seo',
    title: 'Thiết Kế Website chuẩn seo',
    badge: 'Hot',
    badgeColor: '#ff5722',
    description: 'Thiết Kế Website chuẩn seo',
    column: 'right',
    iconType: 'seo-website',
    details: {
      tagline: 'Website chuẩn kỹ thuật SEO giúp leo top Google bền vững',
      features: [
        'Cấu trúc URL thân thiện, thẻ heading H1-H6 tối ưu tự động',
        'Tích hợp Schema.org Rich Snippets tăng tỷ lệ click tìm kiếm',
        'Tối ưu Core Web Vitals xanh điểm trên Google PageSpeed',
        'Sitemap XML và robots.txt cấu hình tự động chuẩn chỉ'
      ],
      priceRange: 'Từ 3.500.000đ',
      targetAudience: 'Doanh nghiệp muốn tiết kiệm chi phí quảng cáo dài hạn'
    }
  },
  {
    id: 'ecommerce-website',
    slug: 'thiet-ke-website-ban-hang',
    title: 'Thiết Kế Website bán hàng',
    badge: 'Hot',
    badgeColor: '#ff5722',
    description: 'Thiết kế website bán hàng online Giải pháp gia tăng doanh thu gấp 3 lần',
    column: 'right',
    iconType: 'ecommerce-website',
    details: {
      tagline: 'Giải pháp bán hàng trực tuyến toàn diện, bùng nổ doanh số',
      features: [
        'Quản lý sản phẩm, kho hàng, biến thể màu sắc/kích thước đa dạng',
        'Tích hợp cổng thanh toán VNPAY, MoMo, ZaloPay, thẻ Visa/Master',
        'Đồng bộ đơn vị vận chuyển Viettel Post, GHN, GHTK tính phí tự động',
        'Hệ thống coupon giảm giá, flash sale và tích điểm thành viên'
      ],
      priceRange: 'Từ 4.900.000đ',
      targetAudience: 'Cửa hàng bán lẻ, shop online, chuỗi phân phối sản phẩm'
    }
  },
  {
    id: 'all-in-one-website',
    slug: 'thiet-ke-website-tron-goi',
    title: 'Thiết Kế Website Trọn Gói',
    description: 'Thiết kế Website Trọn Gói chuẩn SEO theo yêu cầu',
    column: 'right',
    iconType: 'all-in-one',
    details: {
      tagline: 'Tất cả trong một: Miễn phí Tên miền + Hosting + Thiết kế giao diện',
      features: [
        'Tặng kèm tên miền quốc tế .com / .net 1 năm',
        'Tặng kèm Hosting SSD tốc độ cao băng thông không giới hạn',
        'Tặng chứng chỉ bảo mật SSL Let’s Encrypt miễn phí trọn đời',
        'Hỗ trợ nhập liệu 30 sản phẩm / bài viết ban đầu'
      ],
      priceRange: 'Trọn gói từ 5.500.000đ',
      targetAudience: 'Khách hàng muốn làm web nhanh chóng không phát sinh phụ phí'
    }
  },
  {
    id: 'real-estate-website',
    slug: 'thiet-ke-website-bat-dong-san',
    title: 'Thiết Kế Website Bất Động Sản',
    description: 'Thiết kế Website Bất Động Sản tại Web4s Uy tín, chuyên nghiệp',
    column: 'right',
    iconType: 'real-estate',
    details: {
      tagline: 'Giao diện đẳng cấp dành riêng cho sàn BĐS, môi giới và dự án',
      features: [
        'Bộ lọc tìm kiếm dự án theo vị trí, mức giá, diện tích, phân khúc',
        'Tích hợp bản đồ quy hoạch, tiện ích xung quanh dự án',
        'Trình xem 360 độ / video flycam dự án trực quan',
        'Form nhận bảng giá, tài liệu mặt bằng tự động gửi về Email/Zalo'
      ],
      priceRange: 'Từ 6.000.000đ',
      targetAudience: 'Sàn giao dịch BĐS, chủ đầu tư, chuyên viên tư vấn BĐS'
    }
  }
];
