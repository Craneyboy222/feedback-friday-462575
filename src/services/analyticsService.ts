import { Request, Response, NextFunction } from 'express';
import { Feedback } from '../models/Feedback';
import { logger } from '../utils/logger';

class AnalyticsService {
  async getFeedbackStats(req: Request, res: Response, next: NextFunction) {
    try {
      const feedbackCount = await Feedback.count();
      const feedbackByCompany = await Feedback.findAll({
        attributes: ['company_name', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
        group: ['company_name']
      });
      res.status(200).json({ feedbackCount, feedbackByCompany });
    } catch (error) {
      logger.error('Error fetching feedback stats:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export const analyticsService = new AnalyticsService();
