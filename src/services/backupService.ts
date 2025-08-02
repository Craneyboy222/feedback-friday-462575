import { exec } from 'child_process';

class BackupService {
  backupDatabase() {
    const backupCommand = 'pg_dump $DATABASE_URL > backup.sql';
    exec(backupCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Backup error: ${stderr}`);
        return;
      }
      console.log(`Backup output: ${stdout}`);
    });
  }
}

export default new BackupService();'Error during backup:', error);
        return;
      }
      logger.info('Backup completed successfully', stdout);
    });
  }
}

export const backupService = new BackupService();
