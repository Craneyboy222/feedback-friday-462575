import { QueryFunction } from './database';
import { User, Feedback } from './models';

export interface UserRepository {
  findById: (id: number) => Promise<User | null>;
  findByEmail: (email: string) => Promise<User | null>;
  create: (user: Omit<User, 'id'>) => Promise<User>;
}

export interface FeedbackRepository {
  findByUserId: (userId: number) => Promise<Feedback[]>;
  create: (feedback: Omit<Feedback, 'id'>) => Promise<Feedback>;
}
