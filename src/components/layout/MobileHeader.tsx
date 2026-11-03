import { useState } from 'react';
import { LayoutGrid, Menu, X, FileText, PhoneCall, Layers, Award, Send } from 'lucide-react';
import {
  WebcraftLogoIcon
} from '../CustomIcons.tsx';

/** Header dĂ­nh trĂªn cĂ¹ng + menu trÆ°á»£t (chá»‰ hiá»‡n trĂªn mobile/tablet) */
export default function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* =====================================================================
          MOBILE & TABLET STICKY APP HEADER (<= 1024px)
          Synchronized with CNS Dung Trọng Forest Green & Mint Brand Identity
          ===================================================================== */}
      <header className="lg:hidden sticky top-0 z-50 bg-white text-[var(--text)] px-4 py-3 flex items-center justify-between border-b border-[var(--border)] shadow-[var(--shadow)]">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[var(--teal-soft)] flex items-center justify-center shrink-0 shadow-[var(--shadow)]">
            <WebcraftLogoIcon className="w-6 h-6" color="var(--primary)" secondaryColor="#FFFFFF" />
          </div>
          <div className="leading-tight">
            <div className="font-['Inter_Tight'] font-extrabold text-base sm:text-lg tracking-tight text-[var(--text)] flex items-baseline gap-1">
              <span>CNS DUNG TRỌNG</span>
            </div>
            <div className="text-[10px] font-medium tracking-wide text-[var(--secondary-dark)]">
              Thiết Kế Website &amp; Chuyển Đổi Số
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="tel:0832555500"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-bold shadow-[var(--shadow)] active:scale-95 transition-transform"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="max-sm:hidden">0832.555.500</span>
            <span className="sm:hidden">Gọi ngay</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[var(--bg-soft)] text-[var(--primary)] hover:bg-[var(--teal-soft)] transition-all duration-200 cursor-pointer"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] z-40 bg-white border-b border-[var(--border)] shadow-2xl p-4 space-y-1.5">
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)]"
          >
            <LayoutGrid className="w-4 h-4 text-[var(--primary)]" />
            <span>Kho Giao Diện Mẫu (50+)</span>
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)]"
          >
            <Award className="w-4 h-4 text-[var(--primary)]" />
            <span>Ưu Điểm Độc Quyền</span>
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)]"
          >
            <Layers className="w-4 h-4 text-[var(--primary)]" />
            <span>Quy Trình 4 Bước</span>
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)]"
          >
            <FileText className="w-4 h-4 text-[var(--primary)]" />
            <span>Bảng Giá Trọn Gói</span>
          </a>
          <div className="pt-2">
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-[var(--primary)] text-white shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Nhận Tư Vấn &amp; Báo Giá Miễn Phí</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
