'use client';
import Image from 'next/image';
import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide11_ThankYou({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      <header className="flex-shrink-0" />

      {/* Main: fully centered */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8">
        {/* Dual logo row */}
        <div data-gsap="fade" className="flex items-center gap-5">
          <Image src="/assets/alarmy.png" alt="Alarmy" width={56} height={56} className="rounded-xl" />
          <span className="text-2xl font-light text-black/30">×</span>
          <Image src="/assets/daro.png" alt="DARO" width={56} height={56} className="rounded-xl" />
        </div>

        {/* Headline pair — bookend */}
        <div className="text-center">
          <h1 data-gsap="hero" className="text-[clamp(3rem,6vw,6rem)] font-black leading-[1.05] tracking-[-0.02em] text-black whitespace-nowrap">
            It&apos;s time to monetize
          </h1>
          <h2 data-gsap="hero" className="mt-2 text-[clamp(3rem,6vw,6rem)] font-black leading-[1.05] tracking-[-0.02em] text-primary whitespace-nowrap">
            100% of your users.
          </h2>
        </div>

        {/* Tagline */}
        <p data-gsap="fade" className="text-[18px] font-medium text-black/55 text-center max-w-2xl">
          The ad monetization engine behind Alarmy — now available for other apps.
        </p>

        {/* Links — corrected colors: daro.so=blue(accent), delightroom.com=red(primary) */}
        <div data-gsap="subtle" className="flex items-center gap-6 text-[17px] font-bold tracking-wide">
          <a className="text-accent">daro.so</a>
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <a className="text-primary">alar.my</a>
        </div>

        {/* Speaker card */}
        <div data-gsap="fade" className="mt-2 flex flex-col items-center gap-1">
          <p className="text-[20px] font-bold text-black">Goodway Cho</p>
          <a href="mailto:goodway@delightroom.com" className="text-[16px] font-medium text-black/55">
            goodway@delightroom.com
          </a>
        </div>

        {/* Networking CTA */}
        <p
          data-gsap="subtle"
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.18em] text-black/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Let&apos;s talk during networking
        </p>
      </main>
    </div>
  );
}
