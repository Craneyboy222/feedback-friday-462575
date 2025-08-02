import dotenv from 'dotenv';
dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const DATABASE_URL = process.env.DATABASE_URL || 'postgres://username:password@localhost:5432/feedbackdb';
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';