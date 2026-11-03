import {
  IconSpeedSprint,
  IconMobileTouch,
  IconStepCoding,
  IconInspectEye,
  IconStudioCheck
} from '../CustomIcons.tsx';
import { TEMPLATES } from '../../data/templates';
import type { TemplateItem } from '../../types';

interface Props {
  categoryFilter: string;
  setCategoryFilter: (c: string) => void;
  setActiveModalItem: (t: TemplateItem) => void;
  handleSelectTemplate: (name: string) => void;
}

/** SECTION 2: Kho máº«u + bá»™ lá»c danh má»¥c */
export default function Showcase({ categoryFilter, setCategoryFilter, setActiveModalItem, handleSelectTemplate }: Props) {
  const filteredTemplates = categoryFilter === 'all' 
    ? TEMPLATES 
    : TEMPLATES.filter((t) => t.category === categoryFilter);

  return (
    <>
      {/* =====================================================================
          SECTION 2: SHOWCASE GALLERY (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-20 section-soft-bg" id="showcase">
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
            Bộ Sưu Tập Đa Ngành
          </span>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-2.5">
            Thư Viện Mẫu Website Được Ưa Chuộng Nhất
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto">
            Tất cả các mẫu đều đạt chuẩn Google PageSpeed 95+, thiết kế Responsive 100% trên điện thoại và tối ưu phễu chuyển đổi giúp bạn chốt đơn vượt trội.
          </p>
        </div>

        {/* Filter Bar (Horizontal swipeable pills on mobile, wrap on desktop) */}
        <div className="scroll-reveal flex max-md:overflow-x-auto max-md:flex-nowrap md:flex-wrap gap-2 mb-8 md:mb-10 border-b border-[var(--border)] pb-3.5 max-md:-mx-4 max-md:px-4 no-scrollbar">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'all'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
            }`}
          >
            Tất Cả Mẫu (10)
          </button>
          <button
            onClick={() => setCategoryFilter('ecommerce')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'ecommerce'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
            }`}
          >
            Bán Hàng E-Commerce
          </button>
          <button
            onClick={() => setCategoryFilter('corporate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'corporate'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
            }`}
          >
            Doanh Nghiệp &amp; B2B
          </button>
          <button
            onClick={() => setCategoryFilter('tech')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'tech'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
            }`}
          >
            Công Nghệ &amp; SaaS
          </button>
          <button
            onClick={() => setCategoryFilter('fb')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'fb'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
            }`}
          >
            Nhà Hàng &amp; F&amp;B
          </button>
          <button
            onClick={() => setCategoryFilter('realestate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'realestate'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
            }`}
          >
            Bất Động Sản
          </button>
          <button
            onClick={() => setCategoryFilter('service')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
              categoryFilter === 'service'
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)]'
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
              className={`scroll-reveal stagger-${(idx % 4) + 1} bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--shadow)] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.18)] hover:border-[var(--primary)]/35 transition-all flex flex-col`}
            >
              {/* Mini Browser Bar & Parallax Banner */}
              <div
                data-parallax-card
                className="parallax-card-viewport group/thumb relative cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                {/* Browser top chrome */}
                <div className="h-6 bg-[#0F172A]/95 backdrop-blur-xs flex items-center px-2.5 gap-1.5 border-b border-white/10 relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                  <span className="ml-1.5 text-[9px] text-gray-300 font-mono tracking-tight truncate">
                    {item.url.replace('https://', '')}
                  </span>
                  <span className="ml-auto text-[9px] text-[var(--teal-soft)] font-sans font-medium opacity-85 flex items-center gap-1">
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
                  <span className="text-[10px] font-bold bg-[var(--teal-soft)] text-[var(--secondary-dark)] px-2.5 py-0.5 rounded-full self-start mb-1.5 shadow-[var(--shadow)] uppercase tracking-wide">
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
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="flex gap-1.5 sm:gap-2 mb-3 flex-wrap">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] inline-flex items-center gap-1">
                    <IconSpeedSprint className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{item.pageSpeed} Speed</span>
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] inline-flex items-center gap-1">
                    <IconStepCoding className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{item.deliveryTime}</span>
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] inline-flex items-center gap-1">
                    <IconMobileTouch className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>Mobile 100%</span>
                  </span>
                </div>
                <h3 className="font-['Inter_Tight'] text-lg sm:text-xl font-bold text-[var(--text)] mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)] mb-4 sm:mb-5 flex-1">{item.desc}</p>
                <div className="flex items-center gap-2 sm:gap-2.5 mt-auto">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="flex-1 h-10 px-2 bg-white border border-[var(--primary)] rounded-lg text-xs font-semibold text-[var(--primary)] flex items-center justify-center gap-1 sm:gap-1.5 hover:bg-[var(--primary)]/8 hover:border-[var(--primary)] transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    <IconInspectEye className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                    <span>Xem Chi Tiết</span>
                  </button>
                  <button
                    onClick={() => handleSelectTemplate(item.title)}
                    className="flex-1 h-10 px-2 bg-[var(--primary)] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 sm:gap-1.5 hover:bg-[var(--primary-dark)] transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    <IconStudioCheck className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Chọn Mẫu Này</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
