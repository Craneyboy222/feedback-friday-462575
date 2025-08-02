import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';

const pool = new Pool();

const secretKey = process.env.JWT_SECRET || 'your-secret-key';

// Types
interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  profile_info?: string;
}

// Utility Functions
async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

function generateToken(user: User): string {
  return jwt.sign({ id: user.id, username: user.username, email: user.email }, secretKey, { expiresIn: '1h' });
}

// Middleware
export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, secretKey, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
    req.user = user;
    next();
  });
}

// Services
export async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const password_hash = await hashPassword(password);
    const result = await pool.query('INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email', [username, email, password_hash]);
    const user = result.rows[0];
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await comparePassword(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
