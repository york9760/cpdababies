'use client';

import { useEffect } from 'react';

export function ScrollMotion() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main h1,main h2,main h3,main p,main .eyebrow,.hero-note,.art-caption,.art-message,.trust span,.toy-icon',
      ),
    );
    const icons = elements.filter((element) =>
      element.classList.contains('toy-icon'),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('motion-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.classList.add('scroll-motion');
      observer.observe(element);
    });

    let frame = 0;
    const moveIcons = () => {
      frame = 0;
      const viewportMiddle = innerHeight / 2;
      icons.forEach((icon, index) => {
        const rect = icon.getBoundingClientRect();
        const distance =
          (rect.top + rect.height / 2 - viewportMiddle) / innerHeight;
        const drift = Math.max(-18, Math.min(18, distance * -28));
        const tilt = Math.max(
          -5,
          Math.min(5, distance * (index % 2 ? 7 : -7)),
        );
        icon.style.setProperty('--scroll-drift', `${drift.toFixed(1)}px`);
        icon.style.setProperty('--scroll-tilt', `${tilt.toFixed(1)}deg`);
      });
    };
    const requestMove = () => {
      if (!frame) frame = requestAnimationFrame(moveIcons);
    };

    moveIcons();
    addEventListener('scroll', requestMove, { passive: true });
    addEventListener('resize', requestMove);

    return () => {
      observer.disconnect();
      removeEventListener('scroll', requestMove);
      removeEventListener('resize', requestMove);
      if (frame) cancelAnimationFrame(frame);
      elements.forEach((element) => {
        element.classList.remove('scroll-motion', 'motion-visible');
        element.style.removeProperty('--scroll-drift');
        element.style.removeProperty('--scroll-tilt');
      });
    };
  }, []);

  return null;
}
