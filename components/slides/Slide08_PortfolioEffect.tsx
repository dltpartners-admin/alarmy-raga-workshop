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

      {/* Main: flex-col so quote sits below the two-column row */}
      <main className="flex flex-1 flex-col gap-6 pt-5 min-h-0">
        {/* Top row: cards + stats */}
        <div className="flex flex-1 gap-8 min-h-0">
          {/* Left column (55%) */}
          <div data-gsap="fade" className="flex flex-col gap-4" style={{ flex: '0 0 55%' }}>
            {/* Subscriptions card */}
            <div className="flex-1 rounded-xl border border-black/10 bg-white p-6 border-l-4 border-l-primary flex flex-col">
              <span className="inline-block self-start rounded-full bg-primary/10 text-primary text-[12px] font-semibold px-3 py-1 mb-3 uppercase tracking-wider">SUBSCRIPTIONS</span>
              <p className="text-2xl font-bold text-black mb-3">Conversion-driven</p>
              <div className="flex flex-col divide-y divide-black/10 flex-1">
                {[
                  'Seasonal sensitivity — promos drive spikes',
                  'Promo-dependent month over month',
                  'High margin per converting user',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2.5 text-[15px] text-black/60">
                    <span className="h-1 w-1 rounded-full bg-black/30 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-black/40 italic">Concentrated value, but volatile.</p>
            </div>

            {/* Ads card */}
            <div className="flex-1 rounded-xl border border-black/10 bg-white p-6 border-l-4 border-l-accent flex flex-col">
              <span className="inline-block self-start rounded-full bg-accent/10 text-accent text-[12px] font-semibold px-3 py-1 mb-3 uppercase tracking-wider">ADS</span>
              <p className="text-2xl font-bold text-black mb-3">DAU-driven</p>
              <div className="flex flex-col divide-y divide-black/10 flex-1">
                {[
                  'Stable month over month — no promo swings',
                  'Scales with engagement depth, not headcount',
                  'Near-zero marginal cost at any DAU level',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2.5 text-[15px] text-black/60">
                    <span className="h-1 w-1 rounded-full bg-black/30 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-black/40 italic">Distributed value, remarkably steady.</p>
            </div>
          </div>

          {/* Right column — big stats */}
          <div data-gsap="number" className="flex flex-col justify-center divide-y divide-black/10 pl-8 border-l border-black/10 flex-1">
            <div className="flex-1 flex flex-col justify-center py-4">
              <p className="text-[clamp(3.5rem,6.5vw,6.5rem)] font-black text-black leading-none tabular-nums">{totalRev.formatted}</p>
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/55 mt-2">Monthly Revenue</p>
            </div>
            <div className="flex-1 flex flex-col justify-center py-4">
              <p className="text-[clamp(3.5rem,6.5vw,6.5rem)] font-black text-primary leading-none tabular-nums">{opProfit.formatted}</p>
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/55 mt-2">Operating Profit</p>
            </div>
            <div className="flex-1 flex flex-col justify-center py-4">
              <p className="text-[clamp(3.5rem,6.5vw,6.5rem)] font-black text-accent leading-none tabular-nums">{margin.formatted}</p>
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/55 mt-2">Operating Margin</p>
            </div>
          </div>
        </div>

        {/* Quote row — full width */}
        <div data-gsap="fade" className="pt-4 flex-shrink-0">
          <p data-gsap="hero" className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            This isn&apos;t diversification. <span className="text-primary">It&apos;s risk management.</span>
          </p>
        </div>
      </main>
    </div>
  );
}
