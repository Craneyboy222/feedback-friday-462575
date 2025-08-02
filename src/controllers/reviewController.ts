import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { createComment, getCommentsByFeedbackId } from '../services/commentService';

export const createCommentEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const comment = await createComment(req.body);
    res.status(201).json(comment);
  } catch (error) {
    logger.error('Error creating comment', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const listComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbackId = req.params.feedbackId;
    const comments = await getCommentsByFeedbackId(feedbackId);
    res.status(200).json(comments);
  } catch (error) {
    logger.error('Error fetching comments', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};