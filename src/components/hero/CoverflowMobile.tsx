import React, { useEffect, useRef, useState } from 'react';
import { TEMPLATES } from '../../data/templates';
import type { TemplateItem } from '../../types';

interface Props {
  paused: boolean; // dá»«ng tá»± cháº¡y khi modal Ä‘ang má»Ÿ
  setActiveModalItem: (t: TemplateItem) => void;
}

/** Slide Coverflow 3D tá»± Ä‘á»™ng trĂªn Ä‘iá»‡n thoáº¡i / tablet */
export default function CoverflowMobile({ paused, setActiveModalItem }: Props) {
  const activeModalItem = paused;
  const [mobileSlide, setMobileSlide] = useState<number>(0);
  const [stackPaused, setStackPaused] = useState<boolean>(false);
  const [, setStackDir] = useState<number>(-1);
  const stackDragRef = useRef<{ x: number; moved: boolean } | null>(null);
  const STACK_N = 10;

  // Auto-play the mobile stack cards every 3.2s (paused while touching or modal open)
  useEffect(() => {
    if (stackPaused || activeModalItem) return;
    const id = window.setTimeout(() => {
      setStackDir(-1);
      setMobileSlide((s) => (s + 1) % STACK_N);
    }, 3200);
    return () => window.clearTimeout(id);
  }, [mobileSlide, stackPaused, activeModalItem]);

  return (
    <div className="lg:hidden w-screen overflow-hidden py-3 mt-1 mb-3">
      <div
        className="stk-deck"
        onPointerDown={(e) => {
          stackDragRef.current = { x: e.clientX, moved: false };
          setStackPaused(true);
        }}
        onPointerUp={(e) => {
          const start = stackDragRef.current;
          if (start) {
            const dx = e.clientX - start.x;
            if (Math.abs(dx) > 40) {
              start.moved = true;
              setStackDir(dx < 0 ? -1 : 1);
              setMobileSlide((s) => (dx < 0 ? (s + 1) % STACK_N : (s - 1 + STACK_N) % STACK_N));
            }
          }
          setStackPaused(false);
        }}
        onPointerCancel={() => setStackPaused(false)}
      >
        {TEMPLATES.slice(0, STACK_N).map((t, i) => {
          const off = (i - mobileSlide + STACK_N) % STACK_N;
          let rel = off;
          if (rel > STACK_N / 2) rel -= STACK_N;
          const abs = Math.abs(rel);
          const style: React.CSSProperties = {
            transform: `translateX(${rel * 58}%) translateZ(${-abs * 140}px) rotateY(${-Math.sign(rel) * Math.min(abs, 2) * 38}deg) scale(${abs === 0 ? 1 : 0.86})`,
            opacity: abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.75 : 0.35,
            zIndex: 10 - abs,
            pointerEvents: abs > 1 ? 'none' : 'auto',
          };
          return (
          <button
            key={t.title}
            type="button"
            onClick={() => {
              if (stackDragRef.current?.moved) return;
              if (off !== 0) {
                setMobileSlide(i);
                return;
              }
              setActiveModalItem(t);
            }}
            className={`mcc-card stk-card ${off === 0 ? 'is-active' : ''}`}
            style={style}
            aria-hidden={off !== 0}
            tabIndex={off === 0 ? 0 : -1}
            aria-label={`Xem mẫu: ${t.title}`}
          >
            <img src={t.thumbnailImage} alt={t.title} loading="lazy" className="mcc-img" />
            <div className="mcc-shade" />
            <div className="mcc-top">
              <span className="mcc-tag">{t.categoryName}</span>
              <span className="mcc-open">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
              </span>
            </div>
            <div className="mcc-info">
              <div className="mcc-title">{t.title}</div>
              <div className="mcc-desc">{t.desc}</div>
              <span className="mcc-cta">Xem demo →</span>
            </div>
          </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-1.5 mt-5">
        {TEMPLATES.slice(0, STACK_N).map((t, i) => (
          <button
            type="button"
            key={t.title}
            aria-label={`Mẫu ${i + 1}`}
            onClick={() => { setStackDir(-1); setMobileSlide(i); }}
            className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${mobileSlide === i ? 'w-7 bg-[var(--primary)]/25' : 'w-1.5 bg-[var(--primary)]/25'}`}
          >
            {mobileSlide === i && (
              <span
                key={`p-${mobileSlide}`}
                className="stk-progress"
                style={{ animationPlayState: stackPaused ? 'paused' : 'running' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
