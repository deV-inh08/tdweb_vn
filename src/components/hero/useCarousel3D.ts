import { useEffect } from 'react';
import type { RefObject } from 'react';
import { useData } from '../../context/DataContext';
import { TEMPLATES } from '../../data/templates';
import type { TemplateItem } from '../../types';

/**
 * Băng chuyền 3D hình trụ trên PC: dựng thẻ bằng DOM, kéo thả + tự chạy.
 */
export function useCarousel3D(
  trackRef: RefObject<HTMLDivElement | null>,
  setActiveModalItem: (t: TemplateItem) => void
) {
  const { visibleTemplates } = useData();

  // =========================================================================
  // 3D CYLINDER CAROUSEL RENDER LOOP
  // =========================================================================
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const sourceList = visibleTemplates.length > 0 ? visibleTemplates : TEMPLATES;

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
      const tData = sourceList[i % sourceList.length];
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
      bodyWrap.style.backgroundImage = `linear-gradient(to top, rgba(15,23,42, 0.85) 0%, rgba(15,23,42, 0.35) 55%, transparent 100%), url(${tData.thumbnailImage})`;
      bodyWrap.style.backgroundSize = 'cover';
      bodyWrap.style.backgroundPosition = 'center';

      // Info Overlay
      const overlay = document.createElement('div');
      overlay.className = 'card-info-overlay';
      overlay.innerHTML = `
        <div class="card-info-fixed">
          <span class="card-tag">${tData.categoryName}</span>
          <div class="card-title-text">${tData.title}</div>
          <div class="card-desc-text">${tData.desc}</div>
        </div>
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

      const u = window.innerWidth <= 1024 ? window.innerWidth / 640 : Math.min(window.innerWidth / 1440, window.innerHeight / 1080);
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
      } catch {}

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

      const isMobile = window.innerWidth <= 1024;
      const u = isMobile ? window.innerWidth / 640 : Math.min(window.innerWidth / 1440, window.innerHeight / 1080);

      const centerScreenX = isMobile ? (window.innerWidth / 2 / u) : 720;
      const centerYOffset = isMobile ? (125 / u) : 687;
      const radiusScale = isMobile ? (window.innerWidth >= 768 ? 0.55 : 0.68) : 1.0;

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

        cardObj.el.style.left = "0px";
        cardObj.el.style.top = "0px";
        cardObj.el.style.transform = `translate3d(${leftPx.toFixed(2)}px, ${topPx.toFixed(2)}px, 0)`;
        cardObj.el.style.width = `${widthPx.toFixed(2)}px`;
        cardObj.el.style.height = `${heightPx.toFixed(2)}px`;

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
  }, [trackRef, setActiveModalItem, visibleTemplates]);
}
