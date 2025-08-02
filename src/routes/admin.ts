import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult, param } from 'express-validator';
import { verifyAdminToken } from '../middleware/auth';
import { getAdminDashboard, manageUser, manageFeedback } from '../controllers/adminController';
import { logger } from '../utils/logger';

const router = express.Router();

// Middleware for admin authentication
router.use(verifyAdminToken);

// Error handling middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};

// Request validation middleware
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Admin Dashboard
router.get('/dashboard', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dashboardData = await getAdminDashboard();
    res.json(dashboardData);
  } catch (error) {
    next(error);
  }
});

// Manage User
router.put('/user/:id',
  [
    param('id').isUUID().withMessage('Invalid user ID'),
    body('action').isIn(['ban', 'unban']).withMessage('Invalid action')
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { action } = req.body;
      await manageUser(id, action);
      res.json({ message: `User ${action}ned successfully` });
    } catch (error) {
      next(error);
    }
  }
);

// Manage Feedback
router.delete('/feedback/:id',
  [
    param('id').isUUID().withMessage('Invalid feedback ID')
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await manageFeedback(id);
      res.json({ message: 'Feedback deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
);

router.use(errorHandler);

export default router;
