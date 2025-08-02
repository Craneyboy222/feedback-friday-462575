import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { registerUser, loginUser } from '../services/authService';
import { logger } from '../utils/logger';

export const register = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    logger.error('Error registering user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    logger.error('Error logging in user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};