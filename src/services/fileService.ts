import AWS from 'aws-sdk';
import { Request, Response } from 'express';
import { logger } from '../utils/logger';

const s3 = new AWS.S3();

class FileService {
  async uploadFile(req: Request, res: Response) {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const params = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const data = await s3.upload(params).promise();
      logger.info('File uploaded successfully:', data.Location);
      res.status(200).json({ location: data.Location });
    } catch (error) {
      logger.error('Error uploading file:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export const fileService = new FileService();
