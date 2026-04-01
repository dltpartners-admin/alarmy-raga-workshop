'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

export default function Slide20_Pipeline({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const revenue = useCountUp(200, isActive, { suffix: '억+', duration: 1400 });
  const profit = useCountUp(100, isActive, { suffix: '억+', duration: 1400 });

  return (
    <div ref={ref} className="grain relative flex h-screen w-screen items-center justify-center overflow-hidden bg-dh-black">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(254,0,13,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Giant quotation mark */}
      <span className="pointer-events-none absolute left-[10vw] top-[20vh] select-none font-serif text-[clamp(6rem,12vw,12rem)] leading-none text-primary/20">
        &ldquo;
      </span>

      <div className="flex flex-col items-center px-[8vw]">
        <p data-gsap="fade" className="mb-2 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
          Q2 인수 파이프라인
        </p>
        <h2 data-gsap="fade" className="mb-[4vh] text-center text-[clamp(1.2rem,2vw,2rem)] font-semibold text-white/80">
          동일한 운영 리소스로 더 큰 레버리지 — 딜 기준 상향
        </h2>
        {/* Quote */}
        <p
          data-gsap="hero"
          className="max-w-4xl text-center text-[clamp(1.5rem,3.5vw,3.5rem)] font-bold leading-tight text-white"
        >
          10배 더 큰 매출을 내는 제품을 개선하는 게
          <br />
          10배 더 힘들지는 않다
        </p>

        {/* Numbers */}
        <div data-gsap="number" className="mt-[8vh] flex items-end gap-16">
          <div className="text-center">
            <p className="text-[clamp(3rem,6vw,6rem)] font-extrabold leading-none text-primary">
              {revenue.formatted}
            </p>
            <p className="mt-2 text-sm text-dh-gray-mid">인수 타겟 매출</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(3rem,6vw,6rem)] font-extrabold leading-none text-white">
              {profit.formatted}
            </p>
            <p className="mt-2 text-sm text-dh-gray-mid">인수 타겟 영업이익</p>
          </div>
        </div>

        {/* Bottom note */}
      </div>
    </div>
  );
}
