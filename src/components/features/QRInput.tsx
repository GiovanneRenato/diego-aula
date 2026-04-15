import React from 'react';
import { useQRStore } from '@/store/useQRStore';
import { Type, Link as LinkIcon, Mail, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const QRInput: React.FC = () => {
  const { content, setContent } = useQRStore();
  const [activeTab, setActiveTab] = React.useState('text');

  const tabs = [
    { id: 'text', icon: Type, label: 'Texto', placeholder: 'Digite seu texto aqui...' },
    { id: 'url', icon: LinkIcon, label: 'URL', placeholder: 'https://exemplo.com' },
    { id: 'email', icon: Mail, label: 'E-mail', placeholder: 'mailto:exemplo@email.com' },
    { id: 'phone', icon: Phone, label: 'Telefone', placeholder: 'tel:+5511999999999' },
    { id: 'sms', icon: MessageSquare, label: 'SMS', placeholder: 'sms:+5511999999999?body=Ola' },
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-2 p-1 bg-white/5 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
              tab.id === activeTab
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            )}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative group">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={currentTab.placeholder}
          className="w-full h-48 bg-black/20 border border-white/10 rounded-2xl p-6 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
        />
        <div className="absolute bottom-4 right-4 text-xs text-slate-600 group-focus-within:text-blue-500/50 transition-colors">
          {content.length} caracteres
        </div>
      </div>
    </div>
  );
};

export default QRInput;
