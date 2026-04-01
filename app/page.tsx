'use client';
import { useState, useCallback, useRef } from 'react';
import SlideShow from '@/components/SlideShow';
import SlideNav from '@/components/SlideNav';
import Slide01 from '@/components/slides/Slide01_Cover';
import Slide02 from '@/components/slides/Slide02_Context';
import Slide03 from '@/components/slides/Slide03_AnnualTarget';
import Slide04 from '@/components/slides/Slide04_Q1Section';
import Slide05 from '@/components/slides/Slide05_Q1Revenue';
import Slide06 from '@/components/slides/Slide06_Noji_Why';
import Slide07 from '@/components/slides/Slide07_Noji_PMI';
import Slide08 from '@/components/slides/Slide08_BetweenFleek_Q1';
import Slide09 from '@/components/slides/Slide09_Business_Q1';
import Slide10 from '@/components/slides/Slide10_Productivity_Q1';
import Slide11 from '@/components/slides/Slide11_Q2Section';
import Slide12 from '@/components/slides/Slide12_Q2Revenue';
import Slide13 from '@/components/slides/Slide13_Noji_Diagnosis';
import Slide14 from '@/components/slides/Slide14_Noji_RevEcon';
import Slide15 from '@/components/slides/Slide15_Noji_Initiatives';
import Slide16 from '@/components/slides/Slide16_Noji_Metrics';
import Slide17 from '@/components/slides/Slide17_Noji_Timeline';
import Slide18 from '@/components/slides/Slide18_BetweenFleek_Q2';
import Slide19 from '@/components/slides/Slide19_Conference';
import Slide20 from '@/components/slides/Slide20_Pipeline';
import Slide21 from '@/components/slides/Slide21_Productivity_Q2';
import Slide22 from '@/components/slides/Slide22_Closing';

const slideComponents = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
  Slide19, Slide20, Slide21, Slide22,
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const prevRef = useRef(0);

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
