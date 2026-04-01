'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

const iconMap: Record<string, string> = {
  '알라미 구독': '/assets/alarmy.png',
  '알라미 광고': '/assets/alarmy.png',
  '다로': '/assets/daro.png',
  '딜라브': '/assets/delighthub-logo-red.svg',
};

const tableData = [
  { division: '알라미 구독', revenue: '150억', profit: '110억', highlight: false },
  { division: '알라미 광고', revenue: '350억', profit: '350억', highlight: false },
  { division: '다로', revenue: '400억', profit: '70억', highlight: false },
  { division: '딜라브', revenue: '100억', profit: '72.5억', highlight: true },
];

export default function Slide02_Context({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const revenue = useCountUp(1000, isActive, { suffix: '억' });
  const profit = useCountUp(415, isActive, { suffix: '억' });

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-dh-black px-[8vw] py-[6vh]">
      <div className="flex w-full max-w-5xl flex-col items-center">
        {/* Section label */}
        <p
          data-gsap="fade"
          className="absolute left-[8vw] top-12 text-xs uppercase tracking-[0.3em] text-dh-gray-mid"
        >
          전사 컨텍스트
        </p>

        {/* Hero text */}
        <h2
          data-gsap="hero"
          className="text-center text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold leading-tight text-white whitespace-nowrap"
        >
          딜라브는 Delightroom의 세 번째 성장 엔진
        </h2>

        {/* Two massive numbers */}
        <div data-gsap="number" className="mt-12 flex items-baseline gap-16">
          <div className="text-center">
            <p className="text-[clamp(3rem,8vw,8rem)] font-extrabold leading-none text-primary">
              {revenue.formatted}
            </p>
            <p className="mt-2 text-lg text-dh-gray-mid">매출</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(3rem,8vw,8rem)] font-extrabold leading-none text-white">
              {profit.formatted}
            </p>
            <p className="mt-2 text-lg text-dh-gray-mid">영업이익</p>
          </div>
        </div>

        {/* Minimal table */}
        <div data-gsap="fade" className="mt-16 w-full max-w-2xl">
          {tableData.map((row) => (
            <div
              key={row.division}
              data-gsap="row"
              className={`flex justify-between py-3 text-sm ${
                row.highlight
                  ? 'border-l-2 border-l-primary bg-primary/10 pl-4 pr-4 -mx-4 rounded-r-lg font-semibold text-white text-base'
                  : 'border-b border-white/5 text-white/70'
              }`}
            >
              <span>{row.division}</span>
              <span className="flex gap-12">
                <span>{row.revenue}</span>
                <span>{row.profit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
