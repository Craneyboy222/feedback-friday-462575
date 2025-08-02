import { exec } from 'child_process';

export const backupDatabase = () => {
  const command = `pg_dump ${process.env.DATABASE_URL} > backup.sql`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Backup error', error);
      return;
    }
    console.log('Database backup completed', stdout);
  });
};