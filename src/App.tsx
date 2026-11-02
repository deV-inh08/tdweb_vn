/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  WebcraftLogoIcon,
  IconSpeedSprint,
  IconSeoGrowth,
  IconMobileTouch,
  IconShieldWarranty,
  IconStepSurvey,
  IconStepPrototype,
  IconStepCoding,
  IconStepLaunch,
  IconFreePledge,
  IconNdaLock,
  IconDirectChat,
  IconSendPaperPlane,
  IconInspectEye,
  IconStudioCheck,
  IconAnimatedCheck
} from './components/CustomIcons.tsx';

// Data model for sample website templates
interface TemplateItem {
  id: number;
  title: string;
  category: 'ecommerce' | 'corporate' | 'tech' | 'fb' | 'realestate' | 'service';
  categoryName: string;
  url: string;
  desc: string;
  pageSpeed: string;
  deliveryTime: string;
  primaryColor: string;
  bannerBg: string;
  thumbnailImage: string;
  mockupContent: React.ReactNode;
}

const TEMPLATES: TemplateItem[] = [
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

export default function App() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<TemplateItem | null>(null);
  const [selectedTemplateName, setSelectedTemplateName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  // Form State
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientIndustry, setClientIndustry] = useState<string>('Bán lẻ / Thời trang / Mỹ phẩm');
  const [clientBudget, setClientBudget] = useState<string>('5 - 10 triệu (Doanh nghiệp chuẩn SEO)');
  const [clientNotes, setClientNotes] = useState<string>('');

  const trackRef = useRef<HTMLDivElement>(null);

  // =========================================================================
  // INTERSECTION OBSERVER EFFECT FOR SCROLL REVEAL (Section 2, 3, 4, 5)
  // =========================================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [categoryFilter]);

  // =========================================================================
  // PARALLAX SCROLL EFFECT FOR SHOWCASE GALLERY PROJECT IMAGES
  // =========================================================================
  useEffect(() => {
    let ticking = false;

    const handleParallaxScroll = () => {
      const cards = document.querySelectorAll<HTMLElement>('[data-parallax-card]');
      if (!cards.length) return;

      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Check if card is visible or entering viewport
        if (rect.bottom >= -60 && rect.top <= windowHeight + 60) {
          const cardCenterY = rect.top + rect.height / 2;
          const viewportCenterY = windowHeight / 2;
          // Normalised distance delta (-1 to 1)
          const delta = (cardCenterY - viewportCenterY) / windowHeight;
          // Subtle parallax shift between -28px and +28px
          const shift = Math.max(-28, Math.min(28, delta * 34));

          const img = card.querySelector<HTMLElement>('.parallax-card-img');
          if (img) {
            img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.08)`;
          }
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleParallaxScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleParallaxScroll(); // Initial position calculation

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [categoryFilter]);

  // =========================================================================
  // 3D CYLINDER CAROUSEL RENDER LOOP
  // =========================================================================
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardsElements: {
      el: HTMLDivElement;
      index: number;
    }[] = [];

    const NUM_CARDS = 10;
    const PITCH = 196;
    const TRACK_LENGTH = NUM_CARDS * PITCH;
    const AUTO_SPEED = 48;

    track.innerHTML = '';

    for (let i = 0; i < NUM_CARDS; i++) {
      const tData = TEMPLATES[i];
      const card = document.createElement('div');
      card.className = 'video-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Xem mẫu: ${tData.title}`);

      const inner = document.createElement('div');
      inner.className = 'video-card-inner';

      // Mini browser top bar
      const browserBar = document.createElement('div');
      browserBar.className = 'card-browser-header';
      browserBar.innerHTML = `
        <span class="browser-dot dot-red"></span>
        <span class="browser-dot dot-yellow"></span>
        <span class="browser-dot dot-green"></span>
        <span class="browser-url">${tData.url.replace('https://', '')}</span>
      `;
      inner.appendChild(browserBar);

      // Card Body Mockup Preview with High-Res Imagery
      const bodyWrap = document.createElement('div');
      bodyWrap.className = 'card-mockup-body';
      bodyWrap.style.backgroundImage = `linear-gradient(to top, rgba(8, 72, 45, 0.95) 0%, rgba(8, 72, 45, 0.42) 55%, rgba(0, 0, 0, 0.2) 100%), url(${tData.thumbnailImage})`;
      bodyWrap.style.backgroundSize = 'cover';
      bodyWrap.style.backgroundPosition = 'center';

      // Info Overlay
      const overlay = document.createElement('div');
      overlay.className = 'card-info-overlay';
      overlay.innerHTML = `
        <span class="card-tag">${tData.categoryName}</span>
        <div class="card-title-text">${tData.title}</div>
        <div class="card-desc-text">${tData.desc}</div>
      `;
      bodyWrap.appendChild(overlay);

      // Frosted Inspect Icon
      const inspectIcon = document.createElement('div');
      inspectIcon.className = 'card-play-icon';
      inspectIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
      `;
      bodyWrap.appendChild(inspectIcon);

      inner.appendChild(bodyWrap);
      card.appendChild(inner);
      track.appendChild(card);

      card.addEventListener('click', () => {
        if (hasDraggedFarRef.current) return;
        setActiveModalItem(tData);
      });

      cardsElements.push({ el: card, index: i });
    }

    let scrollPos = 0;
    let velocity = 0;
    let isDragging = false;
    let startPointerX = 0;
    let startScrollPos = 0;
    let lastPointerX = 0;
    let lastPointerTime = performance.now();
    let currentDragVelocity = 0;
    const hasDraggedFarRef = { current: false };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      hasDraggedFarRef.current = false;
      track.classList.add('is-dragging');
      track.setPointerCapture(e.pointerId);

      startPointerX = e.clientX;
      lastPointerX = e.clientX;
      startScrollPos = scrollPos;
      lastPointerTime = performance.now();
      currentDragVelocity = 0;
      velocity = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const u = window.innerWidth <= 820 ? window.innerWidth / 640 : Math.min(window.innerWidth / 1440, window.innerHeight / 1080);
      const dx = e.clientX - startPointerX;
      if (Math.abs(dx) > 6) {
        hasDraggedFarRef.current = true;
      }

      scrollPos = startScrollPos - (dx / u);

      const now = performance.now();
      const dt = (now - lastPointerTime) / 1000;
      if (dt > 0.005) {
        const stepDx = e.clientX - lastPointerX;
        currentDragVelocity = -(stepDx / u) / dt;
        lastPointerX = e.clientX;
        lastPointerTime = now;
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('is-dragging');
      try {
        track.releasePointerCapture(e.pointerId);
      } catch (err) {}

      velocity = currentDragVelocity;
      if (Math.abs(velocity) > 1600) {
        velocity = Math.sign(velocity) * 1600;
      }
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);

    function computeRoundedQuadPath(w: number, yTL: number, yTR: number, yBR: number, yBL: number, r: number) {
      const L_top = Math.hypot(w, yTR - yTL);
      const ux_top = w / L_top;
      const uy_top = (yTR - yTL) / L_top;

      const L_bot = Math.hypot(w, yBR - yBL);
      const ux_bot = w / L_bot;
      const uy_bot = (yBR - yBL) / L_bot;

      const r_actual = Math.min(r, (yBL - yTL) / 2.2, (yBR - yTR) / 2.2, w / 2.2);

      const pTL_in = [0, yTL + r_actual];
      const pTL_out = [r_actual * ux_top, yTL + r_actual * uy_top];

      const pTR_in = [w - r_actual * ux_top, yTR - r_actual * uy_top];
      const pTR_out = [w, yTR + r_actual];

      const pBR_in = [w, yBR - r_actual];
      const pBR_out = [w - r_actual * ux_bot, yBR - r_actual * uy_bot];

      const pBL_in = [r_actual * ux_bot, yBL + r_actual * uy_bot];
      const pBL_out = [0, yBL - r_actual];

      return `M ${pTL_out[0].toFixed(1)} ${pTL_out[1].toFixed(1)} ` +
             `L ${pTR_in[0].toFixed(1)} ${pTR_in[1].toFixed(1)} ` +
             `Q ${w.toFixed(1)} ${yTR.toFixed(1)} ${pTR_out[0].toFixed(1)} ${pTR_out[1].toFixed(1)} ` +
             `L ${pBR_in[0].toFixed(1)} ${pBR_in[1].toFixed(1)} ` +
             `Q ${w.toFixed(1)} ${yBR.toFixed(1)} ${pBR_out[0].toFixed(1)} ${pBR_out[1].toFixed(1)} ` +
             `L ${pBL_in[0].toFixed(1)} ${pBL_in[1].toFixed(1)} ` +
             `Q 0 ${yBL.toFixed(1)} ${pBL_out[0].toFixed(1)} ${pBL_out[1].toFixed(1)} ` +
             `L ${pTL_in[0].toFixed(1)} ${pTL_in[1].toFixed(1)} ` +
             `Q 0 ${yTL.toFixed(1)} ${pTL_out[0].toFixed(1)} ${pTL_out[1].toFixed(1)} Z`;
    }

    let animationFrameId: number;
    let lastTimestamp = performance.now();

    function tick() {
      const now = performance.now();
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      if (!isDragging) {
        velocity *= Math.pow(0.05, dt);
        if (Math.abs(velocity) < 0.2) velocity = 0;
        scrollPos += (AUTO_SPEED + velocity) * dt;
      }

      scrollPos = ((scrollPos % TRACK_LENGTH) + TRACK_LENGTH) % TRACK_LENGTH;

      const isMobile = window.innerWidth <= 820;
      const u = isMobile ? window.innerWidth / 640 : Math.min(window.innerWidth / 1440, window.innerHeight / 1080);

      const centerScreenX = isMobile ? (window.innerWidth / 2 / u) : 720;
      const centerYOffset = isMobile ? (125 / u) : 687;
      const radiusScale = isMobile ? 0.68 : 1.0;

      for (let i = 0; i < NUM_CARDS; i++) {
        const cardObj = cardsElements[i];

        let t = (i * PITCH - scrollPos);
        t = ((t % TRACK_LENGTH) + TRACK_LENGTH) % TRACK_LENGTH;
        if (t > TRACK_LENGTH / 2) t -= TRACK_LENGTH;

        const tRatio = t / 706;
        const x = centerScreenX + t * (1 + 0.083 * (tRatio * tRatio));
        const d = Math.abs(x - centerScreenX) / 706;

        const W_base = (170 + 48 * d * d) * radiusScale;
        const xLeft = x - W_base / 2;
        const xRight = x + W_base / 2;

        const qLeft = Math.abs(xLeft - centerScreenX) / 706;
        const qRight = Math.abs(xRight - centerScreenX) / 706;

        const H_left_base = (280 + 92 * Math.pow(qLeft, 2.6)) * radiusScale;
        const H_right_base = (280 + 92 * Math.pow(qRight, 2.6)) * radiusScale;

        const yCenter_base = centerYOffset - (12 * d * d * radiusScale);

        const screenLimit = isMobile ? (window.innerWidth / u + 150) : 1550;
        if (xRight < -120 || xLeft > screenLimit) {
          cardObj.el.style.display = 'none';
          continue;
        }
        cardObj.el.style.display = 'block';

        const topL = yCenter_base - H_left_base / 2;
        const botL = yCenter_base + H_left_base / 2;
        const topR = yCenter_base - H_right_base / 2;
        const botR = yCenter_base + H_right_base / 2;

        const cardTop = Math.min(topL, topR);
        const cardBot = Math.max(botL, botR);
        const cardHeight = cardBot - cardTop;

        const leftPx = xLeft * u;
        const topPx = cardTop * u;
        const widthPx = W_base * u;
        const heightPx = cardHeight * u;

        cardObj.el.style.left = `${leftPx.toFixed(1)}px`;
        cardObj.el.style.top = `${topPx.toFixed(1)}px`;
        cardObj.el.style.width = `${widthPx.toFixed(1)}px`;
        cardObj.el.style.height = `${heightPx.toFixed(1)}px`;

        const yTL_px = (topL - cardTop) * u;
        const yBL_px = (botL - cardTop) * u;
        const yTR_px = (topR - cardTop) * u;
        const yBR_px = (botR - cardTop) * u;
        const cornerRadiusPx = 15 * u * radiusScale;

        const pathData = computeRoundedQuadPath(widthPx, yTL_px, yTR_px, yBR_px, yBL_px, cornerRadiusPx);
        cardObj.el.style.clipPath = `path('${pathData}')`;
        cardObj.el.style.setProperty('-webkit-clip-path', `path('${pathData}')`);
      }

      animationFrameId = requestAnimationFrame(tick);
    }

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  // Handlers for picking templates & scrolling
  const handleSelectTemplate = (templateName: string) => {
    setSelectedTemplateName(templateName);
    const formElem = document.getElementById('consultation');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planTitle: string) => {
    setClientNotes(`Tôi quan tâm đến gói dịch vụ: ${planTitle}`);
    const formElem = document.getElementById('consultation');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = {
      id: 'WC-' + Math.floor(1000 + Math.random() * 9000),
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      industry: clientIndustry,
      template: selectedTemplateName || 'Tư vấn theo phong cách riêng',
      budget: clientBudget,
      notes: clientNotes,
      timestamp: new Date().toISOString()
    };

    try {
      const list = JSON.parse(localStorage.getItem('webcraft_leads') || '[]');
      list.unshift(submission);
      localStorage.setItem('webcraft_leads', JSON.stringify(list));
    } catch (err) {}

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowToast(true);
      // Reset form
      setClientName('');
      setClientPhone('');
      setClientEmail('');
      setClientNotes('');
      setSelectedTemplateName('');

      // Temporarily show success on button for 3.5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 3500);

      setTimeout(() => {
        setShowToast(false);
      }, 4500);
    }, 600);
  };

  // Close modal on Escape key & lock scroll when active
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalItem]);

  const filteredTemplates = categoryFilter === 'all' 
    ? TEMPLATES 
    : TEMPLATES.filter((t) => t.category === categoryFilter);

  return (
    <div className="min-h-screen bg-[#F5F8EF] text-[#101410] font-sans">
      {/* =====================================================================
          SECTION 1: HERO VIEWPORT (Desktop 1440x1080 Scaled + Mobile Responsive)
          ===================================================================== */}
      <div className="hero-viewport-container" id="hero">
        <main id="hero-viewport">
          {/* Top Logo */}
          <a href="#hero" className="absolute left-[calc(37*var(--u))] top-[calc(36*var(--u))] flex items-center gap-[calc(9*var(--u))] text-[#08482D] z-25 max-md:relative max-md:left-auto max-md:top-auto max-md:mb-5 group">
            <WebcraftLogoIcon className="w-[calc(30*var(--u))] h-[calc(30*var(--u))] max-md:w-8 max-md:h-8 group-hover:scale-105 transition-transform" />
            <span className="font-['Inter_Tight'] font-bold text-[calc(22*var(--u))] max-md:text-2xl text-[#08482D] tracking-tight">CNS Dung Trọng</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="absolute left-[calc(440*var(--u))] top-[calc(38*var(--u))] flex items-center gap-[calc(28*var(--u))] z-25 max-md:hidden">
            <a href="#showcase" className="font-medium text-[calc(15.5*var(--u))] text-[#101410] hover:text-[#08482D] transition-colors">Dự Án Mẫu</a>
            <a href="#features" className="font-medium text-[calc(15.5*var(--u))] text-[#101410] hover:text-[#08482D] transition-colors">Ưu Điểm</a>
            <a href="#process" className="font-medium text-[calc(15.5*var(--u))] text-[#101410] hover:text-[#08482D] transition-colors">Quy Trình</a>
            <a href="#pricing" className="font-medium text-[calc(15.5*var(--u))] text-[#101410] hover:text-[#08482D] transition-colors">Báo Giá</a>
            <a href="#consultation" className="font-medium text-[calc(15.5*var(--u))] text-[#101410] hover:text-[#08482D] transition-colors">Tư Vấn Miễn Phí</a>
          </nav>

          {/* Top Actions: Hotline + Fast CTA */}
          <div className="absolute right-[calc(37*var(--u))] top-[calc(29*var(--u))] flex items-center gap-[calc(12*var(--u))] z-25 max-md:right-5 max-md:top-5">
            <a href="tel:0832555500" className="hidden lg:flex items-center gap-[calc(7*var(--u))] px-[calc(14*var(--u))] py-[calc(8*var(--u))] bg-white/75 border border-[#08482D]/15 rounded-full text-[calc(13.5*var(--u))] font-medium text-[#08482D] hover:bg-white transition-all">
              <IconDirectChat className="w-4 h-4 text-[#08482D]" />
              <span>Hotline: 0832.555.500</span>
            </a>
            <a href="#consultation" className="h-[calc(40*var(--u))] max-md:h-10 px-[calc(20*var(--u))] max-md:px-4 bg-[#08482D] text-white rounded-full font-medium text-[calc(14.5*var(--u))] max-md:text-xs flex items-center gap-1.5 hover:bg-[#0b5938] transition-all shadow-md">
              <span>Nhận Tư Vấn</span>
              <IconSendPaperPlane className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Mint Pill Badge */}
          <div className="absolute left-[calc(490*var(--u))] top-[calc(115*var(--u))] w-[calc(460*var(--u))] h-[calc(37*var(--u))] max-md:relative max-md:left-auto max-md:top-auto max-md:w-auto max-md:px-4 max-md:py-2 bg-[#DAE7C7] text-[#08482D] rounded-full font-semibold text-[calc(15.5*var(--u))] max-md:text-xs flex items-center justify-center gap-2 text-center z-10 max-md:mb-4 shadow-xs">
            <WebcraftLogoIcon className="w-4 h-4 text-[#08482D]" />
            <span>50+ Mẫu Website Chuẩn SEO &amp; Tối Ưu Doanh Thu</span>
          </div>

          {/* Headline */}
          <div className="absolute left-0 w-full top-[calc(172*var(--u))] text-center pointer-events-none z-10 max-md:relative max-md:top-auto max-md:mb-3">
            <h1 className="font-['Inter_Tight'] font-bold text-[calc(64*var(--u))] max-md:text-3xl leading-[calc(74*var(--u))] max-md:leading-tight text-[#101410] tracking-[-0.03em]">
              Khám Phá Mẫu Website Đẳng Cấp
            </h1>
            <h1 className="font-['Inter_Tight'] font-bold text-[calc(64*var(--u))] max-md:text-3xl leading-[calc(74*var(--u))] max-md:leading-tight text-[#101410] tracking-[-0.02em]">
              Bứt Phá Doanh Thu Thương Hiệu
            </h1>
          </div>

          {/* Subline */}
          <p className="absolute left-0 w-full top-[calc(346*var(--u))] font-normal text-[calc(18.5*var(--u))] max-md:text-sm leading-[calc(29*var(--u))] max-md:leading-relaxed text-[#5E5E61] text-center pointer-events-none z-10 max-md:relative max-md:top-auto max-md:max-w-md max-md:mb-5">
            Trải nghiệm bộ sưu tập website mẫu hiện đại được tối ưu hóa cho từng ngành nghề.<br className="max-md:hidden" />
            Chọn mẫu ưng ý hoặc điền thông tin để chuyên gia tư vấn giải pháp đo ni đóng giày cho bạn.
          </p>

          {/* Doodle Slashes */}
          <svg className="absolute left-[calc(215*var(--u))] top-[calc(342*var(--u))] w-[calc(42*var(--u))] h-[calc(42*var(--u))] pointer-events-none z-15 max-md:hidden" viewBox="0 0 44 44" fill="none">
            <path d="M10 38 L22 6" stroke="#08482D" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M22 38 L34 6" stroke="#08482D" strokeWidth="3.2" strokeLinecap="round" />
          </svg>

          {/* Handwritten Note (Top Right) */}
          <div className="absolute left-[calc(1235*var(--u))] top-[calc(332*var(--u))] pointer-events-none z-15 max-md:hidden">
            <div className="font-['Caveat'] font-semibold text-[calc(25*var(--u))] leading-[calc(26*var(--u))] text-[#08482D] rotate-12 origin-top-left whitespace-nowrap">
              Kéo để xem<br />chọn mẫu ngay
            </div>
          </div>
          <svg className="absolute left-[calc(1175*var(--u))] top-[calc(392*var(--u))] w-[calc(130*var(--u))] h-[calc(120*var(--u))] pointer-events-none overflow-visible z-15 max-md:hidden" viewBox="0 0 140 140" fill="none">
            <path d="M96 14 C104 55, 78 98, 28 128" stroke="#08482D" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M22 112 L28 128 L44 122" stroke="#08482D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* 3D Cylinder Carousel Track */}
          <div className="mobile-cards-band" id="cards-wrapper">
            <div id="cards-track" ref={trackRef} role="region" aria-label="Băng chuyền website mẫu 3D">
              {/* Cards mounted by useEffect */}
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="absolute left-[calc(610*var(--u))] top-[calc(901*var(--u))] w-[calc(220*var(--u))] h-[calc(74*var(--u))] flex items-center justify-center z-20 max-md:relative max-md:left-auto max-md:top-auto max-md:w-auto max-md:mt-4">
            <div className="button-ring" aria-hidden="true"></div>
            <a href="#consultation" className="main-cta-button" id="btn-make-reel">
              Nhận Tư Vấn Miễn Phí
            </a>
          </div>

          {/* Handwritten Note (Zero Cost) */}
          <div className="absolute left-[calc(410*var(--u))] top-[calc(918*var(--u))] pointer-events-none z-15 max-md:relative max-md:left-auto max-md:top-auto max-md:mt-3">
            <span className="font-['Caveat'] font-semibold text-[calc(25*var(--u))] max-md:text-xl text-[#08482D] -rotate-8 inline-block whitespace-nowrap">
              Zero cost · Báo giá 30p
            </span>
          </div>
          <svg className="absolute left-[calc(548*var(--u))] top-[calc(942*var(--u))] w-[calc(54*var(--u))] h-[calc(32*var(--u))] pointer-events-none overflow-visible z-15 max-md:hidden" viewBox="0 0 64 36" fill="none">
            <path d="M8 26 C24 30, 44 24, 56 12" stroke="#08482D" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M42 10 L56 12 L52 24" stroke="#08482D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </main>
      </div>

      {/* =====================================================================
          SECTION 2: SHOWCASE GALLERY (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-6 py-20" id="showcase">
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[#DAE7C7] text-[#08482D] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
            Bộ Sưu Tập Đa Ngành
          </span>
          <h2 className="font-['Inter_Tight'] text-3xl md:text-4xl font-bold tracking-tight text-[#101410] mb-3">
            Thư Viện Mẫu Website Được Ưa Chuộng Nhất
          </h2>
          <p className="text-base text-[#5E5E61] max-w-2xl mx-auto">
            Tất cả các mẫu đều đạt chuẩn Google PageSpeed 95+, thiết kế Responsive 100% trên điện thoại và tối ưu phễu chuyển đổi giúp bạn chốt đơn vượt trội.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-10 border-b border-[#08482D]/12 pb-4">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Tất Cả Mẫu (10)
          </button>
          <button
            onClick={() => setCategoryFilter('ecommerce')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'ecommerce'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Bán Hàng E-Commerce
          </button>
          <button
            onClick={() => setCategoryFilter('corporate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'corporate'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Doanh Nghiệp &amp; B2B
          </button>
          <button
            onClick={() => setCategoryFilter('tech')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'tech'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Công Nghệ &amp; SaaS
          </button>
          <button
            onClick={() => setCategoryFilter('fb')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'fb'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Nhà Hàng &amp; F&amp;B
          </button>
          <button
            onClick={() => setCategoryFilter('realestate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'realestate'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Bất Động Sản
          </button>
          <button
            onClick={() => setCategoryFilter('service')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              categoryFilter === 'service'
                ? 'bg-[#08482D] text-white shadow-sm'
                : 'bg-white border border-[#08482D]/15 text-[#5E5E61] hover:text-[#08482D]'
            }`}
          >
            Dịch Vụ &amp; Y Tế
          </button>
        </div>

        {/* Project Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredTemplates.map((item, idx) => (
            <div
              key={item.id}
              className={`scroll-reveal stagger-${(idx % 4) + 1} bg-white border border-[#08482D]/15 rounded-2xl overflow-hidden shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#08482D]/35 transition-all flex flex-col`}
            >
              {/* Mini Browser Bar & Parallax Banner */}
              <div
                data-parallax-card
                className="parallax-card-viewport group/thumb relative cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                {/* Browser top chrome */}
                <div className="h-6 bg-[#101612]/95 backdrop-blur-xs flex items-center px-2.5 gap-1.5 border-b border-white/10 relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                  <span className="ml-1.5 text-[9px] text-gray-300 font-mono tracking-tight truncate">
                    {item.url.replace('https://', '')}
                  </span>
                  <span className="ml-auto text-[9px] text-[#DAE7C7] font-sans font-medium opacity-85 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse"></span>
                    <span>Live 4K</span>
                  </span>
                </div>

                {/* Parallax Image Layer */}
                <img
                  src={item.thumbnailImage}
                  alt={item.title}
                  loading="lazy"
                  className="parallax-card-img"
                />

                {/* Scrim Overlay & Text */}
                <div className="parallax-card-overlay">
                  <span className="text-[10px] font-bold bg-[#DAE7C7] text-[#08482D] px-2.5 py-0.5 rounded-full self-start mb-1.5 shadow-xs uppercase tracking-wide">
                    {item.categoryName}
                  </span>
                  <h4 className="font-['Inter_Tight'] text-lg font-bold text-white flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-all transform group-hover/thumb:scale-105">
                      <IconInspectEye className="w-3.5 h-3.5 text-white" />
                    </span>
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#08482D]/10 text-[#08482D] inline-flex items-center gap-1">
                    <IconSpeedSprint className="w-3.5 h-3.5 text-[#08482D]" />
                    <span>{item.pageSpeed} Speed</span>
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#08482D]/10 text-[#08482D] inline-flex items-center gap-1">
                    <IconStepCoding className="w-3.5 h-3.5 text-[#08482D]" />
                    <span>{item.deliveryTime}</span>
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#08482D]/10 text-[#08482D] inline-flex items-center gap-1">
                    <IconMobileTouch className="w-3.5 h-3.5 text-[#08482D]" />
                    <span>Mobile 100%</span>
                  </span>
                </div>
                <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#101410] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5E5E61] mb-5 flex-1">{item.desc}</p>
                <div className="flex items-center gap-2.5 mt-auto">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="flex-1 h-10 bg-white border border-[#08482D]/20 rounded-lg text-xs font-semibold text-[#08482D] flex items-center justify-center gap-1.5 hover:bg-[#08482D]/8 hover:border-[#08482D] transition-colors cursor-pointer"
                  >
                    <IconInspectEye className="w-4 h-4 text-[#08482D]" />
                    Xem Chi Tiết
                  </button>
                  <button
                    onClick={() => handleSelectTemplate(item.title)}
                    className="flex-1 h-10 bg-[#08482D] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#0b5938] transition-colors cursor-pointer"
                  >
                    <IconStudioCheck className="w-3.5 h-3.5 text-white" />
                    Chọn Mẫu Này
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: FEATURES & PROCESS (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="bg-white border-y border-[#08482D]/12 py-20" id="features">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 bg-[#DAE7C7] text-[#08482D] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
              <WebcraftLogoIcon className="w-3.5 h-3.5 text-[#08482D]" />
              Cam Kết Chất Lượng Độc Bản
            </span>
            <h2 className="font-['Inter_Tight'] text-3xl md:text-4xl font-bold tracking-tight text-[#101410] mb-3">
              Tại Sao Nên Chọn Giải Pháp Website Tại CNS Dung Trọng?
            </h2>
            <p className="text-base text-[#5E5E61]">
              Chúng tôi không bán những giao diện có sẵn rập khuôn. Mỗi website là một công cụ kinh doanh sắc bén.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="scroll-reveal stagger-1 p-7 bg-[#F5F8EF] rounded-2xl border border-[#08482D]/12 hover:border-[#08482D]/35 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#DAE7C7] rounded-xl flex items-center justify-center mb-4 text-[#08482D] group-hover:scale-110 transition-transform">
                <IconSpeedSprint className="w-7 h-7 text-[#08482D]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold mb-2">Tốc Độ Tải Dưới 1.2 Giây</h3>
              <p className="text-sm text-[#5E5E61] leading-relaxed">Tối ưu hóa hình ảnh WebP, CDN toàn cầu và mã nguồn sạch giúp giữ chân khách hàng ngay từ giây đầu tiên.</p>
            </div>

            <div className="scroll-reveal stagger-2 p-7 bg-[#F5F8EF] rounded-2xl border border-[#08482D]/12 hover:border-[#08482D]/35 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#DAE7C7] rounded-xl flex items-center justify-center mb-4 text-[#08482D] group-hover:scale-110 transition-transform">
                <IconSeoGrowth className="w-7 h-7 text-[#08482D]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold mb-2">Chuẩn SEO On-page Google</h3>
              <p className="text-sm text-[#5E5E61] leading-relaxed">Cấu trúc schema rich snippets, sitemap tự động và thẻ OpenGraph hoàn chỉnh giúp bài viết và sản phẩm lên top nhanh.</p>
            </div>

            <div className="scroll-reveal stagger-3 p-7 bg-[#F5F8EF] rounded-2xl border border-[#08482D]/12 hover:border-[#08482D]/35 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#DAE7C7] rounded-xl flex items-center justify-center mb-4 text-[#08482D] group-hover:scale-110 transition-transform">
                <IconMobileTouch className="w-7 h-7 text-[#08482D]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold mb-2">Mobile First Tối Ưu Tỉ Lệ Chốt</h3>
              <p className="text-sm text-[#5E5E61] leading-relaxed">Nút gọi, chat Zalo, đặt hàng nhanh nổi bật ngay vị trí ngón cái, gia tăng tỷ lệ khách điền form và gọi tư vấn.</p>
            </div>

            <div className="scroll-reveal stagger-4 p-7 bg-[#F5F8EF] rounded-2xl border border-[#08482D]/12 hover:border-[#08482D]/35 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#DAE7C7] rounded-xl flex items-center justify-center mb-4 text-[#08482D] group-hover:scale-110 transition-transform">
                <IconShieldWarranty className="w-7 h-7 text-[#08482D]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold mb-2">Bảo Hành Kỹ Thuật Trọn Đời</h3>
              <p className="text-sm text-[#5E5E61] leading-relaxed">Hỗ trợ backup dữ liệu hàng tuần, phòng chống mã độc và hỗ trợ cập nhật nội dung bất cứ khi nào bạn cần.</p>
            </div>
          </div>

          {/* 4-Step Process */}
          <div id="process">
            <div className="scroll-reveal text-center max-w-xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 bg-[#DAE7C7] text-[#08482D] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
                <WebcraftLogoIcon className="w-3.5 h-3.5 text-[#08482D]" />
                Minh Bạch &amp; Nhanh Chóng
              </span>
              <h2 className="font-['Inter_Tight'] text-3xl font-bold tracking-tight text-[#101410]">
                Quy Trình Triển Khai 4 Bước Chuyên Nghiệp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="scroll-reveal stagger-1 bg-[#F5F8EF] border border-[#08482D]/12 rounded-2xl p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-['Inter_Tight'] text-4xl font-extrabold text-[#C8DCB0]">01</div>
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-xs border border-[#08482D]/10 group-hover:scale-110 transition-transform">
                    <IconStepSurvey className="w-6 h-6 text-[#08482D]" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-lg font-bold text-[#101410] mb-2">Khảo Sát &amp; Tư Vấn Miễn Phí</h4>
                <p className="text-sm text-[#5E5E61] leading-relaxed">Tiếp nhận nhu cầu, phân tích đối thủ cạnh tranh và đề xuất mẫu website cùng lộ trình chi phí tối ưu nhất.</p>
              </div>

              <div className="scroll-reveal stagger-2 bg-[#F5F8EF] border border-[#08482D]/12 rounded-2xl p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-['Inter_Tight'] text-4xl font-extrabold text-[#C8DCB0]">02</div>
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-xs border border-[#08482D]/10 group-hover:scale-110 transition-transform">
                    <IconStepPrototype className="w-6 h-6 text-[#08482D]" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-lg font-bold text-[#101410] mb-2">Thiết Kế Bản Vẽ &amp; Duyệt Mẫu</h4>
                <p className="text-sm text-[#5E5E61] leading-relaxed">Khách hàng trải nghiệm bản demo trực tiếp với màu sắc nhận diện thương hiệu, chỉnh sửa đến khi hoàn toàn hài lòng.</p>
              </div>

              <div className="scroll-reveal stagger-3 bg-[#F5F8EF] border border-[#08482D]/12 rounded-2xl p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-['Inter_Tight'] text-4xl font-extrabold text-[#C8DCB0]">03</div>
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-xs border border-[#08482D]/10 group-hover:scale-110 transition-transform">
                    <IconStepCoding className="w-6 h-6 text-[#08482D]" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-lg font-bold text-[#101410] mb-2">Lập Trình &amp; Nhập Liệu Chuẩn SEO</h4>
                <p className="text-sm text-[#5E5E61] leading-relaxed">Triển khai code tối ưu tốc độ cao, cấu hình cổng thanh toán, domain, SSL và nhập liệu sản phẩm mẫu ban đầu.</p>
              </div>

              <div className="scroll-reveal stagger-4 bg-[#F5F8EF] border border-[#08482D]/12 rounded-2xl p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-['Inter_Tight'] text-4xl font-extrabold text-[#C8DCB0]">04</div>
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-xs border border-[#08482D]/10 group-hover:scale-110 transition-transform">
                    <IconStepLaunch className="w-6 h-6 text-[#08482D]" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-lg font-bold text-[#101410] mb-2">Bàn Giao &amp; Hướng Dẫn 1-1</h4>
                <p className="text-sm text-[#5E5E61] leading-relaxed">Bàn giao toàn bộ mã nguồn, hướng dẫn quản trị dễ dàng qua video/Zalo và kích hoạt bảo hành kỹ thuật trọn đời.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: ESTIMATED PRICING (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-6 py-20" id="pricing">
        <div className="scroll-reveal text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 bg-[#DAE7C7] text-[#08482D] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
            Bảng Giá Minh Bạch
          </span>
          <h2 className="font-['Inter_Tight'] text-3xl md:text-4xl font-bold tracking-tight text-[#101410] mb-3">
            Gói Dịch Vụ Thiết Kế Website Phù Hợp
          </h2>
          <p className="text-base text-[#5E5E61]">
            Không phí ẩn, không phụ phí duy trì hàng tháng. Cam kết chỉ nhận thanh toán khi khách hàng ưng ý.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Plan 1 */}
          <div className="scroll-reveal stagger-1 bg-white border border-[#08482D]/15 rounded-3xl p-8 flex flex-col shadow-xs">
            <h3 className="font-['Inter_Tight'] text-2xl font-bold mb-1.5">Landing Page Giới Thiệu</h3>
            <p className="text-sm text-[#5E5E61] mb-5">Phù hợp chạy quảng cáo ra mắt sản phẩm mới hoặc dịch vụ đơn lẻ.</p>
            <div className="text-3xl font-extrabold text-[#08482D] font-['Inter_Tight'] mb-6">
              3.500.000₫ <span className="text-sm font-medium text-slate-500">/ trọn gói</span>
            </div>
            <ul className="space-y-3 text-sm text-[#101410] mb-8 flex-1">
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Thiết kế 1 trang dài tối ưu chuyển đổi</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Tặng Tên miền quốc tế + SSL bảo mật</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Miễn phí Hosting tốc độ cao 1 năm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Nút gọi, Chat Zalo, Form gửi email</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Bàn giao nhanh trong 2-3 ngày</span></li>
            </ul>
            <button
              onClick={() => handleSelectPlan('Landing Page Giới Thiệu (3.5 Triệu)')}
              className="w-full h-12 bg-[#08482D] text-white rounded-full font-semibold text-sm hover:bg-[#0b5938] transition-colors cursor-pointer"
            >
              Đăng Ký Tư Vấn Gói Này
            </button>
          </div>

          {/* Plan 2 (Popular) */}
          <div className="scroll-reveal stagger-2 bg-white border-2 border-[#08482D] rounded-3xl p-8 flex flex-col relative shadow-xl">
            <div className="absolute -top-3.5 right-6 bg-[#08482D] text-white text-xs font-semibold px-3 py-1 rounded-full">
              PHỔ BIẾN NHẤT
            </div>
            <h3 className="font-['Inter_Tight'] text-2xl font-bold mb-1.5">Doanh Nghiệp Chuẩn SEO</h3>
            <p className="text-sm text-[#5E5E61] mb-5">Hoàn hảo cho công ty, thương hiệu xây dựng uy tín lâu dài.</p>
            <div className="text-3xl font-extrabold text-[#08482D] font-['Inter_Tight'] mb-6">
              6.800.000₫ <span className="text-sm font-medium text-slate-500">/ trọn gói</span>
            </div>
            <ul className="space-y-3 text-sm text-[#101410] mb-8 flex-1">
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Đầy đủ Trang Chủ, Giới Thiệu, Dịch Vụ, Tin Tức, Liên Hệ</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Hệ thống CMS quản trị tiếng Việt cực dễ dùng</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Tối ưu điểm Google PageSpeed 95+</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Tặng Tên miền .com + Hosting SSD 1 năm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Hướng dẫn SEO bài viết lên Top Google</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Bàn giao trong 4-6 ngày làm việc</span></li>
            </ul>
            <button
              onClick={() => handleSelectPlan('Doanh Nghiệp Chuẩn SEO (6.8 Triệu)')}
              className="w-full h-12 bg-[#08482D] text-white rounded-full font-semibold text-sm hover:bg-[#0b5938] transition-colors cursor-pointer"
            >
              Đăng Ký Tư Vấn Gói Này
            </button>
          </div>

          {/* Plan 3 */}
          <div className="scroll-reveal stagger-3 bg-white border border-[#08482D]/15 rounded-3xl p-8 flex flex-col shadow-xs">
            <h3 className="font-['Inter_Tight'] text-2xl font-bold mb-1.5">Bán Hàng &amp; E-Commerce</h3>
            <p className="text-sm text-[#5E5E61] mb-5">Dành cho shop bán lẻ, nhãn hàng thời trang, mỹ phẩm, đồ gia dụng.</p>
            <div className="text-3xl font-extrabold text-[#08482D] font-['Inter_Tight'] mb-6">
              11.500.000₫ <span className="text-sm font-medium text-slate-500">/ trọn gói</span>
            </div>
            <ul className="space-y-3 text-sm text-[#101410] mb-8 flex-1">
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Giỏ hàng, Quản lý kho &amp; Biến thể sản phẩm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Tích hợp thanh toán QR Ngân Hàng, Momo, COD</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Kết nối tự động đơn vị vận chuyển (GHN, GHTK)</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Hệ thống mã giảm giá &amp; Tích điểm khách hàng</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Tặng Hosting cao cấp chịu tải lớn 1 năm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[#08482D] shrink-0" /> <span>Hỗ trợ kỹ thuật 24/7 trọn đời</span></li>
            </ul>
            <button
              onClick={() => handleSelectPlan('Bán Hàng E-Commerce (11.5 Triệu)')}
              className="w-full h-12 bg-[#08482D] text-white rounded-full font-semibold text-sm hover:bg-[#0b5938] transition-colors cursor-pointer"
            >
              Đăng Ký Tư Vấn Gói Này
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: DETAILED CONSULTATION FORM (Scroll Reveal)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-6 py-10" id="consultation">
        <div className="scroll-reveal bg-white border border-[#08482D]/15 rounded-3xl p-8 md:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Guidance & Value */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#DAE7C7] text-[#08482D] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <WebcraftLogoIcon className="w-3.5 h-3.5 text-[#08482D]" />
                Hỗ Trợ Trực Tiếp 24/7
              </span>
              <h2 className="font-['Inter_Tight'] text-3xl font-bold text-[#101410] mb-3">
                Nhận Tư Vấn &amp; Bản Phác Thảo Website Miễn Phí
              </h2>
              <p className="text-sm leading-relaxed text-[#5E5E61] mb-6">
                Hãy chia sẻ ý tưởng hoặc nhu cầu về website và chuyển đổi số của bạn. Đội ngũ <strong>Công ty TNHH Công Nghệ Số Dung Trọng</strong> sẽ phân tích và gửi lại phương án giao diện, tính năng cùng bảng dự toán chi tiết trong <strong>30 phút</strong>.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3.5 items-start p-3 bg-[#F5F8EF]/80 rounded-xl border border-[#08482D]/8 hover:border-[#08482D]/25 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#08482D]/12 flex items-center justify-center shrink-0 shadow-xs">
                    <IconFreePledge className="w-5 h-5 text-[#08482D]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#101410]">Không Ràng Buộc Chi Phí</div>
                    <div className="text-xs text-[#5E5E61] mt-0.5">Nhận tư vấn, báo giá và demo giao diện hoàn toàn miễn phí.</div>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start p-3 bg-[#F5F8EF]/80 rounded-xl border border-[#08482D]/8 hover:border-[#08482D]/25 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#08482D]/12 flex items-center justify-center shrink-0 shadow-xs">
                    <IconNdaLock className="w-5 h-5 text-[#08482D]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#101410]">Bảo Mật Ý Tưởng Tuyệt Đối</div>
                    <div className="text-xs text-[#5E5E61] mt-0.5">Mọi thông tin kinh doanh và tài liệu của bạn được cam kết bảo mật 100%.</div>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start p-3 bg-[#F5F8EF]/80 rounded-xl border border-[#08482D]/8 hover:border-[#08482D]/25 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#08482D]/12 flex items-center justify-center shrink-0 shadow-xs">
                    <IconDirectChat className="w-5 h-5 text-[#08482D]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#101410]">Liên Hệ Trực Tiếp Qua Zalo / Hotline</div>
                    <div className="text-xs text-[#5E5E61] mt-0.5">Chuyên viên kỹ thuật phụ trách tư vấn trực tiếp, không qua trung gian.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F5F8EF] rounded-2xl border border-[#08482D]/12">
              <div className="text-xs text-[#5E5E61] mb-1">Cần tư vấn gấp? Gọi ngay chuyên viên:</div>
              <a href="tel:0832555500" className="text-lg font-bold text-[#08482D] font-['Inter_Tight'] hover:underline flex items-center gap-2">
                <IconDirectChat className="w-5 h-5 text-[#08482D]" />
                <span>0832.555.500 (Zalo 24/7)</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmitConsultation} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101410]">
                    Họ và tên của bạn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn Hưng"
                    className="w-full h-12 px-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101410]">
                    Số điện thoại / Zalo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="09xxxxxxxx"
                    className="w-full h-12 px-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101410]">Email (nhận báo giá PDF)</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="tenban@congty.com"
                    className="w-full h-12 px-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101410]">Lĩnh vực hoạt động</label>
                  <select
                    value={clientIndustry}
                    onChange={(e) => setClientIndustry(e.target.value)}
                    className="w-full h-12 px-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all cursor-pointer"
                  >
                    <option value="Bán lẻ / Thời trang / Mỹ phẩm">Bán lẻ / Thời trang / Mỹ phẩm</option>
                    <option value="Doanh nghiệp B2B / Sản xuất">Doanh nghiệp B2B / Sản xuất</option>
                    <option value="Bất động sản / Kiến trúc / Nội thất">Bất động sản / Kiến trúc / Nội thất</option>
                    <option value="Công nghệ / Dịch vụ SaaS / Phần mềm">Công nghệ / Dịch vụ SaaS / Phần mềm</option>
                    <option value="Nhà hàng / Quán Cafe / F&B">Nhà hàng / Quán Cafe / F&B</option>
                    <option value="Y tế / Phòng khám / Nha khoa / Spa">Y tế / Phòng khám / Nha khoa / Spa</option>
                    <option value="Giáo dục / Khóa học / Tuyển sinh">Giáo dục / Khóa học / Tuyển sinh</option>
                    <option value="Khác">Khác...</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101410]">Mẫu website bạn đang quan tâm</label>
                  <input
                    type="text"
                    value={selectedTemplateName}
                    onChange={(e) => setSelectedTemplateName(e.target.value)}
                    placeholder="Tất cả các mẫu hoặc tên mẫu ưng ý"
                    className="w-full h-12 px-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101410]">Dự toán ngân sách mong muốn</label>
                  <select
                    value={clientBudget}
                    onChange={(e) => setClientBudget(e.target.value)}
                    className="w-full h-12 px-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all cursor-pointer"
                  >
                    <option value="Dưới 5 triệu (Landing page nhanh)">Dưới 5 triệu (Landing page nhanh)</option>
                    <option value="5 - 10 triệu (Doanh nghiệp chuẩn SEO)">5 - 10 triệu (Doanh nghiệp chuẩn SEO)</option>
                    <option value="10 - 20 triệu (E-commerce / Bán hàng nâng cao)">10 - 20 triệu (E-commerce / Bán hàng nâng cao)</option>
                    <option value="Trên 20 triệu (Custom tính năng riêng)">Trên 20 triệu (Custom tính năng riêng)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#101410]">Ghi chú hoặc yêu cầu tính năng đặc biệt</label>
                <textarea
                  rows={3}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="Mô tả ngắn gọn về sản phẩm, link website bạn thích, hoặc thời gian bạn dự kiến khai trương website..."
                  className="w-full p-4 bg-[#FAFCF7] border border-[#08482D]/20 rounded-xl text-sm focus:bg-white focus:border-[#08482D] focus:ring-2 focus:ring-[#08482D]/10 outline-none transition-all resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full h-14 rounded-full font-semibold text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md mt-2 disabled:opacity-95 group ${
                  isSuccess
                    ? 'bg-[#0b633d] text-white ring-4 ring-[#DAE7C7]/60 shadow-lg scale-[1.01]'
                    : isSubmitting
                    ? 'bg-[#08482D]/80 text-white cursor-wait'
                    : 'bg-[#08482D] text-white hover:bg-[#0b5938] hover:shadow-lg'
                }`}
              >
                {isSuccess ? (
                  <>
                    <IconAnimatedCheck className="w-6 h-6 text-[#DAE7C7]" color="#DAE7C7" />
                    <span className="font-bold tracking-wide">Đã gửi thành công!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Đang gửi thông tin...</span>
                  </>
                ) : (
                  <>
                    <span>Gửi Yêu Cầu Tư Vấn &amp; Nhận Báo Giá Ngay</span>
                    <IconSendPaperPlane className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
              <div className="text-[12px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1.5">
                <IconShieldWarranty className="w-3.5 h-3.5 text-[#08482D] shrink-0" />
                <span>Cam kết bảo mật thông tin. Chúng tôi sẽ liên hệ lại qua Zalo/Điện thoại trong vòng 30 phút.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LIVE DEMO / SPECIFICATIONS MODAL
          ===================================================================== */}
      {activeModalItem && (
        <div className="modal-backdrop is-open" onClick={() => setActiveModalItem(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveModalItem(null)}
              className="modal-close-btn"
              aria-label="Đóng cửa sổ"
            >
              &times;
            </button>

            {/* Top Bar: Title, Category Badge, CTA Button */}
            <div className="modal-cascade-1 flex items-center justify-between flex-wrap gap-3 mb-5">
              <div>
                <span className="inline-block px-2.5 py-1 bg-[#DAE7C7] text-[#08482D] rounded-full text-xs font-bold uppercase mb-1.5">
                  {activeModalItem.categoryName}
                </span>
                <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#101410]">{activeModalItem.title}</h3>
                <p className="text-sm text-[#5E5E61] mt-1">{activeModalItem.desc}</p>
              </div>

              <button
                onClick={() => {
                  handleSelectTemplate(activeModalItem.title);
                  setActiveModalItem(null);
                }}
                className="px-6 h-11 bg-[#08482D] text-white rounded-full text-xs font-semibold hover:bg-[#0b5938] transition-colors cursor-pointer"
              >
                Chọn Mẫu Này &amp; Nhận Tư Vấn
              </button>
            </div>

            {/* Interactive Mockup Frame */}
            <div className="modal-cascade-2 device-preview-frame">
              <div className="device-header">
                <span className="browser-dot dot-red"></span>
                <span className="browser-dot dot-yellow"></span>
                <span className="browser-dot dot-green"></span>
                <span className="browser-url">{activeModalItem.url}</span>
              </div>
              <div className="device-screen-content">
                {activeModalItem.mockupContent}
              </div>
            </div>

            {/* Metric Specs */}
            <div className="modal-cascade-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#F5F8EF] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#DAE7C7] flex items-center justify-center shrink-0">
                  <IconSpeedSprint className="w-5 h-5 text-[#08482D]" />
                </div>
                <div>
                  <div className="text-xs text-[#5E5E61] font-medium">Điểm Hiệu Năng Google</div>
                  <div className="text-lg font-extrabold text-green-700 font-['Inter_Tight']">{activeModalItem.pageSpeed} PageSpeed</div>
                </div>
              </div>
              <div className="bg-[#F5F8EF] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#DAE7C7] flex items-center justify-center shrink-0">
                  <IconStepCoding className="w-5 h-5 text-[#08482D]" />
                </div>
                <div>
                  <div className="text-xs text-[#5E5E61] font-medium">Thời Gian Triển Khai</div>
                  <div className="text-lg font-extrabold text-[#08482D] font-['Inter_Tight']">{activeModalItem.deliveryTime} Hoàn Tất</div>
                </div>
              </div>
              <div className="bg-[#F5F8EF] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#DAE7C7] flex items-center justify-center shrink-0">
                  <IconMobileTouch className="w-5 h-5 text-[#08482D]" />
                </div>
                <div>
                  <div className="text-xs text-[#5E5E61] font-medium">Tương Thích Thiết Bị</div>
                  <div className="text-lg font-extrabold text-[#08482D] font-['Inter_Tight']">Mobile, Tablet, 4K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SUCCESS TOAST
          ===================================================================== */}
      <div className={`toast-notification ${showToast ? 'is-visible' : ''}`} role="status">
        <div className="w-8 h-8 rounded-full bg-[#DAE7C7] flex items-center justify-center shrink-0">
          <IconStudioCheck className="w-5 h-5 text-[#08482D]" />
        </div>
        <div>
          <div className="font-bold text-sm">Đã tiếp nhận yêu cầu thành công!</div>
          <div className="text-xs opacity-90">Chuyên viên CNS Dung Trọng sẽ liên hệ lại qua Zalo/Điện thoại trong vòng 30 phút.</div>
        </div>
      </div>

      {/* =====================================================================
          FOOTER
          ===================================================================== */}
      <footer className="bg-[#063420] text-[#D3E0D1] py-16 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <h4 className="font-['Inter_Tight'] text-xl md:text-2xl text-white font-bold mb-2">
              CÔNG TY TNHH CÔNG NGHỆ SỐ DUNG TRỌNG
            </h4>
            <div className="text-xs text-[#DAE7C7] font-medium mb-3">
              Tên viết tắt: CÔNG TY TNHH CNS DUNG TRỌNG &bull; MST: 1900640597
            </div>
            <p className="text-sm leading-relaxed text-[#AEC2AB] mb-4">
              Cung cấp các giải pháp công nghệ thông tin, phần mềm, thiết kế website chuẩn SEO và chuyển đổi số toàn diện cho cá nhân, cửa hàng, tổ chức và doanh nghiệp.
            </p>
            <div className="text-xs text-white space-y-1">
              <div><strong>Người đại diện pháp luật:</strong> Lý Hữu Trọng</div>
              <div>
                <strong>Hotline / Zalo 24/7:</strong>{' '}
                <a href="tel:0832555500" className="text-[#DAE7C7] hover:underline font-semibold">0832.555.500</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-white mb-4">Dự Án Mẫu</h5>
            <ul className="space-y-2.5 text-xs text-[#AEC2AB]">
              <li><a href="#showcase" onClick={() => setCategoryFilter('ecommerce')} className="hover:text-white transition-colors">Website Bán Hàng</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('corporate')} className="hover:text-white transition-colors">Doanh Nghiệp &amp; B2B</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('tech')} className="hover:text-white transition-colors">Công Nghệ &amp; SaaS</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('fb')} className="hover:text-white transition-colors">Nhà Hàng &amp; F&amp;B</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('realestate')} className="hover:text-white transition-colors">Bất Động Sản</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-white mb-4">Liên Kết Nhanh</h5>
            <ul className="space-y-2.5 text-xs text-[#AEC2AB]">
              <li><a href="#hero" className="hover:text-white transition-colors">Về Đầu Trang</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Ưu Điểm Vượt Trội</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Quy Trình 4 Bước</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Bảng Giá Dịch Vụ</a></li>
              <li><a href="#consultation" className="hover:text-white transition-colors">Biểu Mẫu Nhận Báo Giá</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-semibold text-white mb-4">Trụ Sở &amp; Chi Nhánh</h5>
            <div className="text-xs leading-relaxed text-[#AEC2AB] space-y-2.5">
              <p>
                <strong className="text-white">📍 Trụ sở chính:</strong><br />
                Số 17 Lê Văn Năm, Khóm 17, Phường Bạc Liêu, Tỉnh Cà Mau, Việt Nam
              </p>
              <p>
                <strong className="text-white">📍 Chi nhánh TP. Hồ Chí Minh:</strong><br />
                18/1/21 Hoàng Hữu Nam, Phường Long Bình, Thành phố Hồ Chí Minh<br />
                <span className="text-[11px] opacity-85">(MST chi nhánh: 1900640597-001)</span>
              </p>
              <p>
                📞 Điện thoại: <a href="tel:0832555500" className="text-white hover:underline">0832555500</a>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#8CA48A] gap-4">
          <div>&copy; {new Date().getFullYear()} CÔNG TY TNHH CÔNG NGHỆ SỐ DUNG TRỌNG (MST: 1900640597). All rights reserved.</div>
          <div className="flex gap-5">
            <span>Bảo mật thông tin</span>
            <span>Cam kết tiến độ</span>
            <span>Bảo hành trọn đời</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
