import { create } from 'zustand';

interface QRState {
  content: string;
  size: number;
  fgColor: string;
  bgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
  includeMargin: boolean;
  setContent: (content: string) => void;
  setSize: (size: number) => void;
  setColors: (fg: string, bg: string) => void;
  setLevel: (level: 'L' | 'M' | 'Q' | 'H') => void;
  setIncludeMargin: (include: boolean) => void;
}

export const useQRStore = create<QRState>((set) => ({
  content: '',
  size: 256,
  fgColor: '#ffffff',
  bgColor: 'transparent',
  level: 'M',
  includeMargin: true,
  setContent: (content) => set({ content }),
  setSize: (size) => set({ size }),
  setColors: (fg, bg) => set({ fgColor: fg, bgColor: bg }),
  setLevel: (level) => set({ level }),
  setIncludeMargin: (includeMargin) => set({ includeMargin }),
}));
