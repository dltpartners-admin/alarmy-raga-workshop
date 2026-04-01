'use client';
import { useEffect, useState, useRef } from 'react';

export function useCountUp(
  target: number,
  isActive: boolean,
  options?: { duration?: number; decimals?: number; suffix?: string; prefix?: string }
) {
  const { duration = 1200, decimals = 0, suffix = '', prefix = '' } = options ?? {};
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return;
    }

    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive, target, duration]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return { value, formatted };
}
