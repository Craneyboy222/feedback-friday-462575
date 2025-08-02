import Bull from 'bull';
import { logger } from './logger';

const queue = new Bull('task-queue');

export const addTaskToQueue = async (taskName: string, data: any) => {
  try {
    await queue.add(taskName, data);
  } catch (error) {
    logger.error('Error adding task to queue', { taskName, error });
    throw new Error('Queue add operation failed');
  }
};

export const processQueue = (taskName: string, processor: Bull.ProcessCallbackFunction<any>) => {
  try {
    queue.process(taskName, processor);
  } catch (error) {
    logger.error('Error processing queue', { taskName, error });
    throw new Error('Queue processing failed');
  }
};