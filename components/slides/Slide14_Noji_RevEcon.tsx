'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const steps = [
  { label: 'CVR↑ ARPPU↑', active: true },
  { label: 'LTV 확보', active: false },
  { label: '유입 스케일', active: false },
];

export default function Slide14_Noji_RevEcon({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white px-[8vw] py-[6vh]">
      <span className="mt-12 text-xs tracking-[0.3em] uppercase text-dh-gray-mid">
        Q2 플랜 · Noji
      </span>

      <div className="flex flex-1 flex-col items-center justify-center">
        <p data-gsap="fade" className="text-lg text-dh-gray-mid mb-4">
          구독 매출 = 첫 결제 + 리커링
        </p>

        <h2
          data-gsap="hero"
          className="text-[clamp(1.5rem,3.5vw,3.5rem)] font-bold text-dh-black text-center mb-[6vh]"
        >
          첫 결제 = 유입 × <span className="text-primary">CVR</span> × <span className="text-primary">ARPPU</span>
        </h2>

        <div className="flex gap-[4vw] max-w-4xl mx-auto w-full mb-[6vh]">
          <div data-gsap="fade" className="flex-1">
            <p className="text-xs uppercase tracking-wider text-dh-gray-mid mb-2">AS-IS</p>
            <p className="text-3xl font-bold text-dh-black">LTV &lt; CAC</p>
            <p className="mt-2 text-base text-dh-gray-mid">유료 마케팅 투자 불가 — CVR·ARPPU를 먼저 올려야 한다</p>
          </div>

          <div data-gsap="fade" className="flex-1">
            <p className="text-xs uppercase tracking-wider text-dh-gray-mid mb-2">TO-BE</p>
            <p className="text-3xl font-bold text-primary">LTV &gt; CAC</p>
            <p className="mt-2 text-base text-dh-gray-mid">제품 가치를 전달하고 적정 가격에 팔아 LTV를 키운다</p>
          </div>
        </div>

        <div data-gsap="subtle" className="flex items-center gap-6">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-6">
              <span
                className={`text-sm text-center pb-1 ${
                  step.active
                    ? 'text-primary border-b border-primary font-medium'
                    : 'text-dh-gray-mid'
                }`}
              >
                {step.label}
              </span>
              {i < steps.length - 1 && (
                <span className="text-dh-gray-mid text-xs">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
