'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide06a_UXFear({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          UX VS REVENUE
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          Building Ad Revenue Without Breaking UX
        </h1>
        <p data-gsap="fade" className="mt-2 text-[17px] leading-relaxed text-black/50">
          The biggest fear: &quot;Ads will drive users away.&quot;
        </p>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-4">
        {/* Row 1 — Myth */}
        <div data-gsap="fade" className="flex items-start gap-6 border border-black/10 rounded-xl p-6">
          <div className="flex-shrink-0 w-28">
            <span className="inline-block rounded-full bg-primary/10 text-primary text-[12px] font-semibold px-3 py-1.5 uppercase tracking-wider">MYTH</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-black mb-2">UX-friendly = invisible</p>
            <p className="text-[18px] leading-relaxed text-black/70">
              If users don&apos;t notice the ad, it&apos;s good. But invisible ads have low CPM — advertisers don&apos;t pay for ignored impressions. You sacrifice revenue for comfort users don&apos;t even register.
            </p>
          </div>
        </div>

        {/* Row 2 — Reality */}
        <div data-gsap="fade" className="flex items-start gap-6 border border-black/10 rounded-xl p-6">
          <div className="flex-shrink-0 w-28">
            <span className="inline-block rounded-full bg-accent/10 text-accent text-[12px] font-semibold px-3 py-1.5 uppercase tracking-wider">REALITY</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-black mb-2">UX-friendly = integrated</p>
            <p className="text-[18px] leading-relaxed text-black/70">
              The ad is clearly an ad, but it fits the app&apos;s core value flow. Users accept ads when the app delivers real value in exchange. Integration, not invisibility, is what drives high eCPM.
            </p>
          </div>
        </div>

        {/* Row 3 — Alarmy */}
        <div data-gsap="fade" className="flex items-start gap-6 border border-black/10 rounded-xl p-6 bg-black/[0.02]">
          <div className="flex-shrink-0 w-28">
            <span className="inline-block rounded-full bg-black/10 text-black text-[12px] font-semibold px-3 py-1.5 uppercase tracking-wider">ALARMY</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-black mb-2">Wake up → see ad</p>
            <p className="text-[18px] leading-relaxed text-black/70">
              Alarmy&apos;s core value is waking you up. Ads appear during the wake-up flow — where attention and engagement are highest. Users are alert, mission-accomplished, and receptive.
            </p>
          </div>
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p data-gsap="hero" className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            10 native ads ≠ 1 rewarded video.
          </p>
          <p data-gsap="hero" className="mt-1 text-[clamp(1.5rem,2.6vw,2.6rem)] font-black leading-[1.15] tracking-[-0.01em] text-primary whitespace-nowrap">
            The right format depends on your app&apos;s DNA.
          </p>
        </div>
      </main>
    </div>
  );
}
