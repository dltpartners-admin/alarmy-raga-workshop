'use client';
import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slideVariants, slideTransition } from '@/lib/animations';

interface SlideShowProps {
  current: number;
  direction: number;
  children: ReactNode[];
  onNavigate: (index: number) => void;
}

export default function SlideShow({ current, direction, children, onNavigate }: SlideShowProps) {
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const total = children.length;
  const currentRef = useRef(current);
  currentRef.current = current;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      if (index < 0 || index >= total) return;
      if (index === currentRef.current) return;
      isAnimating.current = true;
      onNavigate(index);
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    },
    [total, onNavigate]
  );

  useEffect(() => {
    let lastWheel = 0;
    let wheelCooldown = false;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      // Ignore small residual wheel events (trackpad momentum)
      if (Math.abs(e.deltaY) < 4) return;
      // Hard cooldown after a successful navigation
      if (wheelCooldown) {
        lastWheel = now;
        return;
      }
      // Require a quiet period to reset (helps with trackpad momentum)
      if (now - lastWheel < 900) {
        lastWheel = now;
        return;
      }
      lastWheel = now;
      wheelCooldown = true;
      setTimeout(() => { wheelCooldown = false; }, 900);
      if (e.deltaY > 0) goTo(currentRef.current + 1);
      else if (e.deltaY < 0) goTo(currentRef.current - 1);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        goTo(currentRef.current + 1);
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goTo(currentRef.current - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) {
        if (dy > 0) goTo(currentRef.current + 1);
        else goTo(currentRef.current - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goTo]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dh-black">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 w-screen h-screen"
        >
          {children[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
