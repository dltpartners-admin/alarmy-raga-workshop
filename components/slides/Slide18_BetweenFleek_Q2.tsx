'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide18_BetweenFleek_Q2({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white">
      {/* Section label */}
      <span className="ml-[8vw] mt-12 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q2 플랜
      </span>

      {/* Content — dead center */}
      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[6vh]">
        <div className="flex items-center justify-center gap-4">
          <img src="/assets/Between.png" alt="" className="h-8 w-8 rounded-lg object-contain" data-gsap="hero" />
          <h1
            data-gsap="hero"
            className="text-center text-[clamp(2.5rem,5vw,5rem)] font-bold text-dh-black"
          >
            Between × Fleek
          </h1>
          <img src="/assets/Fleek.png" alt="" className="h-8 w-8 rounded-lg object-contain" data-gsap="hero" />
        </div>

        <p
          data-gsap="fade"
          className="mt-4 text-center text-[clamp(1.5rem,3vw,3rem)] font-light text-dh-gray-mid"
        >
          현행 유지
        </p>

        <p data-gsap="subtle" className="mt-8 text-center text-xl text-dh-gray-mid">
          Emily 파이팅 🔥
        </p>
      </div>
    </div>
  );
}
