'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlideGsap } from '@/hooks/useSlideGsap';

const tabs = ['Bridge', 'Bitrise', 'AI 광고', 'UGC', '딜 전산화'] as const;
type Tab = (typeof tabs)[number];

const tabContent: Record<Tab, { title: string; problem: string; solution: string; result?: string }> = {
  'Bridge': {
    title: 'DelightHub Bridge',
    problem: '각 앱별 운영 도구가 분산되어 있어 관리 비효율',
    solution: '전 앱 통합 운영 도구 구축 + 이메일 어시스턴트',
    result: '플릭 · 비트윈 PoC 선행 후 전사 확대',
  },
  'Bitrise': {
    title: 'Bitrise 확장',
    problem: '담당자 의존적 SDK 업데이트 · 검증 프로세스',
    solution: 'Claude/AI 연동으로 DARO 팀 자체 SDK 업데이트',
    result: 'TestFlight 자체 검증까지 자동화',
  },
  'AI 광고': {
    title: 'AI 광고 소재',
    problem: '알라미에서 바로 테스트하기엔 리스크가 있음',
    solution: '딜라브가 AI 소재 테스트 허브로 기능 — 노지에서 먼저 실험',
    result: '검증된 소재 · 프로세스를 알라미에 이식',
  },
  'UGC': {
    title: 'UGC 크리에이터',
    problem: '알라미 UGC 플레이북이 이미 검증됨',
    solution: '알라미와 겹치는 크리에이터 타겟 · 운영 노하우 공유',
    result: '시너지 기반 크리에이터 네트워크 확장',
  },
  '딜 전산화': {
    title: '딜 검토 전산화',
    problem: 'Q1 프로세스가 수작업 기반',
    solution: 'Deal Review 프로세스 1.0 → 시스템 이관',
    result: '검토 속도 · 일관성 · 추적 가능성 확보',
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

export default function Slide21_Productivity_Q2({ isActive }: { isActive: boolean }) {
  const ref = useSlideGsap(isActive);
  const [activeTab, setActiveTab] = useState<Tab>('Bridge');

  return (
    <div ref={ref} className="relative flex h-screen w-screen flex-col overflow-hidden bg-white">
      <span className="ml-[8vw] mt-12 text-xs uppercase tracking-[0.3em] text-dh-gray-mid">
        Q2 플랜 · 생산성
      </span>

      <div className="flex flex-1 flex-col items-center justify-center px-[8vw] py-[6vh]">
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

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex w-full max-w-2xl flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-dh-black">{tabContent[activeTab].title}</h2>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Problem</p>
              <p className="text-base text-dh-gray-mid">{tabContent[activeTab].problem}</p>
            </div>
            <span className="text-lg text-primary">↓</span>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-dh-gray-mid">Solution</p>
              <p className="text-base text-dh-black">{tabContent[activeTab].solution}</p>
            </div>
            {tabContent[activeTab].result && (
              <>
                <span className="text-lg text-primary">↓</span>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-primary">Expected</p>
                  <p className="text-base text-dh-black">{tabContent[activeTab].result}</p>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
