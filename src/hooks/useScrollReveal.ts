import { useEffect } from 'react';

/**
 * Hiá»‡u á»©ng hiá»‡n dáº§n khi cuá»™n (scroll reveal) + parallax áº£nh trong kho máº«u.
 * `dep` thay Ä‘á»•i (vd: bá»™ lá»c danh má»¥c) sáº½ quĂ©t láº¡i cĂ¡c pháº§n tá»­ má»›i.
 */
export function useScrollReveal(dep: unknown) {
  const categoryFilter = dep;
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
}
