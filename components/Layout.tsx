
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  LogOut, 
  Moon, 
  Sun, 
  Dumbbell, 
  CreditCard,
  Menu,
  ChevronRight
} from 'lucide-react';
import { User, UserRole } from '../types';

interface LayoutProps {
  user: User;
  onLogout: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ user, onLogout, toggleTheme, isDarkMode }) => {
  const location = useLocation();

  const adminMenu = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Personals', path: '/admin/personals', icon: UserSquare2 },
    { label: 'Alunos', path: '/admin/students', icon: Users },
  ];

  const personalMenu = [
    { label: 'Dashboard', path: '/personal', icon: LayoutDashboard },
    { label: 'Meus Alunos', path: '/personal/students', icon: Users },
  ];

  const alunoMenu = [
    { label: 'Início', path: '/aluno', icon: LayoutDashboard },
    { label: 'Meu Treino', path: '/aluno/workout', icon: Dumbbell },
    { label: 'Pagamentos', path: '/aluno/payments', icon: CreditCard },
  ];

  const menuItems = user.role === UserRole.ADMIN 
    ? adminMenu 
    : user.role === UserRole.PERSONAL 
      ? personalMenu 
      : alunoMenu;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-800 h-screen fixed left-0 top-0 border-r border-gray-200 dark:border-slate-700">
        <div className="p-6 border-b border-gray-100 dark:border-slate-700">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-500">FitManage</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-slate-700 space-y-2">
          <button
            onClick={toggleTheme}
            className="flex items-center w-full space-x-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="font-medium">{isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>
          <button
            onClick={onLogout}
            className="flex items-center w-full space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 pb-20 md:pb-0">
        {/* Top Header Mobile/Desktop */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="md:hidden text-primary-600 dark:text-primary-500 font-bold text-xl">FitManage</div>
             <h2 className="hidden md:block text-xl font-semibold text-gray-800 dark:text-white">
               {menuItems.find(i => i.path === location.pathname)?.label || 'Detalhes'}
             </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white leading-none">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">{user.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold border-2 border-white dark:border-slate-700 shadow-sm">
                {user.name.charAt(0)}
              </div>
            </div>
            
            <button 
              onClick={toggleTheme}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Bottom Navigation Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex justify-around items-center h-16 px-2 z-40">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
        <button 
          onClick={onLogout}
          className="flex flex-col items-center justify-center flex-1 h-full text-red-400"
        >
          <LogOut size={20} />
          <span className="text-[10px] mt-1 font-medium">Sair</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
