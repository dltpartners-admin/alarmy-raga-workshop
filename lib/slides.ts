export interface SlideMeta {
  id: number;
  title: string;
  section: 'intro' | 'q1' | 'q2' | 'closing';
  type: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const slides: SlideMeta[] = [
  { id: 1,  title: 'Title',              section: 'intro',   type: 'A' },
  { id: 2,  title: 'About Alarmy',       section: 'intro',   type: 'B' },
  { id: 3,  title: 'The Real Problem',   section: 'intro',   type: 'C' },
  { id: 4,  title: 'Paywall Decision',   section: 'intro',   type: 'B' },
  { id: 5,  title: 'Monetization DNA',   section: 'intro',   type: 'B' },
  { id: 6,  title: 'UX Fear',            section: 'intro',   type: 'C' },
  { id: 7,  title: '5-Year Journey',     section: 'intro',   type: 'E' },
  { id: 8,  title: 'The Math',           section: 'intro',   type: 'D' },
  { id: 9,  title: 'The Playbook',       section: 'intro',   type: 'B' },
  { id: 10, title: 'Key Takeaways',      section: 'closing', type: 'B' },
  { id: 11, title: 'Closing',            section: 'closing', type: 'A' },
];
