'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlideGsap } from '@/hooks/useSlideGsap';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const tabs = ['Devin', 'Bitrise', '플릭봇'] as const;
type Tab = (typeof tabs)[number];

const devinData = [
  { name: 'Stephan', hours: 64 },
  { name: 'Peter', hours: 35 },
  { name: 'Emily', hours: 13 },
];

const tabContentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

export default function Slide10_Productivity_Q1({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const [activeTab, setActiveTab] = useState<Tab>('Devin');

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white">
      {/* Section label */}
      <span className="ml-[8vw] mt-12 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q1 회고 · 생산성
      </span>

      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[6vh]">
        {/* Hero */}
        <h1
          data-gsap="hero"
          className="mb-[6vh] text-center text-[clamp(2.5rem,5vw,5rem)] font-bold text-dh-black"
        >
          AI &amp; 자동화
        </h1>

        {/* Tab bar */}
        <div data-gsap="fade" className="mb-[4vh] flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 pb-2 text-sm uppercase tracking-wider transition-colors ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-dh-gray-mid hover:text-dh-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content — AnimatePresence kept for tab switching */}
        <AnimatePresence mode="wait">
          {activeTab === 'Devin' && (
            <motion.div
              key="devin"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex w-full max-w-4xl flex-col items-center"
            >
              <div className="mb-8 flex w-full gap-12">
                {/* Left: problem -> solution */}
                <div className="flex flex-1 flex-col justify-center gap-4">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Problem</p>
                    <p className="text-base text-dh-gray-mid">반복 업무에 시간을 뺏기는 팀</p>
                  </div>
                  <span className="text-lg text-primary">↓</span>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Solution</p>
                    <p className="text-base text-dh-black">Devin으로 자동화</p>
                  </div>
                </div>

                {/* Right: chart */}
                <div className="flex max-w-sm flex-1 items-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={devinData} barSize={36}>
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: '#71717A' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Bar dataKey="hours" fill="#FE000D" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Highlight */}
              <p className="text-center text-[clamp(1.5rem,3vw,3rem)] font-bold text-primary">
                3개월간 112시간 절약
              </p>
            </motion.div>
          )}

          {activeTab === 'Bitrise' && (
            <motion.div
              key="bitrise"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex w-full max-w-2xl flex-col gap-6"
            >
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Problem</p>
                <p className="text-base text-dh-gray-mid">담당자 부재 시 배포 불가</p>
              </div>
              <span className="text-lg text-primary">↓</span>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Q2 Plan</p>
                <p className="text-base text-dh-black">Bitrise 도입 → 담당자 의존성 제거</p>
                <p className="mt-1 text-base text-dh-black">Claude/AI 연동으로 DARO 팀 자체 SDK 업데이트 + TestFlight 자체 검증</p>
              </div>
            </motion.div>
          )}

          {activeTab === '플릭봇' && (
            <motion.div
              key="fleekbot"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex w-full max-w-2xl flex-col gap-6"
            >
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Problem</p>
                <p className="text-base text-dh-gray-mid">
                  계정 이관 건당 5~10분 수작업 / 피크 시 데일리 평균 15배 문의
                </p>
              </div>
              <span className="text-lg text-primary">↓</span>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Solution</p>
                <p className="text-base text-dh-black">
                  슬랙 봇 → 계정 이관 즉시 처리 자동화 + 템플릿 응대
                </p>
              </div>
              <span className="text-lg text-primary">↓</span>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-primary">Result</p>
                <p className="text-base text-dh-black">처리 시간 단축 / CS 대응 속도 개선</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
