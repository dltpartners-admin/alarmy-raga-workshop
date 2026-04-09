'use client';
import { slides } from '@/lib/slides';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SlideNavProps {
  current: number;
  onNavigate: (index: number) => void;
}

const sectionBreaks = new Set<number>();

export default function SlideNav({ current, onNavigate }: SlideNavProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      {/* Bottom-right compact navigation: dot row + counter */}
      <nav className="fixed right-6 bottom-5 z-50 flex items-center gap-3 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => onNavigate(i)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative p-0.5"
              aria-label={slide.title}
            >
              <motion.div
                className="rounded-full"
                animate={{
                  width: current === i ? 8 : 5,
                  height: current === i ? 8 : 5,
                  backgroundColor: current === i ? '#FF2D45' : '#D4D4D8',
                }}
                transition={{ duration: 0.2 }}
              />
              {hoveredIdx === i && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-[11px] text-white pointer-events-none"
                >
                  {slide.title}
                </motion.span>
              )}
            </button>
          ))}
        </div>
        <div className="h-3 w-px bg-black/10" />
        <div className="text-[12px] font-semibold tabular-nums tracking-wider text-black/70">
          <span className="text-black">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-black/40"> / {String(slides.length).padStart(2, '0')}</span>
        </div>
      </nav>
    </>
  );
}
