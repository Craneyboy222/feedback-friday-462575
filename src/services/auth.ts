import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/security';
import { getUserByEmail } from '../database';

export const registerUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save user to database with hashedPassword
};

export const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user || !await bcrypt.compare(password, user.password_hash)) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};