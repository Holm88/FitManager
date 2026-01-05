
import React from 'react';
import { Users, AlertCircle, Clock, CheckCircle2, Calendar } from 'lucide-react';
import StatCard from '../../components/StatCard';

const PersonalDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Alunos Ativos" value="28" icon={Users} />
        <StatCard label="Pagamentos Pendentes" value="5" icon={AlertCircle} color="red" />
        <StatCard label="Sem treino (3 dias+)" value="12" icon={Clock} color="yellow" />
        <StatCard label="Treinos hoje" value="42" icon={CheckCircle2} color="green" />
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Alunos que precisam de atenção</h3>
          <button className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">Ver todos</button>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-slate-700">
          {[
            { name: 'Lucas Gabriel', reason: 'Vencimento hoje', color: 'text-red-500', icon: AlertCircle },
            { name: 'Mariana Silveira', reason: 'Não treina há 5 dias', color: 'text-yellow-500', icon: Clock },
            { name: 'Roberto Junior', reason: 'Treino finalizado', color: 'text-primary-500', icon: Calendar },
          ].map((item, idx) => (
            <div key={idx} className="p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-900 flex items-center justify-center font-bold text-gray-500">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">{item.name}</p>
                  <p className={`text-xs flex items-center gap-1 ${item.color}`}>
                    <item.icon size={12} />
                    {item.reason}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-bold rounded-xl transition-all hover:bg-primary-100 dark:hover:bg-primary-900/40">
                Ver Aluno
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
