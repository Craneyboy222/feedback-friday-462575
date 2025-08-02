import { exec } from 'child_process';

export const runMigration = (migrationName: string) => {
  exec(`npx sequelize-cli db:migrate --name ${migrationName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Migration error: ${stderr}`);
      return;
    }
    console.log(`Migration output: ${stdout}`);
  });
};

export const undoMigration = () => {
  exec('npx sequelize-cli db:migrate:undo', (error, stdout, stderr) => {
    if (error) {
      console.error(`Undo migration error: ${stderr}`);
      return;
    }
    console.log(`Undo migration output: ${stdout}`);
  });
};