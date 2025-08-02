import nodemailer from 'nodemailer';
import { logError } from '../utils/logger';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password'
  }
});

export class EmailService {
  async sendEmail(to: string, subject: string, text: string) {
    try {
      await transporter.sendMail({
        from: 'your-email@example.com',
        to,
        subject,
        text
      });
    } catch (error) {
      logError('sendEmail', error);
    }
  }
}