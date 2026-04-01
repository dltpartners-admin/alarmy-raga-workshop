'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const metrics = [
  { name: 'CVR (7일내)', current: '2.0%', target: '5.0%' },
  { name: 'ARPPU', current: '$20', target: '$40' },
  { name: 'NRU (주간)', current: '30K', target: '40K' },
  { name: '첫 결제액 (주간)', current: '2천만원', target: '1억원' },
];

const scenarios = [
  { label: '현재', traffic: '93K', revenue: '~$66K' },
  { label: '2배', traffic: '186K', revenue: '~$132K' },
  { label: '3배', traffic: '279K', revenue: '~$198K' },
];

export default function Slide16_Noji_Metrics({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white px-[8vw] py-[6vh]">
      <span className="mt-12 text-xs tracking-[0.3em] uppercase text-dh-gray-mid">
        Q2 플랜 · Noji
      </span>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h2
          data-gsap="hero"
          className="text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-dh-black text-center mb-[6vh]"
        >
          선행 지표
        </h2>

        <div className="flex gap-[4vw] max-w-4xl mx-auto w-full mb-[8vh]">
          {metrics.map((m) => (
            <div key={m.name} data-gsap="fade" className="flex-1 text-center">
              <p className="text-xs uppercase tracking-wider text-dh-gray-mid mb-3">{m.name}</p>
              <p className="text-2xl text-dh-gray-mid">{m.current}</p>
              <p className="text-dh-gray-mid my-1">→</p>
              <p className="text-[clamp(2rem,3vw,3rem)] font-bold text-primary">{m.target}</p>
            </div>
          ))}
        </div>

        <div data-gsap="subtle" className="max-w-3xl mx-auto w-full">
          <p className="text-sm text-dh-gray-mid uppercase tracking-wider mb-4 text-center">유입 시나리오</p>
          <div className="flex justify-center gap-[4vw]">
            {scenarios.map((s) => (
              <div key={s.label} className="text-center text-sm">
                <span className="text-dh-gray-mid">{s.label}</span>
                <span className="mx-2 text-dh-gray-mid">{s.traffic}</span>
                <span className="text-dh-gray-mid">→</span>
                <span className="ml-2 text-primary font-medium">{s.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
