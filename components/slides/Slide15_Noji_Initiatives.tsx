'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

const tableRows = [
  ['온보딩 개편 + 가격 최적화', 'CVR 1.72% → 3.4%', '~$29,100'],
  ['무료 학습 수익화 전환', '광고+구독 (듀오링고 모델)', '~$17,150'],
  ['Web 회원가입 허들 제거', 'Web CVR 1.5% → 5%', '~$9,100'],
  ['일차별 페이월 여정 구축', 'D0~D+10 고정 넛지', '~$6,540'],
  ['온보딩 후 첫 덱 생성 유도', '덱 생성률 20% → 40%', '~$2,500'],
  ['기능별 페이월 온보딩', '알라미 플레이북 적용', '~$1,520'],
];

export default function Slide15_Noji_Initiatives({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const { formatted: totalFormatted } = useCountUp(65910, isActive, { prefix: '$~', decimals: 0 });

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white px-[8vw] py-[2vh]">
      <span className="mt-4 text-xs tracking-[0.3em] uppercase text-dh-gray-mid">
        Q2 플랜 · Noji
      </span>

      <div className="flex flex-1 flex-col items-center justify-center">
        <p data-gsap="fade" className="text-[clamp(1.2rem,2.5vw,2.5rem)] font-light text-dh-black text-center">
          매출 기회
        </p>

        <div data-gsap="hero" className="text-center mb-[1.5vh]">
          <span className="text-[clamp(2rem,5vw,5rem)] font-extrabold text-primary">{totalFormatted}</span>
          <span className="text-lg text-dh-gray-mid ml-2">/ 월</span>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-dh-border">
                <th className="py-2 text-left text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[40%]">과제</th>
                <th className="py-2 text-left text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[38%]">핵심 레버</th>
                <th className="py-2 text-right text-xs uppercase tracking-wider text-dh-gray-mid font-normal w-[22%]">매출 증분/월</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row[0]} data-gsap="row" className="border-b border-dh-border/50">
                  <td className="py-2 text-dh-black">{row[0]}</td>
                  <td className="py-2 text-dh-gray-mid">{row[1]}</td>
                  <td className="py-2 text-right text-primary font-medium">{row[2]}</td>
                </tr>
              ))}
              <tr data-gsap="row" className="bg-dh-black">
                <td className="py-2.5 px-2 text-white font-bold rounded-l">전체 매출 기회</td>
                <td className="py-2.5" />
                <td className="py-2.5 px-2 text-right text-primary font-bold rounded-r">~$65,910/월</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
