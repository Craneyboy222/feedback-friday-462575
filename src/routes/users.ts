import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { authenticateToken, authorizeUser } from '../middleware/auth';
import { User, IUser } from '../models/User';
import { logger } from '../utils/logger';

const router = express.Router();
const pool = new Pool(); // PostgreSQL connection pool

// Register a new user
router.post('/register', [
  body('username').isString().trim().isLength({ min: 3 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isString().isLength({ min: 6 })
], async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser: IUser = await User.create(pool, { username, email, password_hash: hash });
    res.status(201).json(newUser);
  } catch (error) {
    logger.error('Error registering user:', error);
    next(error);
  }
});

// Login a user
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').isString()
], async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(pool, email);
    if (user && await bcrypt.compare(password, user.password_hash)) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    logger.error('Error logging in:', error);
    next(error);
  }
});

// Get user profile
router.get('/profile', authenticateToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(pool, req.user.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    logger.error('Error fetching profile:', error);
    next(error);
  }
});

// Update user profile
router.put('/profile', [
  authenticateToken,
  body('profile_info').optional().isString()
], async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { profile_info } = req.body;
  try {
    const updatedUser = await User.updateProfile(pool, req.user.id, { profile_info });
    res.json(updatedUser);
  } catch (error) {
    logger.error('Error updating profile:', error);
    next(error);
  }
});

export default router;
