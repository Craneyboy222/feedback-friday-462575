import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { Role } from '../models/Role';
import { logger } from '../utils/logger';

class AdminService {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      logger.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateUserRole(req: Request, res: Response, next: NextFunction) {
    const { userId, role } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.role = role;
      await user.save();
      res.status(200).json({ message: 'User role updated' });
    } catch (error) {
      logger.error('Error updating user role:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export const adminService = new AdminService();
