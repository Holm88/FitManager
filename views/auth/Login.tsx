
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, UserRole } from '../../types';
import { ShieldCheck, Lock, Mail, UserCircle } from 'lucide-react';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole>(UserRole.PERSONAL);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loginInput = email.toLowerCase().trim();
    
    // Lógica específica para o usuário admin
    if (loginInput === 'admin' && password === '123') {
      onLogin({
        id: 'admin-01',
        name: 'Administrador Master',
        email: 'admin@fitmanage.com',
        role: UserRole.ADMIN
      });
      return;
    }

    // Lógica específica para o usuário personal
    if (loginInput === 'personal' && password === '123') {
      onLogin({
        id: 'pers-01',
        name: 'Prof. Ricardo Silva',
        email: 'ricardo@fitmanage.com',
        role: UserRole.PERSONAL
      });
      return;
    }

    // Fallback para o seletor de mock (facilita testar outros perfis)
    if (email || password) {
       onLogin({
        id: 'mock-01',
        name: role === UserRole.ADMIN ? 'Admin User' : role === UserRole.PERSONAL ? 'Prof. Ricardo' : 'João Aluno',
        email: email || 'user@example.com',
        role: role
      });
    } else {
      setError('Por favor, preencha as credenciais ou use o seletor de perfil.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 p-4 transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Card de Credenciais de Teste - Expandido */}
        <div className="mb-6 bg-white dark:bg-slate-800 border border-primary-100 dark:border-primary-900/50 p-5 rounded-3xl shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="text-primary-500" size={18} />
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Acessos Rápidos (Senha: 123)</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-700">
              <p className="text-[10px] font-bold text-primary-600 mb-1">ADMINISTRADOR</p>
              <p className="text-sm font-mono font-black text-gray-700 dark:text-gray-300">admin</p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-700">
              <p className="text-[10px] font-bold text-primary-600 mb-1">PERSONAL</p>
              <p className="text-sm font-mono font-black text-gray-700 dark:text-gray-300">personal</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-gray-200 dark:shadow-none overflow-hidden p-8 border border-gray-100 dark:border-slate-700 transition-all">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-primary-600 mb-2 tracking-tight">FitManage</h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Gestão inteligente para Personal Trainers</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-xl text-center border border-red-100 dark:border-red-900/50 animate-pulse">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Usuário ou E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin ou personal"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="123"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase mb-2 ml-1 tracking-widest text-center">Ou use o seletor de perfil (Mock)</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-gray-300 text-sm outline-none focus:border-primary-500 transition-all text-center cursor-pointer font-bold"
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
              >
                <option value={UserRole.ADMIN}>Acesso Administrador</option>
                <option value={UserRole.PERSONAL}>Acesso Personal Trainer</option>
                <option value={UserRole.ALUNO}>Acesso Aluno</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary-500/30 transition-all transform active:scale-95 text-lg uppercase tracking-wider mt-4"
            >
              Entrar no Sistema
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-50 dark:border-slate-700 pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Personal Trainer?{' '}
              <Link to="/register" className="text-primary-600 font-bold hover:underline">Crie sua conta grátis</Link>
            </p>
          </div>
        </div>
        
        <p className="text-center mt-8 text-xs text-gray-400 dark:text-gray-600 font-medium">
          © 2024 FitManage SaaS. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Login;
