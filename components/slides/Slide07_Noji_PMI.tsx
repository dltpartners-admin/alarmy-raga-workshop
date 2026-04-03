'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const items = [
  { num: 1, title: '개발 및 실험환경 구축', desc: 'A/A 테스트, 배포, 실험 파이프라인' },
  { num: 2, title: 'EKS 인프라 마이그레이션 (WIP)', desc: '전 레포 ECR CI/CD 워크플로우 추가' },
  { num: 3, title: '유저 이해도 제고', desc: '유저 인터뷰 12명, CS 매니저 인터뷰, 창업자 3명 인터뷰' },
  { num: 4, title: '권한/계정/계약 정리', desc: 'Amplitude, Stripe, 2FA 이관' },
  { num: 5, title: '앱 이관 (WIP)', desc: 'Anki Pro 잔여 제거, noji.io 이전' },
];

export default function Slide07_Noji_PMI({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white">
      {/* Section label */}
      <span className="ml-[8vw] mt-8 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q1 회고 · Noji
      </span>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[3vh]">
        {/* Hero */}
        <h1
          data-gsap="hero"
          className="mb-[3vh] text-center text-[clamp(2rem,4vw,3.5rem)] font-bold text-dh-black"
        >
          PMI 완료
        </h1>

        {/* Items list — compact for 1500x800 */}
        <div className="flex w-full max-w-3xl flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={item.num}
              data-gsap="fade"
              className={i < items.length - 1 ? 'border-b border-dh-border pb-4' : ''}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-primary">{item.num}</span>
                <span className="text-lg font-semibold text-dh-black">{item.title}</span>
                <span className="text-sm text-dh-gray-mid">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
