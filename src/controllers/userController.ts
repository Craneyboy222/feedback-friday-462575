import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getUserProfile, updateUserProfile } from '../services/userService';
import { logger } from '../utils/logger';

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user.id;
    const profile = await getUserProfile(userId);
    res.status(200).json(profile);
  } catch (error) {
    logger.error('Error fetching user profile', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.user.id;
    const updatedProfile = await updateUserProfile(userId, req.body);
    res.status(200).json(updatedProfile);
  } catch (error) {
    logger.error('Error updating user profile', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};