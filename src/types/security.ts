export interface AuditLog {
  userId: string;
  action: string;
  details?: string;
  timestamp: Date;
}