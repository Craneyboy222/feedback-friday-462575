import * as fs from 'fs';
import * as path from 'path';

class Logger {
  private logFile: string;

  constructor() {
    this.logFile = path.join(__dirname, '../../logs/app.log');
  }

  private formatMessage(level: string, message: string) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  }

  public info(message: string) {
    this.writeLog('info', message);
  }

  public error(message: string) {
    this.writeLog('error', message);
  }

  private writeLog(level: string, message: string) {
    const formattedMessage = this.formatMessage(level, message);
    fs.appendFileSync(this.logFile, formattedMessage + '\n', 'utf8');
    console.log(formattedMessage);
  }
}

export default new Logger();