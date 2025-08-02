import { Request, Response, NextFunction } from 'express';
import { setCache } from '../services/cache';

export const apiCache = (req: Request, res: Response, next: NextFunction) => {
  const originalSend = res.send;
  res.send = function (body) {
    setCache(req.originalUrl, body);
    return originalSend.call(this, body);
  };
  next();
};

export const monitorPerformance = (req: Request, res: Response, next: NextFunction) => {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log(`${req.method} ${req.url} [${res.statusCode}] - ${elapsedTimeInMs}ms`);
  });

  next();
};