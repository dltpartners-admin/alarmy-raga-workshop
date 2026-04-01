'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide11_Q2Section({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-dh-black">
      <span
        data-gsap="number"
        className="absolute select-none text-[clamp(8rem,20vw,20rem)] font-black text-white/5"
      >
        Q2
      </span>

      <div className="relative z-10 flex flex-col items-center">
        <h1 data-gsap="hero" className="text-[clamp(3rem,6vw,6rem)] font-bold text-white">
          플랜
        </h1>
        <p data-gsap="fade" className="mt-4 text-xl text-dh-gray-mid">
          2026년 4월 — 6월
        </p>
        <div data-gsap="line" className="mt-8 h-0.5 w-12 origin-left bg-primary" />
      </div>
    </div>
  );
}
