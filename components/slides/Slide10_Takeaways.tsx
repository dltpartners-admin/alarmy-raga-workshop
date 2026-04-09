'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

const takeaways = [
  {
    num: '01',
    color: 'text-primary',
    title: 'Low WTP ≠ Low Revenue',
    sub: 'It means you need a different playbook.',
  },
  {
    num: '02',
    color: 'text-accent',
    title: 'Subs ≠ Ads Populations',
    sub: 'Cannibalization is mostly a myth.',
  },
  {
    num: '03',
    color: 'text-primary',
    title: "UX-Friendly Ads Aren't Invisible",
    sub: "They integrate with your app's core value.",
  },
  {
    num: '04',
    color: 'text-accent',
    title: 'Retention > eCPM',
    sub: 'Retention is the real KPI for ad monetization.',
  },
  {
    num: '05',
    color: 'text-primary',
    title: 'Start Outside, Earn Your Way In',
    sub: 'Measure with LTV, move into the core gradually.',
  },
];

export default function Slide10_Takeaways({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          TAKEAWAYS
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          The 100% Playbook
        </h1>
      </header>

      {/* Main: big, airy rows filling full width */}
      <main className="flex flex-1 flex-col justify-center">
        {takeaways.map((item, i) => (
          <div
            key={item.num}
            data-gsap="row"
            className={`grid grid-cols-[auto_1fr_auto] items-center gap-10 py-6 ${i < takeaways.length - 1 ? 'border-b border-black/10' : ''}`}
          >
            <span
              className={`text-[clamp(3.5rem,5.5vw,5.5rem)] font-black leading-none tabular-nums ${item.color}`}
            >
              {item.num}
            </span>
            <div className="min-w-0">
              <p className="text-[clamp(1.6rem,2.6vw,2.6rem)] font-black text-black leading-[1.1] tracking-[-0.01em] whitespace-nowrap">
                {item.title}
              </p>
              <p className="mt-2 text-[clamp(1.05rem,1.35vw,1.35rem)] text-black/55 leading-snug">
                {item.sub}
              </p>
            </div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/30">
              Rule {item.num}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}
