'use client';
import Image from 'next/image';
import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

export default function Slide02_AboutAlarmy({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const revenue = useCountUp(2.3, isActive, { decimals: 1, prefix: '$', suffix: 'M' });
  const opProfit = useCountUp(1.3, isActive, { decimals: 1, prefix: '$', suffix: 'M' });
  const adsRatio = useCountUp(67.1, isActive, { decimals: 1, suffix: '%' });
  const subRatio = useCountUp(32.9, isActive, { decimals: 1, suffix: '%' });

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <div data-gsap="tag" className="flex items-center gap-2 mb-3">
          <Image src="/assets/alarmy.png" alt="Alarmy" width={22} height={22} className="rounded-md" />
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary">ABOUT ALARMY</p>
        </div>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          The World&apos;s #1 Alarm App
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-5">
        {/* Row 1: 4 KPI columns */}
        <div data-gsap="fade" className="grid grid-cols-4 divide-x divide-black/10 border border-black/10 rounded-xl overflow-hidden">
          {[
            { num: '100M+', label: 'Downloads' },
            { num: '4M+', label: 'Daily Active Users' },
            { num: '100+', label: 'Countries #1' },
            { num: '10+ Yrs', label: 'Since 2013' },
          ].map(({ num, label }) => (
            <div key={label} className="bg-white p-6 flex flex-col gap-1">
              <span className="text-[clamp(1.6rem,2.8vw,2.8rem)] font-black text-black leading-none tabular-nums">{num}</span>
              <span className="text-[13px] uppercase tracking-[0.18em] text-black/55">{label}</span>
            </div>
          ))}
        </div>

        {/* Row 2: 3 big financial stats */}
        <div data-gsap="number" className="grid grid-cols-3 gap-6 pt-5">
          <div className="flex flex-col gap-1">
            <span className="text-[clamp(3.5rem,6.5vw,6.5rem)] font-black tabular-nums text-black leading-none">{revenue.formatted}</span>
            <span className="text-[13px] uppercase tracking-[0.18em] text-black/55">Monthly Revenue</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[clamp(3.5rem,6.5vw,6.5rem)] font-black tabular-nums text-primary leading-none">{opProfit.formatted}</span>
            <span className="text-[13px] uppercase tracking-[0.18em] text-black/55">Monthly Operating Profit</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(2.2rem,4vw,4rem)] font-black tabular-nums text-primary leading-none">Ads {adsRatio.formatted}</span>
              <span className="text-[clamp(2.2rem,4vw,4rem)] font-black tabular-nums text-accent leading-none">Sub {subRatio.formatted}</span>
            </div>
            <span className="text-[13px] uppercase tracking-[0.18em] text-black/55">Revenue Mix</span>
          </div>
        </div>

        {/* Row 3: Revenue bar */}
        <div data-gsap="fade" className="flex flex-col gap-3">
          <div className="flex justify-between text-[13px] font-semibold">
            <span className="text-accent uppercase tracking-[0.18em]">Subscriptions · 32.9%</span>
            <span className="text-primary uppercase tracking-[0.18em]">Ads · 67.1%</span>
          </div>
          <div className="flex w-full h-5 rounded-full overflow-hidden">
            <div className="bg-accent" style={{ width: '32.9%' }} />
            <div className="bg-primary flex-1" />
          </div>
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p data-gsap="hero" className="text-[clamp(1.3rem,2.2vw,2.2rem)] font-black leading-[1.2] tracking-[-0.01em] text-black whitespace-nowrap">
            How did an <span className="text-primary">alarm app</span> build a business where ads earn <span className="text-primary text-[1.2em]">2×</span> more than subscriptions?
          </p>
        </div>
      </main>
    </div>
  );
}
