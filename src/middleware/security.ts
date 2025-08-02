import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';

export const securityMiddleware = (app: any) => {
  app.use(helmet());
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    next();
  });
};