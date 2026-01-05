
import React, { useState } from 'react';
import { ChevronLeft, Info, Check, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkoutView: React.FC = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const toggleExercise = (id: number) => {
    if (completedExercises.includes(id)) {
      setCompletedExercises(completedExercises.filter(e => e !== id));
    } else {
      setCompletedExercises([...completedExercises, id]);
    }
  };

  const exercises = [
    { id: 1, name: 'Supino Reto c/ Barra', sets: 4, reps: '10 a 12', rest: '60s', obs: 'Cadência 2-0-2' },
    { id: 2, name: 'Desenvolvimento c/ Halteres', sets: 3, reps: '12', rest: '45s', obs: 'Foco na estabilidade' },
    { id: 3, name: 'Tríceps Polia (Corda)', sets: 4, reps: '15', rest: '30s', obs: 'Máxima amplitude' },
    { id: 4, name: 'Flexão de Braços', sets: 3, reps: 'Até a falha', rest: '60s', obs: 'Mantenha o core firme' },
  ];

  const progress = Math.round((completedExercises.length / exercises.length) * 100);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <Link to="/aluno" className="p-2 bg-white dark:bg-slate-800 rounded-xl text-gray-500 dark:text-gray-400 shadow-sm">
          <ChevronLeft size={20} />
        </Link>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Treino A - Superiores</h2>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm sticky top-20 z-20">
         <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-gray-600 dark:text-gray-300">Progresso do Treino</span>
            <span className="text-sm font-black text-primary-600 dark:text-primary-400">{progress}%</span>
         </div>
         <div className="w-full bg-gray-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-primary-500 h-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(14,165,233,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
         </div>
      </div>

      <div className="space-y-4">
        {exercises.map((ex) => (
          <div 
            key={ex.id} 
            className={`bg-white dark:bg-slate-800 p-5 rounded-2xl border transition-all ${
              completedExercises.includes(ex.id) 
                ? 'border-green-200 bg-green-50/30 dark:border-green-900/50 dark:bg-green-900/10' 
                : 'border-gray-100 dark:border-slate-700'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className={`font-bold transition-colors ${completedExercises.includes(ex.id) ? 'text-green-700 dark:text-green-400 line-through' : 'text-gray-900 dark:text-white'}`}>
                    {ex.name}
                  </h4>
                  <Info size={14} className="text-gray-400 cursor-help" />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-slate-900 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-primary-600">{ex.sets}</span> Séries
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-slate-900 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-primary-600">{ex.reps}</span> Reps
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-slate-900 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-primary-600">{ex.rest}</span> Descanso
                  </div>
                </div>
                {ex.obs && (
                  <p className="mt-3 text-xs text-gray-500 italic bg-gray-50/50 dark:bg-slate-900/50 p-2 rounded-lg">
                    Obs: {ex.obs}
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => toggleExercise(ex.id)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  completedExercises.includes(ex.id) 
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 rotate-[360deg]' 
                    : 'bg-gray-100 dark:bg-slate-900 text-gray-400 hover:bg-primary-50 hover:text-primary-500'
                }`}
              >
                {completedExercises.includes(ex.id) ? <Check size={24} strokeWidth={3} /> : <PlayCircle size={24} />}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 pb-12">
        <button 
          className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
            progress === 100 
              ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' 
              : 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/20'
          }`}
        >
          {progress === 100 ? (
            <>
              <Check size={24} />
              FINALIZAR TREINO
            </>
          ) : (
            'MARCAR COMO CONCLUÍDO'
          )}
        </button>
      </div>
    </div>
  );
};

export default WorkoutView;
