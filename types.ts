
export enum UserRole {
  ADMIN = 'ADMIN',
  PERSONAL = 'PERSONAL',
  ALUNO = 'ALUNO'
}

export enum PaymentStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
  OVERDUE = 'OVERDUE'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Student extends User {
  personalId?: string;
  personalName?: string;
  status: 'active' | 'inactive';
  lastWorkout?: string;
  goal?: string;
}

export interface Personal extends User {
  status: 'active' | 'inactive';
  studentCount: number;
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  isActive: boolean;
  createdAt: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  observations?: string;
}

export interface Execution {
  id: string;
  date: string;
  observation: string;
  studentId: string;
}

export interface Payment {
  id: string;
  plan: string;
  value: number;
  dueDate: string;
  status: PaymentStatus;
}
