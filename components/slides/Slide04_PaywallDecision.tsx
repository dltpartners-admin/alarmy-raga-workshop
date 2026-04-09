'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide04_PaywallDecision({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE DECISION
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          The Paywall Decision That Shaped Our Business
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-6">
        {/* Two cards */}
        <div data-gsap="fade" className="grid grid-cols-2 gap-6">
          {/* Hard Paywall */}
          <div className="rounded-xl border border-black/10 bg-white p-7 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block rounded-full bg-primary/10 text-primary text-[12px] font-semibold px-3 py-1 uppercase tracking-wider">HARD PAYWALL</span>
            </div>
            <p className="text-2xl font-bold text-black mb-4">Force conversion up-front</p>
            <div className="flex flex-col divide-y divide-black/10">
              {[
                'High conversion pressure on every new user',
                'Non-payers leave forever — DAU bleeds out',
                'DAU shrinks fast — compounding damage',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-3">
                  <span className="text-primary font-bold text-[18px] flex-shrink-0 mt-0.5">×</span>
                  <span className="text-[17px] text-black/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] text-black/40 italic">Fatal for low-WTP categories like alarm apps.</p>
          </div>

          {/* Soft Paywall */}
          <div className="rounded-xl border border-black/10 bg-white p-7 border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block rounded-full bg-accent/10 text-accent text-[12px] font-semibold px-3 py-1 uppercase tracking-wider">SOFT PAYWALL</span>
            </div>
            <p className="text-2xl font-bold text-black mb-4">Keep users, monetize differently</p>
            <div className="flex flex-col divide-y divide-black/10">
              {[
                'Lower conversion rate — but you keep the user',
                'Non-payers stay engaged, building habit',
                'DAU grows and compounds over time',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-3">
                  <span className="text-accent font-bold text-[18px] flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[17px] text-black/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] text-black/40 italic">Most conversions happen on Day 1. After that, almost no one converts.</p>
          </div>
        </div>

        {/* Tiny stat strip as context, subtle */}
        <div data-gsap="subtle" className="flex items-center justify-center gap-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-black/40">
          <span>~10% subscribers</span>
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <span>~90% free users</span>
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <span>every single day</span>
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p
            data-gsap="hero"
            className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap"
          >
            We chose to keep users alive.
          </p>
          <p
            data-gsap="hero"
            className="mt-1 text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-primary whitespace-nowrap"
          >
            Then we figured out how to monetize all of them.
          </p>
        </div>
      </main>
    </div>
  );
}
