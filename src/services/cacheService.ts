import Redis from 'ioredis';
import { logger } from '../utils/logger';

const redis = new Redis();

class CacheService {
  async set(key: string, value: any, ttl: number) {
    try {
      await redis.set(key, JSON.stringify(value), 'EX', ttl);
      logger.info(`Cache set for key: ${key}`);
    } catch (error) {
      logger.error('Error setting cache:', error);
    }
  }

  async get(key: string) {
    try {
      const data = await redis.get(key);
      if (data) {
        logger.info(`Cache hit for key: ${key}`);
        return JSON.parse(data);
      }
      logger.info(`Cache miss for key: ${key}`);
      return null;
    } catch (error) {
      logger.error('Error getting cache:', error);
      return null;
    }
  }
}

export const cacheService = new CacheService();
