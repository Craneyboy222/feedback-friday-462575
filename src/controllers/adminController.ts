import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { moderateFeedback, moderateUser } from '../services/adminService';

export const moderateFeedbackEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbackId = req.params.id;
    const result = await moderateFeedback(feedbackId, req.body);
    res.status(200).json(result);
  } catch (error) {
    logger.error('Error moderating feedback', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const moderateUserEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const result = await moderateUser(userId, req.body);
    res.status(200).json(result);
  } catch (error) {
    logger.error('Error moderating user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};