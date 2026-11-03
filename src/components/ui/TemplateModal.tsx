import {
  IconSpeedSprint,
  IconMobileTouch,
  IconStepCoding
} from '../CustomIcons.tsx';
import type { TemplateItem } from '../../types';

interface Props {
  activeModalItem: TemplateItem | null;
  setActiveModalItem: (t: TemplateItem | null) => void;
  handleSelectTemplate: (name: string) => void;
}

/** Cá»­a sá»• xem thá»­ máº«u (Live Demo) */
export default function TemplateModal({ activeModalItem, setActiveModalItem, handleSelectTemplate }: Props) {
  return (
    <>
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
            <div className="modal-cascade-1 flex items-center justify-between flex-wrap gap-3 mb-5 pr-8 sm:pr-10">
              <div>
                <span className="inline-block px-2.5 py-1 bg-[var(--teal-soft)] text-[var(--secondary-dark)] rounded-full text-xs font-bold uppercase mb-1.5">
                  {activeModalItem.categoryName}
                </span>
                <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold text-[var(--text)]">{activeModalItem.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{activeModalItem.desc}</p>
              </div>

              <button
                onClick={() => {
                  handleSelectTemplate(activeModalItem.title);
                  setActiveModalItem(null);
                }}
                className="w-full sm:w-auto px-5 sm:px-6 h-11 bg-[var(--primary)] text-white rounded-full text-xs font-semibold hover:bg-[var(--primary-dark)] transition-all duration-200 cursor-pointer whitespace-nowrap"
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
              <div className="bg-[var(--bg-soft)] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--teal-soft)] flex items-center justify-center shrink-0">
                  <IconSpeedSprint className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Điểm Hiệu Năng Google</div>
                  <div className="text-lg font-extrabold text-[var(--secondary-dark)] font-['Inter_Tight']">{activeModalItem.pageSpeed} PageSpeed</div>
                </div>
              </div>
              <div className="bg-[var(--bg-soft)] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--teal-soft)] flex items-center justify-center shrink-0">
                  <IconStepCoding className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Thời Gian Triển Khai</div>
                  <div className="text-lg font-extrabold text-[var(--primary)] font-['Inter_Tight']">{activeModalItem.deliveryTime} Hoàn Tất</div>
                </div>
              </div>
              <div className="bg-[var(--bg-soft)] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--teal-soft)] flex items-center justify-center shrink-0">
                  <IconMobileTouch className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Tương Thích Thiết Bị</div>
                  <div className="text-lg font-extrabold text-[var(--primary)] font-['Inter_Tight']">Mobile, Tablet, 4K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
