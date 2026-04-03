'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const rows = [
  { product: '노지', revTarget: 14, revActual: 13.8, profitTarget: 9.4, profitActual: 10.2 },
  { product: '비트윈', revTarget: 3, revActual: 3.08, profitTarget: 1, profitActual: 1.02 },
  { product: '플릭', revTarget: 0.8, revActual: 0.8, profitTarget: 0.6, profitActual: 0.633 },
];

const totalRow = { product: '전체', revTarget: 18, revActual: 17.7, profitTarget: 11, profitActual: 11.85 };

function fmt(v: number) {
  return `${v}억`;
}

export default function Slide05_Q1Revenue({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col items-center overflow-hidden bg-dh-black px-[8vw] py-[4vh]">
      <p data-gsap="subtle" className="self-start text-xs uppercase tracking-[0.3em] text-dh-gray-mid mt-8">
        Q1 회고
      </p>

      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <h2 data-gsap="hero" className="text-center text-[clamp(2rem,4vw,3.5rem)] font-bold text-white">
          Q1 탑라인 실적
        </h2>
        <p data-gsap="fade" className="mt-3 text-center text-lg text-dh-gray-mid">
          매출 17.7억 / 목표 18억
        </p>

        {/* Table with proper column widths */}
        <div data-gsap="fade" className="mx-auto mt-8 w-full max-w-4xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 text-left text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[16%]">제품</th>
                <th className="py-3 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[21%]">매출 목표</th>
                <th className="py-3 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[21%]">매출 실적</th>
                <th className="py-3 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[21%]">영익 목표</th>
                <th className="py-3 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[21%]">영익 실적</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.product} data-gsap="row" className="border-b border-white/10">
                  <td className="py-3 text-white font-medium">{row.product}</td>
                  <td className="py-3 text-right text-white">{fmt(row.revTarget)}</td>
                  <td className={`py-3 text-right ${row.revActual >= row.revTarget ? 'font-bold text-primary' : 'text-dh-gray-mid'}`}>
                    {fmt(row.revActual)}
                  </td>
                  <td className="py-3 text-right text-white">{fmt(row.profitTarget)}</td>
                  <td className={`py-3 text-right ${row.profitActual >= row.profitTarget ? 'font-bold text-primary' : 'text-dh-gray-mid'}`}>
                    {fmt(row.profitActual)}
                  </td>
                </tr>
              ))}
              <tr data-gsap="row" className="border-t-2 border-white">
                <td className="pt-3 text-white font-bold text-lg">{totalRow.product}</td>
                <td className="pt-3 text-right text-white font-bold text-lg">{fmt(totalRow.revTarget)}</td>
                <td className={`pt-3 text-right font-bold text-lg ${totalRow.revActual >= totalRow.revTarget ? 'text-primary' : 'text-dh-gray-mid'}`}>
                  {fmt(totalRow.revActual)}
                </td>
                <td className="pt-3 text-right text-white font-bold text-lg">{fmt(totalRow.profitTarget)}</td>
                <td className={`pt-3 text-right font-bold text-lg ${totalRow.profitActual >= totalRow.profitTarget ? 'text-primary' : 'text-dh-gray-mid'}`}>
                  {fmt(totalRow.profitActual)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
