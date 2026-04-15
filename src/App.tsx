import MainLayout from './components/layout/MainLayout';
import { motion } from 'motion/react';
import QRInput from './components/features/QRInput';
import QRPreview from './components/features/QRPreview';
import QRSettings from './components/features/QRSettings';

export default function App() {
  return (
    <MainLayout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Área Central de Geração */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 rounded-[2.5rem] glass-card flex flex-col items-center justify-center min-h-[400px]">
            <QRPreview />
          </div>
          
          <div className="p-8 rounded-[2.5rem] glass-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                <span className="text-blue-500">✍️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Conteúdo</h3>
                <p className="text-sm text-slate-500">O que seu QR Code deve dizer?</p>
              </div>
            </div>
            <QRInput />
          </div>
        </div>

        {/* Configurações Rápidas */}
        <div className="space-y-8">
          <div className="p-8 rounded-[2.5rem] glass-card sticky top-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/20">
                <span className="text-purple-500">⚙️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Personalizar</h3>
                <p className="text-sm text-slate-500">Ajuste o estilo e precisão</p>
              </div>
            </div>
            <QRSettings />
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
