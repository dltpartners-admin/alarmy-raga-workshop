'use client';
import { useSlideGsap } from '@/hooks/useSlideGsap';

export default function Slide03_RealProblem({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white px-[6vw] py-[4.5vh]">
      {/* Header */}
      <header className="flex-shrink-0">
        <p data-gsap="tag" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-primary mb-3">
          THE PROBLEM
        </p>
        <h1 data-gsap="hero" className="text-[clamp(2rem,3.6vw,3.6rem)] font-black leading-[1.05] text-black whitespace-nowrap">
          Most Apps Leave 80–90% of Users Unmonetized
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col justify-center gap-7">
        {/* Labels above bar */}
        <div data-gsap="fade" className="flex flex-col gap-3">
          <div className="flex w-full">
            <div style={{ width: '15%' }}>
              <span className="text-[13px] font-bold text-primary uppercase tracking-wide">Paying · 10–15%</span>
            </div>
            <div style={{ width: '85%' }} className="pl-3">
              <span className="text-[13px] font-bold text-black/50 uppercase tracking-wide">Unmonetized · 85–90%</span>
            </div>
          </div>

          {/* Bar */}
          <div data-gsap="line" className="flex w-full h-20 rounded-xl overflow-hidden border border-black/10" style={{ transformOrigin: 'left' }}>
            <div className="bg-primary h-full flex items-center justify-center" style={{ width: '15%' }}>
              <span className="text-white text-[13px] font-bold rotate-0 whitespace-nowrap px-2">10–15%</span>
            </div>
            <div className="bg-black/5 h-full flex-1 flex items-center px-6">
              <span className="text-black/40 text-[17px] font-semibold">85–90% unmonetized — using your app every day, generating zero revenue</span>
            </div>
          </div>
        </div>

        {/* 2-col explanation */}
        <div data-gsap="fade" className="grid grid-cols-2 gap-8">
          <div className="rounded-xl border border-black/10 p-6">
            <p className="text-2xl font-bold text-black mb-3">For Alarmy, even more extreme</p>
            <p className="text-[18px] leading-relaxed text-black/70">
              Alarms are a category with inherently low WTP. People don&apos;t naturally think of alarms as something worth paying for. This isn&apos;t a sales problem — it&apos;s a category problem.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 p-6">
            <p className="text-2xl font-bold text-black mb-3">Even with a good conversion rate</p>
            <p className="text-[18px] leading-relaxed text-black/70">
              If your conversion is 15–20%, you still leave 80% on the table. Most apps treat those users as &quot;failed conversions.&quot; We saw them differently — as a different monetization opportunity entirely.
            </p>
          </div>
        </div>

        {/* Quote block */}
        <div data-gsap="fade" className="pt-4">
          <p data-gsap="hero" className="text-[clamp(1.3rem,2.2vw,2.2rem)] font-black leading-[1.15] tracking-[-0.01em] text-black whitespace-nowrap">
            Even if your conversion rate is decent, you&apos;re still <span className="text-primary">leaving the majority on the table.</span>
          </p>
        </div>
      </main>
    </div>
  );
}
