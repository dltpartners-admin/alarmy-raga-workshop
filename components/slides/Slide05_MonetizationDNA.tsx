'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

const cards = [
  {
    pillBg: 'bg-primary/10',
    pillText: 'text-primary',
    pillLabel: '≈10%',
    title: 'Subscribers',
    body: 'High willingness to pay. Want an ad-free experience. No need to show them ads.',
    facts: ['D1 conversion dominant', 'Low churn over time', 'Ad-free guarantee valued'],
    footerBg: 'bg-primary/10',
    footerText: 'text-primary',
    footerLabel: 'MONETIZE VIA SUBSCRIPTION',
  },
  {
    pillBg: 'bg-black/5',
    pillText: 'text-black',
    pillLabel: '≈5%',
    title: "'Maybe' Users",
    body: "On the fence. Time-limited discounts can tip them over — act fast or they drift to free-forever.",
    facts: ['Convertible within D3', 'Respond to urgency', 'Small but valuable segment'],
    footerBg: 'bg-black/5',
    footerText: 'text-black',
    footerLabel: 'CONVERT EARLY OR LET GO',
  },
  {
    pillBg: 'bg-accent/10',
    pillText: 'text-accent',
    pillLabel: '≈85%',
    title: 'Free-Forever Users',
    body: 'Will never pay. But they use Alarmy every day. This is the engine of ad revenue.',
    facts: ['Daily active — habitual users', 'Core alarm usage patterns', 'The real scale lever'],
    footerBg: 'bg-accent/10',
    footerText: 'text-accent',
    footerLabel: 'MONETIZE VIA ADS',
  },
];

export default function Slide05_MonetizationDNA({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE INSIGHT
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          Different Users, Different Monetization DNA
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-8">
        <div data-gsap="fade" className="grid grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="rounded-xl border border-black/10 bg-white p-6 flex flex-col gap-3">
              {/* Top pill */}
              <span className={`inline-block self-start rounded-full px-3 py-1 text-[13px] font-bold ${card.pillBg} ${card.pillText}`}>
                {card.pillLabel}
              </span>
              <h2 className="text-[26px] font-bold text-black leading-tight">{card.title}</h2>
              <p className="text-[16px] leading-snug text-black/65">{card.body}</p>
              {/* Fact rows — natural height, tight */}
              <div className="flex flex-col divide-y divide-black/10 border-t border-black/10 mt-1">
                {card.facts.map((f) => (
                  <div key={f} className="py-2 text-[14px] text-black/60 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-black/30 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              {/* Bottom pill */}
              <span className={`inline-block self-start rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider mt-1 ${card.footerBg} ${card.footerText}`}>
                {card.footerLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p data-gsap="hero" className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            Subscriptions first. Ads second.{' '}
            <span className="text-primary">Almost zero overlap.</span>
          </p>
          <p data-gsap="fade" className="mt-2 text-[18px] font-medium text-black/55">
            Cannibalization is a myth — these are fundamentally different people.
          </p>
        </div>
      </main>
    </div>
  );
}
