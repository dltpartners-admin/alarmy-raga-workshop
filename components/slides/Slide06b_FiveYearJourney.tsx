'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

const timeline = [
  {
    year: '2020',
    title: 'Interstitial in Core Journey',
    lines: ['Revenue 2×, retention OK', 'But users said: "breaks core experience"'],
    stat: 'REMOVED',
    statColor: 'text-primary',
    statBg: 'bg-primary/10',
    active: false,
  },
  {
    year: '2022',
    title: 'Rewarded Video in Ringtones',
    lines: ['Outside core journey', 'Safe, limited upside'],
    stat: 'SHIPPED',
    statColor: 'text-black/60',
    statBg: 'bg-black/5',
    active: false,
  },
  {
    year: '2024',
    title: 'Interstitial in Snooze',
    lines: ['Still outside core', 'Incremental revenue, learning continues'],
    stat: 'SHIPPED',
    statColor: 'text-black/60',
    statBg: 'bg-black/5',
    active: false,
  },
  {
    year: '2025',
    title: 'Light Popup in Alarm Dismiss',
    lines: ['Back in core journey', 'Zero retention drop · +30% revenue', 'CTR 2.3% · eCPM $2.7'],
    stat: 'WINNING',
    statColor: 'text-primary',
    statBg: 'bg-primary/10',
    active: true,
  },
];

export default function Slide06b_FiveYearJourney({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE JOURNEY
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          It Took 5 Years to Get It Right
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center">
        {/* Timeline */}
        <div data-gsap="fade" className="relative grid grid-cols-4 gap-0">
          {/* Connecting line */}
          <div className="absolute top-[22px] left-0 right-0 h-px bg-black/10 z-0" />

          {timeline.map((node) => (
            <div key={node.year} className="relative flex flex-col items-start z-10 pr-6">
              {/* Dot */}
              <div className={`h-5 w-5 rounded-full border-2 border-white shadow flex-shrink-0 mb-5 ${node.active ? 'bg-primary' : 'bg-black/20'}`} />
              {/* Content */}
              <div className="flex flex-col gap-3">
                <p className={`text-[clamp(1.4rem,2.2vw,2.2rem)] font-black leading-none ${node.active ? 'text-primary' : 'text-black'}`}>
                  {node.year}
                </p>
                <p className="text-[17px] font-bold text-black leading-snug">{node.title}</p>
                <div className="flex flex-col gap-1">
                  {node.lines.map((line) => (
                    <p key={line} className="text-[15px] text-black/60 leading-relaxed">{line}</p>
                  ))}
                </div>
                <span className={`inline-block self-start rounded-full px-3 py-1 text-[12px] font-semibold ${node.statBg} ${node.statColor} uppercase tracking-wider`}>
                  {node.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p data-gsap="hero" className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            We chose UX over 2× revenue in 2020.
          </p>
          <p data-gsap="hero" className="mt-1 text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-primary whitespace-nowrap">
            Five years later, we found a way to have both.
          </p>
          <p data-gsap="fade" className="mt-3 text-[16px] font-medium text-black/55">
            Today, the Light Popup drives 15% of Alarmy&apos;s total ad revenue.
          </p>
        </div>
      </main>
    </div>
  );
}
