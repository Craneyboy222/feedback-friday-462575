import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { createFeedback, getFeedbacks, getFeedbackById } from '../services/feedbackService';

export const createFeedbackEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedback = await createFeedback(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    logger.error('Error creating feedback', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const listFeedbacks = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbacks = await getFeedbacks(req.query);
    res.status(200).json(feedbacks);
  } catch (error) {
    logger.error('Error fetching feedbacks', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbackId = req.params.id;
    const feedback = await getFeedbackById(feedbackId);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (error) {
    logger.error('Error fetching feedback', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};