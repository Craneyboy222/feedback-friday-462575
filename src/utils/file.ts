import * as fs from 'fs';
import * as path from 'path';

export const saveFile = (filePath: string, data: Buffer) => {
  fs.writeFileSync(filePath, data);
};

export const readFile = (filePath: string): Buffer => {
  return fs.readFileSync(filePath);
};

export const deleteFile = (filePath: string) => {
  fs.unlinkSync(filePath);
};