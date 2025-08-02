import { Request, Response, NextFunction } from 'express';

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  // Add validation logic
  next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  // Add validation logic
  next();
};