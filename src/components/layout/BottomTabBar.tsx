import { useState } from 'react';
import { LayoutGrid, Home, Headphones, Sparkles, FileText } from 'lucide-react';

/** Bong bĂ³ng Zalo + thanh Ä‘iá»u hÆ°á»›ng Ä‘Ă¡y kiá»ƒu app (mobile/tablet) */
export default function BottomTabBar() {
  const [showZaloBubble, setShowZaloBubble] = useState<boolean>(true);
  const [activeMobileTab, setActiveMobileTab] = useState<string>('home');

  return (
    <>
      {/* =====================================================================
          FLOATING ZALO WIDGET + MOBILE/TABLET BOTTOM NAVIGATION BAR (<= 1024px)
          Synchronized with Forest Green & Mint Brand Identity
          ===================================================================== */}
      {/* Floating Zalo Chat Bubble */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 z-40 flex items-center gap-2.5">
        {showZaloBubble && (
          <div className="bg-white text-[var(--text)] px-3.5 py-2 rounded-2xl shadow-[0_8px_24px_rgba(37,99,235,0.16)] border border-[var(--border)] flex items-center gap-2 text-xs sm:text-sm font-bold">
            <span>CNS Dung Trọng xin chào!</span>
            <button
              type="button"
              onClick={() => setShowZaloBubble(false)}
              className="text-[var(--primary)] hover:opacity-75 font-black text-base leading-none cursor-pointer"
              aria-label="Đóng lời chào"
            >
              &times;
            </button>
          </div>
        )}
        <a
          href="https://zalo.me/0832555500"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white p-1 shadow-[0_8px_25px_rgba(0,104,255,0.38)] border-2 border-[#0068ff] flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Chat Zalo CNS Dung Trọng"
        >
          <div className="w-full h-full rounded-full bg-[#0068ff] flex items-center justify-center text-white font-['Inter_Tight'] font-extrabold text-xs tracking-tight">
            Zalo
          </div>
        </a>
      </div>

      {/* Mobile & Tablet Fixed Bottom App Navigation Bar */}
      <nav
        aria-label="Thanh điều hướng di động"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[var(--border)] shadow-[0_-6px_24px_rgba(37,99,235,0.08)] h-16 px-2 flex items-center justify-around select-none"
      >
        <a
          href="#hero"
          onClick={() => setActiveMobileTab('home')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-all duration-200 ${
            activeMobileTab === 'home' ? 'text-[var(--primary)]' : 'text-slate-400 hover:text-[var(--primary)]'
          }`}
        >
          <Home className="w-5 h-5" strokeWidth={2.2} />
          <span className="text-[11px] font-bold">Trang chủ</span>
        </a>

        <a
          href="#showcase"
          onClick={() => setActiveMobileTab('showcase')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-all duration-200 ${
            activeMobileTab === 'showcase' ? 'text-[var(--primary)]' : 'text-slate-400 hover:text-[var(--primary)]'
          }`}
        >
          <LayoutGrid className="w-5 h-5" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold">Kho mẫu</span>
        </a>

        {/* Center Floating Primary CTA Button (Nhận Tư Vấn) */}
        <div className="relative -top-3.5 flex flex-col items-center justify-center px-1">
          <a
            href="#consultation"
            onClick={() => setActiveMobileTab('consultation')}
            className="w-14 h-14 rounded-full bg-[var(--accent)] text-white shadow-[0_6px_18px_rgba(251,146,60,0.45)] border-4 border-white flex flex-col items-center justify-center active:scale-95 transition-transform"
            aria-label="Đăng ký nhận tư vấn"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-[8.5px] font-bold tracking-tight leading-none mt-0.5">Tư vấn</span>
          </a>
        </div>

        <a
          href="#pricing"
          onClick={() => setActiveMobileTab('pricing')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-all duration-200 ${
            activeMobileTab === 'pricing' ? 'text-[var(--primary)]' : 'text-slate-400 hover:text-[var(--primary)]'
          }`}
        >
          <FileText className="w-5 h-5" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold">Bảng giá</span>
        </a>

        <a
          href="tel:0832555500"
          onClick={() => setActiveMobileTab('support')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-all duration-200 ${
            activeMobileTab === 'support' ? 'text-[var(--primary)]' : 'text-slate-400 hover:text-[var(--primary)]'
          }`}
        >
          <Headphones className="w-5 h-5" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold">Gọi ngay</span>
        </a>
      </nav>
    </>
  );
}
