'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import SlideShow from '@/components/SlideShow';
import SlideNav from '@/components/SlideNav';
import Slide01 from '@/components/slides/Slide01_Title';
import Slide02 from '@/components/slides/Slide02_AboutAlarmy';
import Slide03 from '@/components/slides/Slide03_RealProblem';
import Slide04 from '@/components/slides/Slide04_PaywallDecision';
import Slide05 from '@/components/slides/Slide05_MonetizationDNA';
import Slide06 from '@/components/slides/Slide06a_UXFear';
import Slide07 from '@/components/slides/Slide06b_FiveYearJourney';
import Slide08 from '@/components/slides/Slide07_Math';
import Slide09 from '@/components/slides/Slide08_PortfolioEffect';
import Slide10 from '@/components/slides/Slide09_Playbook';
import Slide11 from '@/components/slides/Slide10_Takeaways';
import Slide12 from '@/components/slides/Slide11_ThankYou';

const slideComponents = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
];

function parseHash(): number {
  if (typeof window === 'undefined') return 0;
  const m = /^#(\d+)$/.exec(window.location.hash || '');
  if (!m) return 0;
  return Math.max(0, Math.min(slideComponents.length - 1, parseInt(m[1], 10) - 1));
}

export default function Home() {
  const [current, setCurrent] = useState<number>(() => parseHash());
  const [direction, setDirection] = useState(0);
  const prevRef = useRef<number>(0);

  useEffect(() => {
    prevRef.current = current;
    const onHash = () => {
      const n = parseHash();
      prevRef.current = n;
      setCurrent(n);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = useCallback((index: number) => {
    setDirection(index > prevRef.current ? 1 : -1);
    prevRef.current = index;
    setCurrent(index);
  }, []);

  return (
    <>
      <SlideNav current={current} onNavigate={handleNavigate} />
      <SlideShow current={current} direction={direction} onNavigate={handleNavigate}>
        {slideComponents.map((SlideComp, i) => (
          <SlideComp key={i} isActive={current === i} />
        ))}
      </SlideShow>
    </>
  );
}
