import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { Pool } from 'pg';
import { User } from '../types';
import { logger } from '../utils/logger';

const router = express.Router();
const pool = new Pool(); // Use environment variables to configure connection

// JWT Secret should be stored securely, e.g., using environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register a new user
router.post('/register', [
  body('username').isString().notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const userCheck = await pool.query('SELECT id FROM Users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert new user
    const { rows } = await pool.query(
      'INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
      [username, email, passwordHash]
    );

    const userId = rows[0].id;
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    logger.error('Error registering user', err);
    next(err);
  }
});

// Login an existing user
router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Find user by email
    const { rows } = await pool.query('SELECT id, password_hash FROM Users WHERE email = $1', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user: User = rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    logger.error('Error logging in user', err);
    next(err);
  }
});

export default router;