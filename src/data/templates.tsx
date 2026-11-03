import type { TemplateItem } from '../types';

// Danh sĂ¡ch máº«u website hiá»ƒn thá»‹ trĂªn trang
export const TEMPLATES: TemplateItem[] = [
  {
    id: 0,
    title: "Aura Luxe Fashion",
    category: "ecommerce",
    categoryName: "Bán Hàng E-Commerce",
    url: "https://auraluxe.webcraft.vn",
    desc: "Giao diện thời trang may đo cao cấp với phễu thanh toán 1 bước, xem nhanh lookbook và tích hợp cổng thanh toán tự động.",
    pageSpeed: "99/100",
    deliveryTime: "3 ngày",
    primaryColor: "#08482D",
    bannerBg: "linear-gradient(135deg, #182a20 0%, #2f4e3c 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#fafaf7] min-h-full font-sans">
        <div className="flex justify-between items-center border-b border-[#e5e5e0] pb-3 mb-5">
          <span className="font-extrabold text-lg tracking-tight">AURA LUXE</span>
          <div className="flex gap-4 text-xs font-medium">
            <span>Bộ Sưu Tập</span><span>Áo Khoác</span><span>Phụ Kiện</span>
            <span className="text-[#08482D] font-bold">Giỏ Hàng (3)</span>
          </div>
        </div>
        <div className="bg-[#1b2d23] text-white p-7 rounded-xl mb-6 flex justify-between items-center">
          <div>
            <span className="bg-[#DAE7C7] text-[#08482D] text-[11px] font-bold px-2 py-0.5 rounded">SPRING / SUMMER 2026</span>
            <h2 className="text-2xl font-extrabold my-2">Vẻ Đẹp Tối Giản Vĩnh Cửu</h2>
            <p className="text-xs opacity-85 max-w-xs">Chất liệu lụa tơ tằm dệt thủ công và phom dáng đương đại tinh xảo.</p>
          </div>
          <button className="px-5 py-2.5 bg-[#DAE7C7] text-[#08482D] text-xs font-bold rounded-full cursor-pointer hover:opacity-90">
            Khám Phá BST &rarr;
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3.5 rounded-lg border border-[#eaeae5]">
            <div className="h-28 bg-[#e8ebe4] rounded-md mb-2.5 flex items-center justify-center text-3xl">🧥</div>
            <div className="font-bold text-sm">Wool Oversized Coat</div>
            <div className="text-[#08482D] font-extrabold text-sm mt-1">2.850.000₫</div>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-[#eaeae5]">
            <div className="h-28 bg-[#e8ebe4] rounded-md mb-2.5 flex items-center justify-center text-3xl">👜</div>
            <div className="font-bold text-sm">Leather Minimal Tote</div>
            <div className="text-[#08482D] font-extrabold text-sm mt-1">1.920.000₫</div>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-[#eaeae5]">
            <div className="h-28 bg-[#e8ebe4] rounded-md mb-2.5 flex items-center justify-center text-3xl">👞</div>
            <div className="font-bold text-sm">Classic Oxford Derby</div>
            <div className="text-[#08482D] font-extrabold text-sm mt-1">3.200.000₫</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "Nexus SaaS Cloud",
    category: "tech",
    categoryName: "Công Nghệ & SaaS",
    url: "https://nexus-cloud.webcraft.vn",
    desc: "Nền tảng quản trị và phân tích dữ liệu B2B với dashboard trực quan, bảng giá tương tác và tích hợp API mượt mà.",
    pageSpeed: "98/100",
    deliveryTime: "4 ngày",
    primaryColor: "#0284C7",
    bannerBg: "linear-gradient(135deg, #092635 0%, #1B4242 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#0f172a] text-[#f8fafc] min-h-full font-sans">
        <div className="flex justify-between items-center mb-6">
          <span className="font-extrabold text-lg text-[#38bdf8]">⚡ NEXUS.AI</span>
          <div className="flex gap-3 text-xs">
            <span className="text-slate-400">Dashboard</span><span className="text-slate-400">Pipeline</span><span className="text-[#38bdf8]">Analytics Live</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3.5 mb-5">
          <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-400">Real-time Inbound</div>
            <div className="text-2xl font-extrabold text-[#38bdf8] my-1">+148.6%</div>
            <div className="text-[11px] text-green-400">↑ Tăng trưởng tháng</div>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-400">API Latency</div>
            <div className="text-2xl font-extrabold text-slate-100 my-1">18ms</div>
            <div className="text-[11px] text-[#38bdf8]">Toàn cầu 99.99%</div>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-400">Conversion Rate</div>
            <div className="text-2xl font-extrabold text-green-400 my-1">4.82%</div>
            <div className="text-[11px] text-slate-400">+1.2% so với Q3</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Grand Horizon Real Estate",
    category: "realestate",
    categoryName: "Bất Động Sản",
    url: "https://grand-horizon.webcraft.vn",
    desc: "Trang giới thiệu dự án biệt thự nghỉ dưỡng ven biển, bản đồ vệ tinh tương tác và form đặt lịch tham quan căn mẫu.",
    pageSpeed: "96/100",
    deliveryTime: "4 ngày",
    primaryColor: "#0F766E",
    bannerBg: "linear-gradient(135deg, #112926 0%, #1F4E47 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#fafaf7] min-h-full font-sans">
        <div className="flex justify-between items-center mb-5">
          <span className="font-extrabold text-lg text-[#0F766E]">GRAND HORIZON</span>
          <span className="text-xs font-semibold text-slate-500">Phú Quốc Heritage Collection</span>
        </div>
        <div className="bg-[#112926] text-white p-7 rounded-xl mb-5">
          <span className="text-[11px] bg-[#C8DCB0] text-[#08482D] px-2 py-0.5 rounded font-bold">BIỆT THỰ ĐƠN LẬP VIEW BIỂN</span>
          <h3 className="text-xl font-extrabold my-2">The Coastal Sanctuary 08</h3>
          <p className="text-xs opacity-85">Diện tích 450m² · Bể bơi vô cực điện phân muối · Sổ hồng lâu dài.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Le Gourmet Bistro",
    category: "fb",
    categoryName: "Nhà Hàng & F&B",
    url: "https://legourmet.webcraft.vn",
    desc: "Thiết kế nhà hàng Pháp và cocktail bar với menu điện tử sống động, hình ảnh ẩm thực 4K và hệ thống đặt bàn nhanh.",
    pageSpeed: "99/100",
    deliveryTime: "3 ngày",
    primaryColor: "#B45309",
    bannerBg: "linear-gradient(135deg, #27170e 0%, #4a2d1a 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#1c1512] text-white min-h-full font-sans">
        <div className="flex justify-between items-center mb-6">
          <span className="font-extrabold text-xl font-serif text-amber-500">LE GOURMET</span>
          <button className="px-3.5 py-1.5 bg-amber-500 text-[#1c1512] rounded-full font-bold text-xs">Đặt Bàn Tối Nay</button>
        </div>
        <div className="border-l-4 border-amber-500 pl-3.5 mb-5">
          <h3 className="text-lg font-bold">Thực Đơn Mùa Thu Michelin Selected</h3>
          <p className="text-xs opacity-80 mt-1">Thịt bò Wagyu A5 nướng than hoa Binchotan cùng nấm truffle trắng Alba.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Botanica Organic Spa",
    category: "service",
    categoryName: "Dịch Vụ & Y Tế",
    url: "https://botanica.webcraft.vn",
    desc: "Thương hiệu mỹ phẩm thiên nhiên và spa trị liệu với tông màu chữa lành, câu chuyện nguồn gốc thảo mộc hữu cơ.",
    pageSpeed: "98/100",
    deliveryTime: "3 ngày",
    primaryColor: "#08482D",
    bannerBg: "linear-gradient(135deg, #1d3326 0%, #305740 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#F5F8EF] min-h-full font-sans">
        <div className="flex justify-between items-center mb-5">
          <span className="font-extrabold text-lg text-[#08482D]">BOTANICA HERBAL</span>
          <span className="text-xs bg-[#DAE7C7] text-[#08482D] px-2.5 py-1 rounded-full font-semibold">100% Organic</span>
        </div>
        <div className="bg-white border border-[#DAE7C7] rounded-xl p-5 mb-4">
          <h4 className="text-base font-bold text-[#08482D]">Liệu Trình Chữa Lành Thảo Dược Rừng Sâu</h4>
          <p className="text-xs text-slate-600 mt-1.5">Massage đá nóng Himalaya kết hợp tinh dầu sả chanh nguyên chất.</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Artisan Ceramic & Living",
    category: "ecommerce",
    categoryName: "Bán Hàng E-Commerce",
    url: "https://artisan-craft.webcraft.vn",
    desc: "Nội thất thủ công và gốm sứ mộc mạc với bố cục tạp chí nghệ thuật, câu chuyện nghệ nhân và tính năng xem 360 độ.",
    pageSpeed: "97/100",
    deliveryTime: "3 ngày",
    primaryColor: "#78350F",
    bannerBg: "linear-gradient(135deg, #2b1f1a 0%, #4d382e 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#f7f4ee] min-h-full font-sans">
        <div className="text-lg font-extrabold text-[#78350F] mb-4">ARTISAN STONEWARE</div>
        <div className="grid grid-cols-2 gap-3.5">
          <div className="bg-white p-3.5 rounded-lg">
            <div className="text-xs font-bold">Bình Gốm Men Rạn Cổ</div>
            <div className="text-[#78350F] font-extrabold text-sm mt-1">850.000₫</div>
          </div>
          <div className="bg-white p-3.5 rounded-lg">
            <div className="text-xs font-bold">Tách Trà Đất Nung</div>
            <div className="text-[#78350F] font-extrabold text-sm mt-1">320.000₫</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Nova Skill Academy",
    category: "corporate",
    categoryName: "Doanh Nghiệp & B2B",
    url: "https://nova-academy.webcraft.vn",
    desc: "Nền tảng đào tạo kỹ năng số và chứng chỉ doanh nghiệp với lộ trình học tập trực quan và đăng ký học thử tức thì.",
    pageSpeed: "99/100",
    deliveryTime: "4 ngày",
    primaryColor: "#4338CA",
    bannerBg: "linear-gradient(135deg, #1b193d 0%, #2e2a6d 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-white min-h-full font-sans">
        <div className="font-extrabold text-lg text-indigo-700 mb-3.5">NOVA ACADEMY</div>
        <div className="bg-indigo-50 rounded-xl p-4 text-indigo-950">
          <div className="text-[11px] font-bold text-indigo-700">KHÓA HỌC CHUYÊN SÂU 2026</div>
          <h4 className="text-base font-bold my-1.5">UI/UX Architecture &amp; System Design</h4>
          <div className="text-xs text-slate-600">12 Tuần Thực Chiến · Cam kết việc làm đầu ra.</div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Zenith Dental Clinic",
    category: "service",
    categoryName: "Dịch Vụ & Y Tế",
    url: "https://zenith-dental.webcraft.vn",
    desc: "Phòng khám nha khoa thẩm mỹ chuẩn quốc tế với bảng giá dịch vụ minh bạch, hồ sơ bác sĩ và form đặt lịch hẹn khám.",
    pageSpeed: "99/100",
    deliveryTime: "3 ngày",
    primaryColor: "#0D9488",
    bannerBg: "linear-gradient(135deg, #0f2e2b 0%, #17524c 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-teal-50 min-h-full font-sans">
        <div className="font-extrabold text-lg text-teal-700 mb-3.5">ZENITH DENTAL CLINIC</div>
        <div className="bg-white rounded-xl p-4 border border-teal-100">
          <div className="font-bold text-sm text-teal-900">Dán Sứ Veneer Không Mài Nhỏ</div>
          <div className="text-xs text-slate-600 mt-1">Công nghệ CAD/CAM Thụy Sĩ bảo hành 15 năm chính hãng.</div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Peak Performance Fitness",
    category: "corporate",
    categoryName: "Doanh Nghiệp & B2B",
    url: "https://peak-fitness.webcraft.vn",
    desc: "Website trung tâm thể hình cao cấp với lịch tập huấn luyện viên cá nhân, bảng tính calo và gói tập thử miễn phí 7 ngày.",
    pageSpeed: "98/100",
    deliveryTime: "3 ngày",
    primaryColor: "#DC2626",
    bannerBg: "linear-gradient(135deg, #2b1111 0%, #4d1c1c 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-zinc-900 text-white min-h-full font-sans">
        <div className="font-extrabold text-lg text-red-500 mb-3.5">PEAK PERFORMANCE</div>
        <div className="bg-zinc-800 p-4 rounded-lg">
          <div className="text-sm font-bold">Đăng Ký Tập Thử 7 Ngày Miễn Phí</div>
          <div className="text-xs text-zinc-400 mt-1">Trang thiết bị chuẩn Olympic cùng HLV thể lực 1-kèm-1.</div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Apex Media Agency",
    category: "tech",
    categoryName: "Công Nghệ & SaaS",
    url: "https://apex-media.webcraft.vn",
    desc: "Creative agency & video production studio với showreel hoành tráng, case study tăng trưởng doanh thu 300%.",
    pageSpeed: "99/100",
    deliveryTime: "4 ngày",
    primaryColor: "#08482D",
    bannerBg: "linear-gradient(135deg, #101c14 0%, #1f3d2b 100%)",
    thumbnailImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&q=80",
    mockupContent: (
      <div className="p-6 bg-[#0c120e] text-white min-h-full font-sans">
        <div className="flex justify-between items-center mb-4">
          <span className="font-extrabold text-lg text-[#DAE7C7]">APEX MEDIA</span>
          <span className="text-[11px] bg-[#DAE7C7] text-[#08482D] px-2 py-0.5 rounded-full font-bold">Q4 CASE STUDIES</span>
        </div>
        <div className="border border-[#1f3d2b] p-4 rounded-xl bg-[#14221a]">
          <div className="text-[11px] text-[#DAE7C7]">TĂNG TRƯỞNG E-COMMERCE</div>
          <div className="text-base font-bold my-1.5">+320% Doanh Thu Cho Nhãn Hàng Streetwear</div>
          <div className="text-xs text-emerald-200">Phễu video ngắn Reels kết hợp Landing Page tải siêu tốc.</div>
        </div>
      </div>
    )
  }
];
