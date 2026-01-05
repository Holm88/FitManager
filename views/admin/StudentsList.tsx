
import React from 'react';
import { Search, UserCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentsList: React.FC = () => {
  const students = [
    { id: 1, name: 'Ana Souza', personal: 'Rodrigo Silva', status: 'Ativo' },
    { id: 2, name: 'Pedro Lima', personal: 'Camila Santos', status: 'Ativo' },
    { id: 3, name: 'Juliana Dias', personal: 'Beatriz Costa', status: 'Ativo' },
    { id: 4, name: 'Felipe Melo', personal: 'Rodrigo Silva', status: 'Atraso' },
  ];

  return (
    <div className="space-y-6">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Buscar alunos na plataforma..."
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 transition-all dark:text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map((s) => (
          <Link 
            key={s.id}
            to={`/admin/students/${s.id}`}
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-slate-900 flex items-center justify-center text-gray-400">
                <UserCircle2 size={32} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{s.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Personal: <span className="text-primary-600 dark:text-primary-400 font-medium">{s.personal}</span></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                s.status === 'Ativo' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {s.status}
              </span>
              <ChevronRight className="text-gray-300 group-hover:text-primary-500 transition-colors" size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
