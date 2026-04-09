'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';
import { useCountUp } from '@/hooks/useCountUp';

export default function Slide08_PortfolioEffect({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const totalRev = useCountUp(2.86, isActive, { decimals: 2, prefix: '$', suffix: 'M' });
  const opProfit = useCountUp(2.64, isActive, { decimals: 2, prefix: '$', suffix: 'M' });
  const margin = useCountUp(93, isActive, { decimals: 0, suffix: '%' });

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE RESULT
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          The Portfolio Effect: Stability + Margin
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-6 min-h-0">
        {/* Two-column row: cards + stats */}
        <div className="flex gap-8">
          {/* Left column (55%) — compact cards */}
          <div data-gsap="fade" className="flex flex-col gap-3" style={{ flex: '0 0 55%' }}>
            {/* Subscriptions card */}
            <div className="rounded-xl border border-black/10 bg-white p-5 border-l-4 border-l-primary">
              <span className="inline-block rounded-full bg-primary/10 text-primary text-[12px] font-semibold px-3 py-1 mb-2 uppercase tracking-wider">SUBSCRIPTIONS</span>
              <p className="text-xl font-bold text-black mb-2">Conversion-driven</p>
              <div className="flex flex-col divide-y divide-black/10">
                {['Seasonal — promos drive spikes', 'Promo-dependent MoM', 'High margin per user'].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2 text-[14px] text-black/60">
                    <span className="h-1 w-1 rounded-full bg-black/30 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>

            {/* Ads card */}
            <div className="rounded-xl border border-black/10 bg-white p-5 border-l-4 border-l-accent">
              <span className="inline-block rounded-full bg-accent/10 text-accent text-[12px] font-semibold px-3 py-1 mb-2 uppercase tracking-wider">ADS</span>
              <p className="text-xl font-bold text-black mb-2">DAU-driven</p>
              <div className="flex flex-col divide-y divide-black/10">
                {['Stable MoM — no promo swings', 'Scales with engagement depth', 'Near-zero marginal cost'].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2 text-[14px] text-black/60">
                    <span className="h-1 w-1 rounded-full bg-black/30 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — stats, sized to fit */}
          <div data-gsap="number" className="flex flex-col justify-center divide-y divide-black/10 pl-8 border-l border-black/10 flex-1">
            <div className="py-5">
              <p className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black text-black leading-none tabular-nums">{totalRev.formatted}</p>
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/55 mt-2">Monthly Revenue</p>
            </div>
            <div className="py-5">
              <p className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black text-primary leading-none tabular-nums">{opProfit.formatted}</p>
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/55 mt-2">Operating Profit</p>
            </div>
            <div className="py-5">
              <p className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black text-accent leading-none tabular-nums">{margin.formatted}</p>
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/55 mt-2">Operating Margin</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div data-gsap="fade" className="pt-2 flex-shrink-0">
          <p data-gsap="hero" className="text-[clamp(1.3rem,2.2vw,2.2rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            This isn&apos;t diversification. <span className="text-primary">It&apos;s risk management.</span>
          </p>
        </div>
      </main>
    </div>
  );
}
