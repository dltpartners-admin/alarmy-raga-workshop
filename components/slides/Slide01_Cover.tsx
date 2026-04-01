'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide01_Cover({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="grain relative flex h-screen w-screen items-center justify-center overflow-hidden bg-dh-black">
      {/* radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(254,0,13,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-col items-center">
        <img
          src="/assets/delighthub-logo-red.svg"
          alt="DelightHub"
          className="h-[clamp(4rem,8vw,8rem)]"
          data-gsap="hero"
        />

        <p
          data-gsap="fade"
          className="mt-8 text-[clamp(1rem,2vw,2rem)] font-light tracking-wide text-white"
        >
          2026 Q1 분기 워크샵
        </p>
      </div>

      <span
        data-gsap="subtle"
        className="absolute bottom-12 right-20 text-xs text-dh-gray-mid/50"
      >
        Delightroom &times; DelightHub
      </span>
    </div>
  );
}
