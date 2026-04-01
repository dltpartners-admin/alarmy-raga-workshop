'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const channelRows = [
  { label: '브로커', from: '1개', to: '3개' },
  { label: '플랫폼', from: '-', to: '2개' },
  { label: 'IB', from: '-', to: '2개' },
];

const stages = [
  { num: 1, title: 'Go/No-Go 게이트', desc: '수익성 · 규모 · 품질 · UA 자립 · 운영 복잡도 · 성장 가능성' },
  { num: 2, title: '가격 상한 계산', desc: 'Baseline vs Upside 분리 계산 → 최대 multiple 내부 기준 수립' },
  { num: 3, title: '실사 & 계약 구조화', desc: 'earnout / indemnity / 가격 차감으로 계약에 반영' },
];

const results = ['속도', '일관성', '협상력', '손실 방어'];

export default function Slide09_Business_Q1({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white">
      <span className="ml-[8vw] mt-8 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q1 회고 · 비즈니스
      </span>

      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[3vh]">
        <h1 data-gsap="hero" className="mb-[4vh] text-center text-[clamp(2rem,4vw,3.5rem)] font-bold text-dh-black">
          딜 소싱 &amp; 검토 프로세스 1.0
        </h1>

        <div className="flex w-full max-w-5xl gap-[6vw]">
          {/* Left: 채널 확장 — 표 형태 */}
          <div data-gsap="fade" className="flex-1">
            <h3 className="mb-4 text-lg font-semibold text-dh-black">채널 확장</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-dh-border">
                  <th className="py-2 text-left text-xs uppercase tracking-wider text-dh-gray-mid font-normal">구분</th>
                  <th className="py-2 text-center text-xs uppercase tracking-wider text-dh-gray-mid font-normal">AS-IS</th>
                  <th className="py-2 text-center text-xs text-dh-gray-mid font-normal">→</th>
                  <th className="py-2 text-center text-xs uppercase tracking-wider text-dh-gray-mid font-normal">TO-BE</th>
                </tr>
              </thead>
              <tbody>
                {channelRows.map((row) => (
                  <tr key={row.label} data-gsap="row" className="border-b border-dh-border/50">
                    <td className="py-3 text-sm font-medium text-dh-black">{row.label}</td>
                    <td className="py-3 text-center text-sm text-dh-gray-mid">{row.from}</td>
                    <td className="py-3 text-center text-primary font-bold">→</td>
                    <td className="py-3 text-center text-sm font-bold text-primary">{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: Deal Review Framework */}
          <div data-gsap="fade" className="flex-1">
            <h3 className="mb-4 text-lg font-semibold text-dh-black">Deal Review Framework</h3>
            <div className="flex flex-col items-start">
              {stages.map((stage, i) => (
                <div key={stage.num}>
                  <div data-gsap="row" className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {stage.num}
                    </span>
                    <div>
                      <p className="font-semibold text-dh-black">{stage.title}</p>
                      <p className="text-sm text-dh-gray-mid">{stage.desc}</p>
                    </div>
                  </div>
                  {i < stages.length - 1 && (
                    <div className="ml-3.5 h-4 w-px bg-dh-border" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
