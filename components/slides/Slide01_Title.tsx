'use client';
import Image from 'next/image';
import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide01_Title({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Top: brand lockup */}
      <header className="flex-shrink-0">
        <div data-gsap="subtle" className="flex items-center gap-3">
          <Image src="/assets/alarmy.png" alt="Alarmy" width={32} height={32} className="rounded-lg" />
          <span className="text-xs font-semibold tracking-[0.2em] text-black/60 uppercase">Alarmy</span>
          <div className="mx-2 h-4 w-px bg-black/20" />
          <Image src="/assets/daro.png" alt="DARO" width={32} height={32} className="rounded-lg" />
          <span className="text-xs font-semibold tracking-[0.2em] text-black/60 uppercase">DARO</span>
        </div>
      </header>

      {/* Middle: title block, vertically centered */}
      <main className="flex flex-1 flex-col justify-center">
        <p
          data-gsap="tag"
          className="mb-6 text-[22px] font-semibold uppercase tracking-[0.22em] text-primary"
        >
          RAGA Tokyo 2026
        </p>
        <h1
          data-gsap="hero"
          className="text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-black whitespace-nowrap"
        >
          Why Monetize 10% of Your Users
        </h1>
        <h2
          data-gsap="hero"
          className="mt-2 text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-primary whitespace-nowrap"
        >
          When You Could Monetize 100%?
        </h2>
        <p data-gsap="fade" className="mt-10 text-[17px] font-medium text-black/60">
          Goodway · DARO at Delightroom
        </p>
      </main>

      {/* Footer: minimal */}
      <footer className="flex-shrink-0">
        <div className="flex items-center justify-between">
          <p data-gsap="subtle" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
            daro.so
          </p>
          <p data-gsap="subtle" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
            delightroom.com
          </p>
        </div>
      </footer>
    </div>
  );
}
