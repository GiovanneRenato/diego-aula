import React from 'react';
import { useQRStore } from '@/store/useQRStore';
import { Settings2, Palette, Maximize, ShieldCheck } from 'lucide-react';

const QRSettings: React.FC = () => {
  const { size, setSize, fgColor, bgColor, setColors, level, setLevel, includeMargin, setIncludeMargin } = useQRStore();

  return (
    <div className="space-y-8">
      {/* Tamanho */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-slate-400">
          <Maximize size={16} />
          <span className="text-xs font-semibold uppercase tracking-widest">Tamanho ({size}px)</span>
        </div>
        <input 
          type="range" 
          min="128" 
          max="1024" 
          step="64"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Cores */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-slate-400">
          <Palette size={16} />
          <span className="text-xs font-semibold uppercase tracking-widest">Cores</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] text-slate-500 uppercase">Cor do QR</label>
            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-xl border border-white/10">
              <input 
                type="color" 
                value={fgColor}
                onChange={(e) => setColors(e.target.value, bgColor)}
                className="w-6 h-6 rounded bg-transparent cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-300 uppercase">{fgColor}</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-slate-500 uppercase">Fundo</label>
            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-xl border border-white/10">
              <input 
                type="color" 
                value={bgColor === 'transparent' ? '#ffffff' : bgColor}
                onChange={(e) => setColors(fgColor, e.target.value)}
                className="w-6 h-6 rounded bg-transparent cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-300 uppercase">{bgColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Precisão / Erro */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck size={16} />
          <span className="text-xs font-semibold uppercase tracking-widest">Correção de Erro</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {(['L', 'M', 'Q', 'H'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                level === l 
                ? 'bg-blue-600 text-white border border-blue-500' 
                : 'bg-white/5 text-slate-500 border border-white/5 hover:bg-white/10'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Margem */}
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="flex items-center gap-3">
          <Settings2 size={18} className="text-slate-400" />
          <span className="text-sm font-medium text-slate-300">Incluir Margem</span>
        </div>
        <button 
          onClick={() => setIncludeMargin(!includeMargin)}
          className={`w-10 h-5 rounded-full transition-all relative ${
            includeMargin ? 'bg-blue-600' : 'bg-slate-700'
          }`}
        >
          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
            includeMargin ? 'left-6' : 'left-1'
          }`} />
        </button>
      </div>
    </div>
  );
};

export default QRSettings;
