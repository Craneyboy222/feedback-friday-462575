import { exec } from 'child_process';
exec('jest --coverage', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing tests: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
  const regex = /All files\s+\|\s+(?<statements>\d+)%/;
  const match = regex.exec(stdout);
  if (match && parseInt(match.groups.statements) < 80) {
    console.error('Coverage below threshold');
    process.exit(1);
  }
});