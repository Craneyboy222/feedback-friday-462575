import NodeCache from 'node-cache';
import { logger } from './logger';

const cache = new NodeCache();

export const setCache = (key: string, value: any, ttl: number) => {
  try {
    cache.set(key, value, ttl);
  } catch (error) {
    logger.error('Error setting cache', { key, error });
    throw new Error('Cache set operation failed');
  }
};

export const getCache = (key: string) => {
  try {
    return cache.get(key);
  } catch (error) {
    logger.error('Error getting cache', { key, error });
    throw new Error('Cache get operation failed');
  }
};

export const deleteCache = (key: string) => {
  try {
    cache.del(key);
  } catch (error) {
    logger.error('Error deleting cache', { key, error });
    throw new Error('Cache delete operation failed');
  }
};