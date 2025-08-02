import fs from 'fs';
import path from 'path';
const srcPath = path.join(__dirname, '../src');
const checkTodos = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      checkTodos(filePath);
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes('TODO')) {
        console.error(`TODO found in ${filePath}`);
        process.exit(1);
      }
    }
  }
};
checkTodos(srcPath);