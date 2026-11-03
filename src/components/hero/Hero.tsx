import { useRef } from 'react';
import {
  WebcraftLogoIcon,
  IconDirectChat,
  IconSendPaperPlane
} from '../CustomIcons.tsx';
import type { TemplateItem } from '../../types';
import CoverflowMobile from './CoverflowMobile';
import { useCarousel3D } from './useCarousel3D';

interface Props {
  activeModalItem: TemplateItem | null;
  setActiveModalItem: (t: TemplateItem) => void;
}

/** SECTION 1: Hero (PC: bÄƒng chuyá»n 3D, Mobile: Coverflow) */
export default function Hero({ activeModalItem, setActiveModalItem }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  useCarousel3D(trackRef, setActiveModalItem);

  return (
    <>
      {/* =====================================================================
          SECTION 1: HERO VIEWPORT (Desktop 1440x1080 Scaled + Mobile Responsive)
          ===================================================================== */}
      <div className="hero-viewport-container" id="hero">
        <main id="hero-viewport">
          {/* Top Logo (Hidden on mobile/tablet since App Header is shown) */}
          <a href="#hero" className="absolute left-[calc(37*var(--u))] top-[calc(36*var(--u))] flex items-center gap-[calc(9*var(--u))] text-[var(--primary)] z-25 max-lg:hidden group">
            <WebcraftLogoIcon className="w-[calc(30*var(--u))] h-[calc(30*var(--u))] group-hover:scale-105 transition-transform" />
            <span className="font-['Inter_Tight'] font-bold text-[calc(22*var(--u))] text-[var(--primary)] tracking-tight">CNS Dung Trọng</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="absolute left-[calc(440*var(--u))] top-[calc(38*var(--u))] flex items-center gap-[calc(28*var(--u))] z-25 max-lg:hidden">
            <a href="#showcase" className="font-medium text-[calc(15.5*var(--u))] text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200">Dự Án Mẫu</a>
            <a href="#features" className="font-medium text-[calc(15.5*var(--u))] text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200">Ưu Điểm</a>
            <a href="#process" className="font-medium text-[calc(15.5*var(--u))] text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200">Quy Trình</a>
            <a href="#pricing" className="font-medium text-[calc(15.5*var(--u))] text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200">Báo Giá</a>
            <a href="#consultation" className="font-medium text-[calc(15.5*var(--u))] text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200">Tư Vấn Miễn Phí</a>
          </nav>

          {/* Top Actions: Hotline + Fast CTA (Hidden on mobile/tablet) */}
          <div className="absolute right-[calc(37*var(--u))] top-[calc(29*var(--u))] flex items-center gap-[calc(12*var(--u))] z-25 max-lg:hidden">
            <a href="tel:0832555500" className="hidden lg:flex items-center gap-[calc(7*var(--u))] px-[calc(14*var(--u))] py-[calc(8*var(--u))] bg-white/75 border border-[var(--border)] rounded-full text-[calc(13.5*var(--u))] font-medium text-[var(--primary)] hover:bg-white transition-all">
              <IconDirectChat className="w-4 h-4 text-[var(--primary)]" />
              <span>Hotline: 0832.555.500</span>
            </a>
            <a href="#consultation" className="h-[calc(40*var(--u))] px-[calc(20*var(--u))] bg-[var(--primary)] text-white rounded-full font-medium text-[calc(14.5*var(--u))] flex items-center gap-1.5 hover:bg-[var(--primary-dark)] transition-all shadow-md">
              <span>Nhận Tư Vấn</span>
              <IconSendPaperPlane className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Mint Pill Badge */}
          <div className="absolute left-[calc(490*var(--u))] top-[calc(115*var(--u))] w-[calc(460*var(--u))] h-[calc(37*var(--u))] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:w-auto max-lg:px-4 max-lg:py-1.5 bg-[var(--teal-soft)] text-[var(--secondary-dark)] rounded-full font-semibold text-[calc(15.5*var(--u))] max-lg:text-xs flex items-center justify-center gap-2 text-center z-10 max-lg:mb-3 shadow-[var(--shadow)]">
            <WebcraftLogoIcon className="w-4 h-4 text-[var(--primary)]" />
            <span>50+ Mẫu Website Chuẩn SEO &amp; Tối Ưu Doanh Thu</span>
          </div>

          {/* Headline */}
          <div className="absolute left-0 w-full top-[calc(172*var(--u))] text-center pointer-events-none z-10 max-lg:relative max-lg:top-auto max-lg:mb-2.5">
            <h1 className="font-['Inter_Tight'] font-bold text-[calc(64*var(--u))] max-lg:text-[26px] sm:max-lg:text-4xl leading-[calc(74*var(--u))] max-lg:leading-tight text-[var(--text)] tracking-[-0.03em]">
              Khám Phá Mẫu Website Đẳng Cấp
            </h1>
            <h1 className="font-['Inter_Tight'] font-bold text-[calc(64*var(--u))] max-lg:text-[26px] sm:max-lg:text-4xl leading-[calc(74*var(--u))] max-lg:leading-tight text-[var(--text)] tracking-[-0.02em]">
              <span className="text-gradient">Bứt Phá Doanh Thu Thương Hiệu</span>
            </h1>
          </div>

          {/* Subline */}
          <p className="absolute left-0 w-full top-[calc(346*var(--u))] font-normal text-[calc(18.5*var(--u))] max-lg:text-xs sm:max-lg:text-sm leading-[calc(29*var(--u))] max-lg:leading-relaxed text-[var(--text-muted)] text-center pointer-events-none z-10 max-lg:relative max-lg:top-auto max-lg:max-w-lg max-lg:mb-4">
            Trải nghiệm bộ sưu tập website mẫu hiện đại được tối ưu hóa cho từng ngành nghề.<br className="max-lg:hidden" />
            Chọn mẫu ưng ý hoặc điền thông tin để chuyên gia tư vấn giải pháp đo ni đóng giày cho bạn.
          </p>

          {/* Doodle Slashes */}
          <svg className="absolute left-[calc(215*var(--u))] top-[calc(342*var(--u))] w-[calc(42*var(--u))] h-[calc(42*var(--u))] pointer-events-none z-15 max-lg:hidden" viewBox="0 0 44 44" fill="none">
            <path d="M10 38 L22 6" stroke="var(--primary)" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M22 38 L34 6" stroke="var(--primary)" strokeWidth="3.2" strokeLinecap="round" />
          </svg>

          {/* Handwritten Note (Top Right) */}
          <div className="absolute left-[calc(1235*var(--u))] top-[calc(332*var(--u))] pointer-events-none z-15 max-lg:hidden">
            <div className="font-['Caveat'] font-semibold text-[calc(25*var(--u))] leading-[calc(26*var(--u))] text-[var(--primary)] rotate-12 origin-top-left whitespace-nowrap">
              Kéo để xem<br />chọn mẫu ngay
            </div>
          </div>
          <svg className="absolute left-[calc(1175*var(--u))] top-[calc(392*var(--u))] w-[calc(130*var(--u))] h-[calc(120*var(--u))] pointer-events-none overflow-visible z-15 max-lg:hidden" viewBox="0 0 140 140" fill="none">
            <path d="M96 14 C104 55, 78 98, 28 128" stroke="var(--primary)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M22 112 L28 128 L44 122" stroke="var(--primary)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* 3D Cylinder Carousel Track (Desktop) */}
          <div className="mobile-cards-band max-lg:hidden" id="cards-wrapper">
            <div id="cards-track" ref={trackRef} role="region" aria-label="Băng chuyền website mẫu 3D">
              {/* Cards mounted by useEffect */}
            </div>
          </div>

          <CoverflowMobile paused={!!activeModalItem} setActiveModalItem={setActiveModalItem} />

          {/* Bottom CTA Button */}
          <div className="absolute left-[calc(610*var(--u))] top-[calc(901*var(--u))] w-[calc(220*var(--u))] h-[calc(74*var(--u))] flex items-center justify-center z-20 max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:w-auto max-lg:mt-2">
            <div className="button-ring" aria-hidden="true"></div>
            <a href="#consultation" className="main-cta-button" id="btn-make-reel">
              Nhận Tư Vấn Miễn Phí
            </a>
          </div>

          {/* Handwritten Note (Zero Cost) */}
          <div className="absolute left-[calc(410*var(--u))] top-[calc(918*var(--u))] pointer-events-none z-15 max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:mt-5">
            <span className="font-['Caveat'] font-semibold text-[calc(25*var(--u))] max-lg:text-lg text-[var(--primary)] -rotate-8 max-lg:rotate-0 inline-block whitespace-nowrap">
              Zero cost · Báo giá 30p
            </span>
          </div>
          <svg className="absolute left-[calc(548*var(--u))] top-[calc(942*var(--u))] w-[calc(54*var(--u))] h-[calc(32*var(--u))] pointer-events-none overflow-visible z-15 max-lg:hidden" viewBox="0 0 64 36" fill="none">
            <path d="M8 26 C24 30, 44 24, 56 12" stroke="var(--primary)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M42 10 L56 12 L52 24" stroke="var(--primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </main>
      </div>
    </>
  );
}
