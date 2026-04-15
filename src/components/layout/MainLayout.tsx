import React from 'react';
import { LayoutDashboard, QrCode, History, Settings, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f1117] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-black text-slate-200 flex font-sans">
      
      {/* Sidebar - Dark Glassmorphism */}
      <aside className="w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <QrCode size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">QR<span className="text-blue-500">Gen</span></span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: QrCode, label: 'Gerar QR', active: false },
            { icon: History, label: 'Histórico', active: false },
            { icon: Settings, label: 'Configurações', active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                item.active 
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                : 'hover:bg-white/5 text-slate-400 hover:text-slate-100'
              )}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Navbar */}
        <header className="h-16 border-b border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
             <Menu className="md:hidden text-slate-400 cursor-pointer hover:text-white transition-colors" />
             <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">Painel Principal</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/20 shadow-lg" />
          </div>
        </header>

        {/* Content Scroll */}
        <section className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
