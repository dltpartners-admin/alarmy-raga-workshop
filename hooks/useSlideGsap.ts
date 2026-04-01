'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useSlideGsap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    if (isActive) {
      const tl = gsap.timeline();

      // Hero elements — big dramatic reveal
      tl.fromTo(
        el.querySelectorAll('[data-gsap="hero"]'),
        { y: 60, opacity: 0, scale: 0.95, filter: 'blur(12px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out', stagger: 0.15 },
        0.1
      );

      // Secondary elements — subtle fade up
      tl.fromTo(
        el.querySelectorAll('[data-gsap="fade"]'),
        { y: 30, opacity: 0, filter: 'blur(6px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', stagger: 0.1 },
        0.3
      );

      // Tertiary — gentle fade
      tl.fromTo(
        el.querySelectorAll('[data-gsap="subtle"]'),
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 },
        0.5
      );

      // Numbers — scale up
      tl.fromTo(
        el.querySelectorAll('[data-gsap="number"]'),
        { scale: 0.8, opacity: 0, filter: 'blur(16px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', stagger: 0.2 },
        0.2
      );

      // Lines — draw in
      tl.fromTo(
        el.querySelectorAll('[data-gsap="line"]'),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut', stagger: 0.1 },
        0.4
      );

      // Tags — pop in
      tl.fromTo(
        el.querySelectorAll('[data-gsap="tag"]'),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)', stagger: 0.06 },
        0.6
      );

      // Table rows — slide in from left
      tl.fromTo(
        el.querySelectorAll('[data-gsap="row"]'),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.06 },
        0.3
      );

      return () => { tl.kill(); };
    } else {
      // Reset all animated elements
      gsap.set(el.querySelectorAll('[data-gsap]'), { clearProps: 'all' });
      gsap.set(el.querySelectorAll('[data-gsap]'), { opacity: 0 });
    }
  }, [isActive]);

  return containerRef;
}
