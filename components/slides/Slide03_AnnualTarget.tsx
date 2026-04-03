'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const iconMap: Record<string, string> = {
  '노지': '/assets/noji.png',
  '비트윈': '/assets/Between.png',
  '플릭': '/assets/Fleek.png',
};

const rows = [
  { product: '노지', rev25: '55.5억', profit25: '36.7억', rev26: '55.5억', profit26: '44.64억' },
  { product: '비트윈', rev25: '13.2억', profit25: '2.9억', rev26: '12억', profit26: '5억' },
  { product: '플릭', rev25: '2.5억', profit25: '1.6억', rev26: '3.3억', profit26: '2.86억' },
  { product: '신규 인수', rev25: '-', profit25: '-', rev26: '29.2억', profit26: '20억' },
];

const totalRow = { product: '총합', rev25: '71.2억', profit25: '41.2억', rev26: '100억', profit26: '72.5억' };

export default function Slide03_AnnualTarget({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col items-center overflow-hidden bg-white px-[8vw] py-[3vh]">
      <p data-gsap="subtle" className="self-start text-xs uppercase tracking-[0.3em] text-dh-gray-mid mt-6">
        연간 목표
      </p>

      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <h2 data-gsap="hero" className="text-center text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-dh-black">
          매출 100억 · 영업이익 72.5억
        </h2>

        {/* Product breakdown table */}
        <div data-gsap="fade" className="mx-auto mt-6 w-full max-w-4xl">
          <table className="w-full border-collapse text-[15px]">
            <thead>
              <tr className="border-b border-dh-border">
                <th className="py-2 text-left text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[18%]">제품</th>
                <th className="py-2 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[20%]">25년 매출</th>
                <th className="py-2 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[20%]">25년 영익</th>
                <th className="py-2 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[21%]">26년 매출</th>
                <th className="py-2 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[21%]">26년 영익</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.product} data-gsap="row" className="border-b border-dh-border/50">
                  <td className="py-2.5 font-medium text-dh-black">
                    <span className="flex items-center gap-2">
                      {iconMap[row.product] && <img src={iconMap[row.product]} alt="" className="h-5 w-5 rounded object-contain" />}
                      {row.product}
                    </span>
                  </td>
                  <td className="py-2.5 text-right text-dh-black">{row.rev25}</td>
                  <td className="py-2.5 text-right text-dh-black">{row.profit25}</td>
                  <td className="py-2.5 text-right font-semibold text-primary">{row.rev26}</td>
                  <td className="py-2.5 text-right font-semibold text-primary">{row.profit26}</td>
                </tr>
              ))}
              <tr data-gsap="row" className="border-t-2 border-dh-black">
                <td className="pt-3 font-bold text-lg text-dh-black">{totalRow.product}</td>
                <td className="pt-3 text-right font-bold text-lg text-dh-black">{totalRow.rev25}</td>
                <td className="pt-3 text-right font-bold text-lg text-dh-black">{totalRow.profit25}</td>
                <td className="pt-3 text-right font-bold text-lg text-primary">{totalRow.rev26}</td>
                <td className="pt-3 text-right font-bold text-lg text-primary">{totalRow.profit26}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario note */}
        <div data-gsap="fade" className="mx-auto mt-5 w-full max-w-4xl border-l-2 border-primary pl-4">
          <p className="text-sm text-dh-gray-mid">
            신규 인수가 없을 경우 → <span className="font-semibold text-dh-black">노지가 84.8억으로 성장하여 커버</span>
            <span className="text-dh-gray-mid"> (Q2 탑라인 시나리오 참고)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
