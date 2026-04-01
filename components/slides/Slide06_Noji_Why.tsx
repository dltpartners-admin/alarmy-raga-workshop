'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

const positions = [
  { vs: 'Anki', point: '보다 쉽고' },
  { vs: 'Quizlet', point: '보다 SR이 전문적' },
  { vs: 'Gizmo', point: '보다 암기에 집중' },
];

export default function Slide06_Noji_Why({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const dau = useCountUp(35000, isActive);
  const newUsers = useCountUp(93000, isActive);
  const subRate = useCountUp(2.4, isActive, { decimals: 1, suffix: '%' });
  const annualRev = useCountUp(50, isActive, { suffix: '억' });

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[8vw] py-[4vh]">
      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q1 회고 · Noji
      </p>

      {/* Top section — Hero question */}
      <div className="mt-[4vh] flex items-center gap-4">
        <img src="/assets/noji.png" alt="Noji" className="h-[clamp(3rem,5vw,5rem)] rounded-xl" data-gsap="hero" />
        <h1 data-gsap="hero" className="text-[clamp(3rem,6vw,6rem)] font-black leading-none text-dh-black">
          Noji
        </h1>
        <p data-gsap="fade" className="text-[clamp(1.2rem,2vw,2rem)] font-light text-dh-gray-mid">
          왜 인수했나
        </p>
      </div>

      {/* Center — Competitive positioning as the hero answer */}
      <div className="flex flex-1 items-center">
        <div className="flex w-full flex-wrap gap-x-[4vw] gap-y-6">
          {positions.map((pos) => (
            <div key={pos.vs} data-gsap="fade" className="flex items-baseline gap-2">
              <span className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold text-primary">{pos.vs}</span>
              <span className="text-[clamp(1rem,1.8vw,1.8rem)] text-dh-gray-mid">{pos.point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom — KPIs as supporting evidence */}
      <div className="flex justify-between border-t border-dh-border pt-6 pb-4">
        {[
          { label: 'DAU', value: Math.round(dau.value).toLocaleString() },
          { label: '월 신규 유저', value: Math.round(newUsers.value).toLocaleString() },
          { label: '구독 전환율', value: subRate.formatted },
          { label: '연간 매출', value: annualRev.formatted },
        ].map((kpi) => (
          <div key={kpi.label} data-gsap="number" className="text-center">
            <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-dh-black">{kpi.value}</p>
            <p className="mt-1 text-xs text-dh-gray-mid">{kpi.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
