export const BackupConfig = {
  frequency: 'daily', // Options: 'hourly', 'daily', 'weekly'
  retentionPeriod: 30, // Number of days to retain backups
  backupLocation: 's3://enterprise-app-backups',
  encryption: true, // Enable encryption for backups
  notificationEmail: 'admin@enterpriseapp.com' // Email for backup notifications
};
