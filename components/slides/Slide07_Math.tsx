'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

export default function Slide07_Math({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const impressions = useCountUp(150, isActive, { decimals: 0 });
  const monthly = useCountUp(1.05, isActive, { decimals: 2, prefix: '$', suffix: 'M' });

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE MATH
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          Why DAU Scale Changes Everything
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-6">
        {/* Top stat */}
        <div data-gsap="number" className="flex items-baseline gap-5">
          <span className="text-[clamp(4rem,9vw,9rem)] font-black leading-none text-primary tabular-nums">
            ~{Math.round(impressions.value)}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-[18px] font-bold text-black">ad impressions per user per day</span>
            <span className="text-sm text-black/40 italic">Yet Alarmy doesn&apos;t feel ad-heavy — internal pacing protects UX</span>
          </div>
        </div>

        {/* Formula card */}
        <div data-gsap="fade" className="rounded-xl border border-black/10 bg-white p-7">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(1.5rem,2.4vw,2.4rem)] font-black text-black tabular-nums">$0.007</span>
              <span className="text-[13px] uppercase tracking-[0.18em] text-black/40">ARPU lift</span>
            </div>
            <span className="text-black/30 text-2xl font-light">×</span>
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(1.5rem,2.4vw,2.4rem)] font-black text-black tabular-nums">4M+</span>
              <span className="text-[13px] uppercase tracking-[0.18em] text-black/40">DAU</span>
            </div>
            <span className="text-black/30 text-2xl font-light">=</span>
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black text-accent tabular-nums leading-none">{monthly.formatted} / month</span>
              <span className="text-[13px] uppercase tracking-[0.18em] text-black/40">Incremental revenue</span>
            </div>
          </div>
          <p className="mt-5 text-[15px] text-black/50 border-t border-black/10 pt-4">
            A 15% ARPU lift = 15% revenue lift, at any scale. No new users needed.
          </p>
        </div>

        {/* 3-col insight grid */}
        <div data-gsap="subtle" className="grid grid-cols-3 gap-5">
          {[
            { title: 'DAV ≠ DAU', body: 'Not all users reach ad placements. Depth of session matters more than raw user count.' },
            { title: 'Demographics', body: '100K US DAU ≈ 1M India DAU in ad revenue. Location determines eCPM — not headcount.' },
            { title: 'Engagement', body: '5 sessions/day ≫ 1 session/day. Frequency compounds impressions and revenue.' },
          ].map((card) => (
            <div key={card.title} className="border-t-2 border-black/10 pt-4">
              <p className="text-[17px] font-bold text-black mb-2">{card.title}</p>
              <p className="text-[15px] text-black/60 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p data-gsap="hero" className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            DAU is the foundation.
          </p>
          <p data-gsap="hero" className="mt-1 text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-primary whitespace-nowrap">
            But what matters is how deeply users engage.
          </p>
        </div>
      </main>
    </div>
  );
}
