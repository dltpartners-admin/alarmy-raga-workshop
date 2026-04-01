'use client';

import { useSlideGsap } from '@/hooks/useSlideGsap';

const events = [
  { date: '4/8', flag: '🇰🇷', name: 'Seoul CEO Summit', purpose: '다로/딜라브 시드 확보', speaker: null },
  { date: '4/10', flag: '🇰🇷', name: 'App Monetization Seoul', purpose: '다로 글로벌 PR', speaker: 'Stephan 패널 참여' },
  { date: '4/14–18', flag: '🇯🇵', name: 'RAGA Tokyo', purpose: '다로 시드 발굴 · 알라미 PR', speaker: 'Peter 연사' },
  { date: '5/18–22', flag: '🇺🇸', name: 'MAU Vegas', purpose: '다로/알라미 브랜딩 · 다로/딜라브 시드 발굴', speaker: 'Peter·Stephan 연사' },
];

export default function Slide19_Conference({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col overflow-hidden bg-white">
      <span className="ml-[8vw] mt-8 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q2 플랜 · 비즈니스
      </span>

      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[4vh]">
        <h1
          data-gsap="hero"
          className="mb-[5vh] text-center text-[clamp(2rem,4vw,3.5rem)] font-bold text-dh-black"
        >
          <span className="flex items-center justify-center gap-4">
            <img src="/assets/alarmy.png" alt="" className="h-9 w-9 rounded-lg object-contain" />
            <img src="/assets/daro.png" alt="" className="h-9 w-9 rounded-lg object-contain" />
            <span>알라미 · 다로와 동반성장</span>
          </span>
        </h1>

        {/* Timeline */}
        <div data-gsap="fade" className="relative flex w-full max-w-5xl items-start justify-between gap-6">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-4 h-px bg-dh-border" />

          {events.map((event) => (
            <div key={event.name} data-gsap="row" className="relative z-10 flex flex-1 flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{event.flag}</span>
                <span className="text-lg font-bold text-primary">{event.date}</span>
              </div>
              <span className="mt-2 text-base font-semibold text-dh-black">{event.name}</span>
              <span className="mt-1 text-sm text-dh-gray-mid leading-snug">{event.purpose}</span>
              {event.speaker && (
                <span className="mt-2 inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {event.speaker}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
