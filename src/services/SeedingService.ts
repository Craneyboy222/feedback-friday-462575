import { exec } from 'child_process';

class SeedingService {
  runSeeders() {
    exec('npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
      if (error) {
        console.error(`Seeding error: ${stderr}`);
        return;
      }
      console.log(`Seeding output: ${stdout}`);
    });
  }
}

export default new SeedingService();