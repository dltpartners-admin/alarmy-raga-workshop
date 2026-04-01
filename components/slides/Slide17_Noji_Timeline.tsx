'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

const months = [
  {
    month: '3월',
    status: 'completed' as const,
    items: ['온보딩 개편', '가격 A/B 테스트', 'MMP 연동 마무리'],
  },
  {
    month: '4월',
    status: 'current' as const,
    items: ['Web 회원가입 허들 제거', '페이월 여정 구축', 'Web Paid 유입 테스트'],
  },
  {
    month: '5월',
    status: 'future' as const,
    items: ['첫 덱 생성 연계', '기능별 페이월 온보딩', '마케팅 소구점 발굴'],
  },
  {
    month: '6월',
    status: 'future' as const,
    items: ['학습 수익화 전환', '에디터 UX 개편', '인플루언서 스케일'],
  },
];

const kpiTargets = [
  { label: 'CVR', from: '2.0%', toVal: 5.0, decimals: 1, suffix: '%' },
  { label: 'ARPPU', from: '$20', toVal: 40, decimals: 0, suffix: '', prefix: '$' },
  { label: 'NRU', from: '30K', toVal: 40, decimals: 0, suffix: 'K' },
  { label: '첫결제', from: '2천만', toVal: 1, decimals: 0, suffix: '억' },
];

function monthHeaderClass(status: string) {
  if (status === 'completed') return 'text-dh-gray-mid/50';
  if (status === 'current') return 'text-primary';
  return 'text-dh-black';
}

function KpiTarget({ label, from, toVal, decimals, suffix, prefix, isActive }: {
  label: string; from: string; toVal: number; decimals: number; suffix: string; prefix?: string; isActive: boolean;
}) {
  const { formatted } = useCountUp(toVal, isActive, { decimals, suffix, prefix });
  return (
    <div className="text-center">
      <p className="text-xs text-dh-gray-mid uppercase tracking-wider">{label}</p>
      <p className="mt-1 text-sm text-dh-gray-mid">
        {from} → <span className="text-primary font-bold">{formatted}</span>
      </p>
    </div>
  );
}

export default function Slide17_Noji_Timeline({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white px-[8vw] py-[6vh]">
      <span className="mt-12 text-xs tracking-[0.3em] uppercase text-dh-gray-mid">
        Q2 플랜 · Noji
      </span>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h2
          data-gsap="hero"
          className="text-[clamp(2rem,4vw,4rem)] font-bold text-dh-black mb-[4vh]"
        >
          타임라인
        </h2>

        <div className="flex gap-[3vw] max-w-5xl mx-auto w-full mb-[6vh]">
          {months.map((col) => (
            <div
              key={col.month}
              data-gsap="fade"
              className={`flex-1 ${col.status === 'current' ? 'border-l-2 border-primary pl-4' : ''}`}
            >
              <h3 className={`text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-4 ${monthHeaderClass(col.status)}`}>
                {col.month}
              </h3>
              <div className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <p
                    key={item}
                    className={`text-sm leading-relaxed ${
                      col.status === 'completed' ? 'text-dh-gray-mid/40' : 'text-dh-gray-mid'
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div data-gsap="subtle" className="flex justify-around max-w-3xl mx-auto w-full">
          {kpiTargets.map((kpi) => (
            <KpiTarget key={kpi.label} {...kpi} isActive={isActive} />
          ))}
        </div>
      </div>
    </div>
  );
}
