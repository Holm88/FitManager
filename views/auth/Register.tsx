
import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden p-8 transition-colors">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary-600 mb-2">Criar Conta</h1>
          <p className="text-gray-500 dark:text-gray-400">Cadastro exclusivo para Personal Trainers</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-mail Profissional</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Senha</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />
          </div>

          <button 
            type="button"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
          >
            Cadastrar
          </button>
        </form>

        <div className="mt-8 text-center border-t pt-8 dark:border-slate-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-primary-600 font-semibold hover:underline">Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
