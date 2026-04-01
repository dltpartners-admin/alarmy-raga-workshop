'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

const issues = [
  { pct: 80, suffix: '%', decimals: 0, title: '온보딩 후 이탈', detail: '카드 포함 덱을 만들지 않고 떠남' },
  { pct: 2.2, suffix: '%', decimals: 1, title: 'Image Occlusion 사용률', detail: '의학 유저가 60%인데 핵심 기능을 모름' },
  { pct: 1.72, suffix: '%', decimals: 2, title: '온보딩 페이월 CVR', detail: '초기 여정에 페이월이 없어 전환 기회 부재' },
  { pct: 19.9, suffix: '%', decimals: 1, title: '91일 이후 전환', detail: '초기에 전환시키지 못하고 뒤늦게 결제' },
];

function IssueRow({ pct, suffix, decimals, title, detail, isActive }: {
  pct: number; suffix: string; decimals: number; title: string; detail: string; isActive: boolean;
}) {
  const { formatted } = useCountUp(pct, isActive, { decimals, suffix });
  return (
    <div data-gsap="fade" className="flex items-start gap-6 border-b border-dh-border/50 py-4">
      <span className="w-24 shrink-0 text-right text-2xl font-extrabold text-primary">{formatted}</span>
      <div>
        <p className="text-base font-semibold text-dh-black">{title}</p>
        <p className="mt-0.5 text-sm text-dh-gray-mid">{detail}</p>
      </div>
    </div>
  );
}

export default function Slide13_Noji_Diagnosis({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white px-[8vw] py-[3vh]">
      <span className="mt-6 text-xs tracking-[0.3em] uppercase text-dh-gray-mid">
        Q2 플랜 · Noji
      </span>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h2
          data-gsap="hero"
          className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold text-dh-black text-center max-w-4xl mx-auto mb-[4vh]"
        >
          가치가 제대로 전달되지 못하고 있다
        </h2>

        {/* Issue rows — content-first, number as support */}
        <div className="w-full max-w-3xl mx-auto">
          {issues.map((issue) => (
            <IssueRow key={issue.title} {...issue} isActive={isActive} />
          ))}
        </div>

        {/* Bottom insight */}
        <div data-gsap="fade" className="mt-6 w-full max-w-3xl mx-auto rounded-lg bg-primary/5 border border-primary/20 px-6 py-4">
          <p className="text-sm font-semibold text-dh-black">핵심 문제</p>
          <p className="mt-1 text-sm text-dh-gray-mid leading-relaxed">
            유저가 프리미엄 기능의 가치를 인지하지 못한 채 무료로 사용 →
            온보딩 이후 유저를 이끄는 여정 부재 →
            <br />
            <span className="font-semibold text-primary">LTV &lt; CAC → 유료 마케팅 투자 불가능</span>
          </p>
        </div>
      </div>
    </div>
  );
}
