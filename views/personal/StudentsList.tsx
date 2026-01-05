
import React from 'react';
import { Search, Plus, MoreHorizontal, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentsList: React.FC = () => {
  const students = [
    { id: 1, name: 'Ricardo Martins', status: 'active', lastWorkout: 'Hoje, 09:30' },
    { id: 2, name: 'Juliana Paes', status: 'active', lastWorkout: 'Ontem, 18:15' },
    { id: 3, name: 'Vinicius Costa', status: 'inactive', lastWorkout: 'Há 12 dias' },
    { id: 4, name: 'Gabriela Duarte', status: 'active', lastWorkout: 'Hoje, 07:00' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar aluno..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 transition-all dark:text-white"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary-600/20 transition-all transform active:scale-95">
          <Plus size={20} />
          Novo Aluno
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <User size={28} />
              </div>
              <button className="p-2 text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{s.name}</h4>
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                s.status === 'active' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-gray-500'
              }`}>
                {s.status === 'active' ? 'Ativo' : 'Inativo'}
              </span>
              <p className="text-xs text-gray-400 dark:text-gray-500">Último treino: <span className="text-gray-700 dark:text-gray-300 font-medium">{s.lastWorkout}</span></p>
            </div>

            <Link 
              to={`/personal/students/${s.id}`}
              className="block w-full text-center py-3 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
            >
              Ver Perfil Completo
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
