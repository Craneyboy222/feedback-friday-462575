import { Pool } from 'pg';

class ConnectionPoolService {
  private static pool: Pool;

  static getPool(): Pool {
    if (!this.pool) {
      this.pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      });
    }
    return this.pool;
  }

  static async closePool() {
    if (this.pool) {
      await this.pool.end();
    }
  }
}

export default ConnectionPoolService;