import AWS from 'aws-sdk';
import { logger } from './logger';

const s3 = new AWS.S3();

export const uploadToS3 = async (bucket: string, key: string, body: Buffer | Uint8Array | Blob | string) => {
  try {
    const params = { Bucket: bucket, Key: key, Body: body };
    await s3.upload(params).promise();
  } catch (error) {
    logger.error('Error uploading to S3', { bucket, key, error });
    throw new Error('S3 upload failed');
  }
};

export const downloadFromS3 = async (bucket: string, key: string) => {
  try {
    const params = { Bucket: bucket, Key: key };
    const data = await s3.getObject(params).promise();
    return data.Body;
  } catch (error) {
    logger.error('Error downloading from S3', { bucket, key, error });
    throw new Error('S3 download failed');
  }
};