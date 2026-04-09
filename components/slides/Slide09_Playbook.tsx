'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

const phases = [
  {
    num: '01',
    numColor: 'text-primary',
    title: 'Start at the edges',
    caption: 'Learn without risking the core.',
    pills: ['2022 · Rewarded Video in ringtones', '2024 · Interstitial in snooze'],
  },
  {
    num: '02',
    numColor: 'text-accent',
    title: 'Measure LTV, not eCPM',
    caption: 'Retention is the guardrail. LTV is the decision.',
    pills: ['Ad LTV = Lifetime × ARPDAU', '−3pp retention vs +10% ARPDAU → LTV says it all'],
  },
  {
    num: '03',
    numColor: 'text-primary',
    title: 'Earn your way back in',
    caption: '2020 wrong format → 2025 Light Popup, right format.',
    pills: ['Zero retention drop', '+30% revenue', 'CTR 2.3% · eCPM $2.7'],
  },
];

export default function Slide09_Playbook({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE PLAYBOOK
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          How Alarmy Actually Did It
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-8 min-h-0">
        {/* 3-column phase grid */}
        <div className="grid grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.num}
              data-gsap="row"
              className="flex flex-col rounded-xl border border-black/10 bg-white p-6"
            >
              <span
                className={`text-[clamp(3rem,5vw,5rem)] font-black leading-none tabular-nums ${phase.numColor}`}
              >
                {phase.num}
              </span>
              <p className="mt-4 text-[clamp(1.3rem,1.9vw,1.9rem)] font-black leading-[1.1] tracking-[-0.01em] text-black">
                {phase.title}
              </p>
              <p className="mt-2 text-[16px] text-black/55 leading-snug">{phase.caption}</p>
              <div className="mt-5 flex flex-col gap-2 border-t border-black/10 pt-4">
                {phase.pills.map((pill) => (
                  <div
                    key={pill}
                    className="flex items-start gap-2 text-[15px] font-semibold text-black/75 leading-snug"
                  >
                    <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${phase.numColor === 'text-primary' ? 'bg-primary' : 'bg-accent'}`} />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div data-gsap="fade" className="pt-4 flex-shrink-0">
          <p data-gsap="hero" className="text-[clamp(1.3rem,2.2vw,2.2rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            5+ years. No shortcuts.{' '}
            <span className="text-primary">But there is a sequence.</span>
          </p>
        </div>
      </main>
    </div>
  );
}
