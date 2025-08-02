import { Server } from 'socket.io';
import { logError } from '../utils/logger';

export class NotificationService {
  private io: Server;

  constructor(server: any) {
    this.io = new Server(server, { cors: { origin: '*' } });
    this.io.on('connection', (socket) => {
      console.log('New client connected');

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  async sendNotification(userId: string, message: string) {
    try {
      this.io.to(userId).emit('notification', message);
    } catch (error) {
      logError('sendNotification', error);
    }
  }
}