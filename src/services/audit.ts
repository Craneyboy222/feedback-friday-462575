import { logSecurityEvent } from '../database';

export const auditLog = async (userId: string, action: string, details?: string) => {
  await logSecurityEvent({ userId, action, details, timestamp: new Date() });
};