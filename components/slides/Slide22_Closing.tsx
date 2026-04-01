'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide22_Closing({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="grain relative flex h-screen w-screen items-center justify-center overflow-hidden bg-dh-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(254,0,13,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="flex flex-col items-center">
        <p data-gsap="fade" className="text-[clamp(1.5rem,3vw,3rem)] font-light text-dh-gray-mid">
          Q2,
        </p>

        <h1
          data-gsap="hero"
          className="mt-2 text-[clamp(3rem,7vw,7rem)] font-extrabold text-white"
        >
          더 크게, 더 빠르게
        </h1>

        <div data-gsap="line" className="mx-auto mt-8 h-0.5 w-16 origin-center bg-primary" />

        <p data-gsap="fade" className="mt-6 text-xl">
          <span className="text-white">성장</span>
          <span className="text-dh-gray-mid"> · </span>
          <span className="text-white">인수</span>
          <span className="text-dh-gray-mid"> · </span>
          <span className="text-white">자동화</span>
        </p>
      </div>

      <span
        data-gsap="subtle"
        className="absolute bottom-12 right-20 text-xs text-primary"
      >
        DelightHub 2026
      </span>
    </div>
  );
}
