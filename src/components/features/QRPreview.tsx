import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useQRStore } from '@/store/useQRStore';
import { Download, Share2, Copy } from 'lucide-react';
import { motion } from 'motion/react';

const QRPreview: React.FC = () => {
  const { content, size, fgColor, bgColor, level, includeMargin } = useQRStore();
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `qrcode-${Date.now()}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div 
        ref={qrRef}
        className="p-8 bg-white rounded-3xl shadow-2xl shadow-blue-500/10 relative group"
      >
        {content ? (
          <QRCodeSVG
            value={content}
            size={size > 300 ? 300 : size} // Limit preview size
            fgColor={fgColor}
            bgColor={bgColor === 'transparent' ? '#ffffff' : bgColor}
            level={level}
            includeMargin={includeMargin}
          />
        ) : (
          <div className="w-[256px] h-[256px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl text-slate-300 gap-2">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
              <Download size={24} />
            </div>
            <span className="text-sm font-medium">Aguardando conteúdo</span>
          </div>
        )}
        
        {content && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl flex items-center justify-center gap-4 transition-all"
          >
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all" title="Copiar">
              <Copy size={20} />
            </button>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all" title="Compartilhar">
              <Share2 size={20} />
            </button>
          </motion.div>
        )}
      </div>

      {content && (
        <div className="flex gap-3 w-full max-w-[256px]">
          <button 
            onClick={downloadQR}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-2xl font-semibold shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <Download size={18} />
            Baixar PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default QRPreview;
