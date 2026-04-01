'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide08_BetweenFleek_Q1({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white">
      {/* Section label */}
      <span className="ml-[8vw] mt-12 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q1 회고
      </span>

      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[6vh]">
        {/* Hero title */}
        <h2
          data-gsap="hero"
          className="mb-[6vh] text-[clamp(2rem,4vw,4rem)] font-bold text-dh-black"
        >
          Q1 성과
        </h2>

        {/* Two columns */}
        <div className="flex w-full max-w-4xl gap-12">
          {/* Between */}
          <div data-gsap="fade" className="flex-1">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-dh-black">
              <img src="/assets/Between.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
              Between
            </h3>
            <p className="mb-4 text-xl font-bold text-primary">주 400만 스티커 · 주 900만 구독</p>
            <ul className="space-y-3 text-sm text-dh-gray-mid">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-dh-gray-mid" />
                외부 작가 스티커 운영 안정화
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-dh-gray-mid" />
                직광고 운영 지속
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-dh-gray-mid" />
                최소 운영으로 최적 스티커 매출 구조 구축
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-dh-gray-mid" />
                시즌성 프로모션 및 CRM 운영
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="w-px bg-dh-border" />

          {/* Fleek */}
          <div data-gsap="fade" className="flex-1">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-dh-black">
              <img src="/assets/Fleek.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
              Fleek
            </h3>
            <ul className="space-y-3 text-sm text-dh-gray-mid">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-dh-gray-mid" />
                구독/계정 이슈 해결로 운영 공수 최소화
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-dh-gray-mid" />
                비회원 이용 가능 추가 → DAU 성장
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
