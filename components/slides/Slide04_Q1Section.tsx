'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide04_Q1Section({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-dh-black">
      {/* Giant watermark */}
      <span
        data-gsap="number"
        className="absolute select-none text-[clamp(8rem,20vw,20rem)] font-black text-white/5"
      >
        Q1
      </span>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          data-gsap="hero"
          className="text-[clamp(3rem,6vw,6rem)] font-bold text-white"
        >
          회고
        </h1>

        <p data-gsap="fade" className="mt-4 text-xl text-dh-gray-mid">
          2026년 1월 — 3월
        </p>

        <div data-gsap="line" className="mt-8 h-0.5 w-12 origin-left bg-primary" />
      </div>
    </div>
  );
}
