
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { User } from '../../types';

interface AlunoDashboardProps {
  user: User;
}

const AlunoDashboard: React.FC<AlunoDashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-primary-600 rounded-3xl p-8 text-white shadow-xl shadow-primary-500/20 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Olá, {user.name}!</h2>
          <p className="opacity-90 mb-6">Pronto para o treino de hoje? Mantenha o foco!</p>
          <Link 
            to="/aluno/workout"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-all transform active:scale-95"
          >
            <Dumbbell size={20} />
            Acessar Treino de Hoje
          </Link>
        </div>
        <Dumbbell className="absolute right-[-20px] bottom-[-20px] text-white/10" size={200} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 dark:text-white">Status da Mensalidade</h3>
            <CreditCard size={20} className="text-primary-500" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Próximo Vencimento</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">10 de Junho</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold">EM DIA</span>
          </div>
          <Link to="/aluno/payments" className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 py-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 transition-all">
            Ver Histórico
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 dark:text-white">Últimas Conquistas</h3>
            <CheckCircle2 size={20} className="text-green-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center font-bold">🔥</div>
              <div>
                <p className="text-sm font-bold dark:text-white">7 Dias de Fogo</p>
                <p className="text-xs text-gray-500">Você treinou 7 dias seguidos!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-bold">💪</div>
              <div>
                <p className="text-sm font-bold dark:text-white">Recorde de Carga</p>
                <p className="text-xs text-gray-500">Novo recorde no Agachamento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Treinou hoje?</h3>
          <p className="text-gray-500 dark:text-gray-400">Marque seu treino como concluído para o seu professor acompanhar.</p>
        </div>
        <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-black py-5 px-10 rounded-2xl shadow-lg shadow-green-500/20 transition-all transform hover:scale-105 active:scale-95 text-lg uppercase tracking-wider">
          Treino Realizado!
        </button>
      </div>
    </div>
  );
};

export default AlunoDashboard;
