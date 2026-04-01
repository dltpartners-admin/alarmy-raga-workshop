export interface SlideMeta {
  id: number;
  title: string;
  section: 'intro' | 'q1' | 'q2' | 'closing';
  type: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const slides: SlideMeta[] = [
  { id: 1, title: '표지', section: 'intro', type: 'A' },
  { id: 2, title: '전사 컨텍스트', section: 'intro', type: 'C' },
  { id: 3, title: '연간 목표', section: 'intro', type: 'D' },
  { id: 4, title: 'Q1 회고', section: 'q1', type: 'A' },
  { id: 5, title: 'Q1 탑라인 실적', section: 'q1', type: 'D' },
  { id: 6, title: 'Noji — 왜 인수했나', section: 'q1', type: 'B' },
  { id: 7, title: 'Noji — PMI 완료', section: 'q1', type: 'B' },
  { id: 8, title: 'Between & Fleek Q1', section: 'q1', type: 'B' },
  { id: 9, title: '비즈니스 Q1', section: 'q1', type: 'B' },
  { id: 10, title: '내부 생산성 Q1', section: 'q1', type: 'B' },
  { id: 11, title: 'Q2 플랜', section: 'q2', type: 'A' },
  { id: 12, title: 'Q2 탑라인 목표', section: 'q2', type: 'D' },
  { id: 13, title: 'Noji 현황 진단', section: 'q2', type: 'C' },
  { id: 14, title: 'Revenue Economics', section: 'q2', type: 'B' },
  { id: 15, title: '4개 이니셔티브', section: 'q2', type: 'B' },
  { id: 16, title: '선행 지표 & 유입', section: 'q2', type: 'B' },
  { id: 17, title: '월별 타임라인', section: 'q2', type: 'E' },
  { id: 18, title: 'Between & Fleek Q2', section: 'q2', type: 'B' },
  { id: 19, title: '컨퍼런스 전략', section: 'q2', type: 'B' },
  { id: 20, title: '인수 파이프라인', section: 'q2', type: 'C' },
  { id: 21, title: 'Q2 내부 생산성', section: 'q2', type: 'B' },
  { id: 22, title: '클로징', section: 'closing', type: 'A' },
];
