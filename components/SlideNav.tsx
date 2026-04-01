'use client';
import { slides } from '@/lib/slides';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SlideNavProps {
  current: number;
  onNavigate: (index: number) => void;
}

const sectionBreaks = new Set([3, 10]); // indices where section changes (after slide 3→Q1, after slide 10→Q2)

export default function SlideNav({ current, onNavigate }: SlideNavProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      {/* Right dot navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5">
        {slides.map((slide, i) => (
          <div key={slide.id} className="relative flex items-center">
            {sectionBreaks.has(i) && (
              <div className="w-px h-3 bg-dh-gray-mid/30 my-1" />
            )}
            {!sectionBreaks.has(i) && (
              <button
                onClick={() => onNavigate(i)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative flex items-center p-1"
              >
                <motion.div
                  className="rounded-full"
                  animate={{
                    width: current === i ? 10 : 6,
                    height: current === i ? 10 : 6,
                    backgroundColor: current === i ? '#FE000D' : '#71717A',
                  }}
                  transition={{ duration: 0.2 }}
                />
                {/* Tooltip */}
                {hoveredIdx === i && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-8 whitespace-nowrap bg-dh-black/90 text-white text-xs px-2 py-1 rounded pointer-events-none"
                  >
                    {slide.title}
                  </motion.span>
                )}
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom-left slide number */}
      <div className="fixed left-8 bottom-6 z-50 text-sm font-medium tracking-wider bg-dh-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
        <span className="text-dh-gray-mid"> / {String(slides.length).padStart(2, '0')}</span>
      </div>
    </>
  );
}
