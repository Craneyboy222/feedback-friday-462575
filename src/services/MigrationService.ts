import { exec } from 'child_process';

class MigrationService {
  runMigrations() {
    exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
      if (error) {
        console.error(`Migration error: ${stderr}`);
        return;
      }
      console.log(`Migration output: ${stdout}`);
    });
  }
}

export default new MigrationService();