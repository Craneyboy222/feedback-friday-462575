import Bull from 'bull';
import { logger } from '../utils/logger';

const feedbackQueue = new Bull('feedbackProcessing');

feedbackQueue.process(async (job, done) => {
  try {
    logger.info('Processing job:', job.id);
    // Placeholder for job processing logic
    done();
  } catch (error) {
    logger.error('Error processing job:', error);
    done(error);
  }
});

class QueueService {
  async addJob(data: any) {
    try {
      await feedbackQueue.add(data);
      logger.info('Job added to queue');
    } catch (error) {
      logger.error('Error adding job to queue:', error);
    }
  }
}

export const queueService = new QueueService();
