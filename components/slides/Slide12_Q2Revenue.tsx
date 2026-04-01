'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

const iconMap: Record<string, string> = {
  '노지': '/assets/noji.png',
  '비트윈 + 플릭': '/assets/Between.png',
};

const summaryRows = [
  { product: '노지', q1: '13.8억', q2: '17억' },
  { product: '비트윈 + 플릭', q1: '3.9억', q2: '3.8억' },
  { product: '합계', q1: '17.7억', q2: '20.8억', bold: true },
];

const annualRows = [
  { label: '노지', q1: '13.8억', q2: '17억', q3: '23억', q4: '31억', total: '84.8억' },
  { label: '비트윈+플릭', q1: '3.9억', q2: '3.8억', q3: '3.8억', q4: '3.8억', total: '15.3억' },
  { label: '소계', q1: '17.7억', q2: '20.8억', q3: '26.8억', q4: '34.8억', total: '100.1억', bold: true },
  { label: '신규 딜', q1: '-', q2: '?', q3: '?', q4: '?', total: '+a억', muted: true },
];

export default function Slide12_Q2Revenue({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const { formatted: heroNumber } = useCountUp(20.8, isActive, {
    duration: 1400,
    decimals: 1,
    suffix: '억',
  });

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-dh-black">
      <span className="ml-[8vw] mt-8 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q2 플랜
      </span>

      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[3vh]">
        <h2 data-gsap="hero" className="text-center text-[clamp(1.5rem,3vw,3rem)] font-bold text-white">
          분기 매출 목표
        </h2>

        <p data-gsap="number" className="my-[2vh] text-center text-[clamp(3rem,8vw,8rem)] font-extrabold text-primary">
          {heroNumber}
        </p>

        {/* Summary table */}
        <div data-gsap="fade" className="mb-4 w-full max-w-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-sm text-dh-gray-mid">
                <th className="pb-2 text-left font-normal">제품</th>
                <th className="pb-2 text-right font-normal">Q1 실적</th>
                <th className="pb-2 text-right font-normal">Q2 목표</th>
              </tr>
            </thead>
            <tbody>
              {summaryRows.map((row) => (
                <tr
                  key={row.product}
                  data-gsap="row"
                  className={`border-b border-white/10 ${row.bold ? 'border-t-2 border-t-primary' : ''}`}
                >
                  <td className={`py-2.5 text-white ${row.bold ? 'font-bold' : ''}`}>
                    <span className="flex items-center gap-2">
                      {iconMap[row.product] && <img src={iconMap[row.product]} alt="" className="h-5 w-5 rounded object-contain" />}
                      {row.product}
                    </span>
                  </td>
                  <td className="py-2.5 text-right text-white">{row.q1}</td>
                  <td className="py-2.5 text-right font-semibold text-primary">{row.q2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Annual scenario table */}
        <div data-gsap="fade" className="w-full max-w-3xl">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-dh-gray-mid">
                <th className="pb-2 text-left font-normal" />
                <th className="pb-2 text-center font-normal">Q1</th>
                <th className="pb-2 text-center font-normal">Q2</th>
                <th className="pb-2 text-center font-normal">Q3</th>
                <th className="pb-2 text-center font-normal">Q4</th>
                <th className="pb-2 text-center font-normal">2026</th>
              </tr>
            </thead>
            <tbody>
              {annualRows.map((row) => (
                <tr
                  key={row.label}
                  data-gsap="row"
                  className={`border-b border-white/10 ${row.bold ? 'border-t-2 border-t-primary' : ''} ${row.muted ? 'text-dh-gray-mid' : ''}`}
                >
                  <td className={`py-2 ${row.bold ? 'font-bold' : 'font-medium'} text-white`}>{row.label}</td>
                  <td className="py-2 text-center text-dh-gray-mid">{row.q1}</td>
                  <td className="py-2 text-center font-semibold text-primary">{row.q2}</td>
                  <td className="py-2 text-center text-dh-gray-mid/50">{row.q3}</td>
                  <td className="py-2 text-center text-dh-gray-mid/50">{row.q4}</td>
                  <td className={`py-2 text-center ${row.bold ? 'font-bold text-white' : 'text-white'}`}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
