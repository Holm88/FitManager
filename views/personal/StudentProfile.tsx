
import React, { useState } from 'react';
import { 
  Calendar, 
  Dumbbell, 
  CreditCard, 
  History, 
  Plus, 
  Trash2, 
  Edit,
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react';
import { UserRole } from '../../types';

interface StudentProfileProps {
  role: UserRole;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState<'workouts' | 'executions' | 'payments'>('workouts');

  const student = {
    name: 'Ana Júlia Souza',
    goal: 'Emagrecimento e Definição',
    status: 'active',
    avatar: 'A'
  };

  const tabs = [
    { id: 'workouts', label: 'Treinos', icon: Dumbbell },
    { id: 'executions', label: 'Execuções', icon: History },
    { id: 'payments', label: 'Pagamentos', icon: CreditCard },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Profile Header */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-3xl bg-primary-600 text-white flex items-center justify-center text-4xl font-black shadow-lg shadow-primary-500/30">
            {student.avatar}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{student.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <Calendar size={16} /> Objetivo: <span className="text-gray-900 dark:text-gray-200 font-semibold">{student.goal}</span>
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
                {student.status === 'active' ? 'Ativo' : 'Inativo'}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-400 rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-all border border-gray-200 dark:border-slate-700">
              <Edit size={20} />
            </button>
            {role === UserRole.ADMIN && (
              <button className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl hover:bg-red-100 transition-all border border-red-100 dark:border-red-900/50">
                <Trash2 size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex bg-white dark:bg-slate-800 p-2 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all flex-1 whitespace-nowrap ${
                isActive 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' 
                  : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-700'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'workouts' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Planilhas de Treino</h3>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white font-bold rounded-xl text-sm shadow-md hover:bg-primary-700 transition-all">
                <Plus size={18} /> Novo Treino
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Treino A - Superiores', exercises: 6, status: 'Ativo' },
                { title: 'Treino B - Inferiores e Glúteos', exercises: 8, status: 'Ativo' },
                { title: 'Treino C - HIIT e Core', exercises: 5, status: 'Inativo' },
              ].map((w, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 flex items-center justify-between hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${w.status === 'Ativo' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400' : 'bg-gray-100 text-gray-400'}`}>
                      <Dumbbell size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{w.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{w.exercises} exercícios cadastrados</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${w.status === 'Ativo' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-500'}`}>
                      {w.status}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-primary-600">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'executions' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Timeline de Execução</h3>
            <div className="relative pl-8 border-l-2 border-primary-100 dark:border-slate-700 space-y-8 ml-4">
              {[
                { date: 'Hoje, 09:30', obs: 'Sentiu leve cansaço no Treino A. Aumentamos a carga no supino.', icon: CheckCircle2, type: 'success' },
                { date: 'Ontem, 18:15', obs: 'Treino B concluído com feedback de execução limpa.', icon: CheckCircle2, type: 'success' },
                { date: '15 Mai 2024', obs: 'Não realizou o treino. Aluno viajou.', icon: Clock, type: 'warning' },
              ].map((ex, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[41px] top-0 p-1.5 rounded-full bg-white dark:bg-slate-800 border-2 ${ex.type === 'success' ? 'border-primary-500 text-primary-500' : 'border-yellow-500 text-yellow-500'}`}>
                    <ex.icon size={16} />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <p className="text-xs font-bold text-primary-600 dark:text-primary-400 mb-1">{ex.date}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ex.obs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Gestão Financeira</h3>
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-900/40">
                <p className="text-xs text-primary-700 dark:text-primary-300 font-medium">Próximo Vencimento</p>
                <p className="text-lg font-bold text-primary-600 dark:text-primary-400">10 Jun 2024</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
               <div className="p-6 divide-y divide-gray-50 dark:divide-slate-700">
                  {[
                    { month: 'Maio 2024', value: 'R$ 250,00', status: 'Pago', method: 'Pix' },
                    { month: 'Abril 2024', value: 'R$ 250,00', status: 'Pago', method: 'Cartão' },
                    { month: 'Março 2024', value: 'R$ 250,00', status: 'Atrasado', method: '-' },
                  ].map((p, idx) => (
                    <div key={idx} className="py-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{p.month}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{p.value} • {p.method}</p>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${p.status === 'Pago' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                           {p.status}
                         </span>
                         <button className="text-gray-400 hover:text-primary-600">
                           <Edit size={16} />
                         </button>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;
