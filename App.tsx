
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserRole, User } from './types';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import AdminDashboard from './views/admin/Dashboard';
import PersonalDashboard from './views/personal/Dashboard';
import AlunoDashboard from './views/aluno/Dashboard';
import Layout from './components/Layout';
import PersonalsList from './views/admin/PersonalsList';
import AdminStudentsList from './views/admin/StudentsList';
import PersonalStudentsList from './views/personal/StudentsList';
import StudentProfile from './views/personal/StudentProfile';
import WorkoutView from './views/aluno/WorkoutView';
import AlunoPayments from './views/aluno/Payments';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {!user ? (
          <>
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          /* Protected Routes */
          <Route element={<Layout user={user} onLogout={handleLogout} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}>
            {user.role === UserRole.ADMIN && (
              <>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/personals" element={<PersonalsList />} />
                <Route path="/admin/students" element={<AdminStudentsList />} />
                <Route path="/admin/students/:id" element={<StudentProfile role={UserRole.ADMIN} />} />
                <Route path="/" element={<Navigate to="/admin" />} />
              </>
            )}

            {user.role === UserRole.PERSONAL && (
              <>
                <Route path="/personal" element={<PersonalDashboard />} />
                <Route path="/personal/students" element={<PersonalStudentsList />} />
                <Route path="/personal/students/:id" element={<StudentProfile role={UserRole.PERSONAL} />} />
                <Route path="/" element={<Navigate to="/personal" />} />
              </>
            )}

            {user.role === UserRole.ALUNO && (
              <>
                <Route path="/aluno" element={<AlunoDashboard user={user} />} />
                <Route path="/aluno/workout" element={<WorkoutView />} />
                <Route path="/aluno/payments" element={<AlunoPayments />} />
                <Route path="/" element={<Navigate to="/aluno" />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
