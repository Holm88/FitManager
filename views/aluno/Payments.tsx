
import React from 'react';
import { ChevronLeft, Receipt, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlunoPayments: React.FC = () => {
  const history = [
    { id: 1, period: 'Maio 2024', date: '08/05/2024', value: 'R$ 180,00', status: 'PAID' },
    { id: 2, period: 'Abril 2024', date: '09/04/2024', value: 'R$ 180,00', status: 'PAID' },
    { id: 3, period: 'Março 2024', date: '10/03/2024', value: 'R$ 180,00', status: 'PAID' },
    { id: 4, period: 'Fevereiro 2024', date: '12/02/2024', value: 'R$ 180,00', status: 'PAID' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/aluno" className="p-2 bg-white dark:bg-slate-800 rounded-xl text-gray-500 dark:text-gray-400 shadow-sm">
          <ChevronLeft size={20} />
        </Link>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pagamentos</h2>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm text-center">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
          <Receipt size={32} />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Status Atual</p>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white">Assinatura Ativa</h3>
        <p className="text-sm text-green-600 dark:text-green-400 font-bold mt-2">Próximo débito em 10 de Junho</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-gray-800 dark:text-white px-2">Histórico de Transações</h4>
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
          {history.map((h) => (
            <div key={h.id} className="p-5 flex items-center justify-between border-b border-gray-50 dark:border-slate-700 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-slate-900 flex items-center justify-center text-gray-400">
                  <CheckCircle size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{h.period}</p>
                  <p className="text-xs text-gray-500">{h.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900 dark:text-white">{h.value}</p>
                <span className="text-[10px] font-black text-green-600 dark:text-green-400 uppercase">Pago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlunoPayments;
