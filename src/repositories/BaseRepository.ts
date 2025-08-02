import { Pool } from 'pg';

class BaseRepository {
  protected db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  protected async query(queryText: string, params: any[]): Promise<any> {
    try {
      const result = await this.db.query(queryText, params);
      return result.rows;
    } catch (error) {
      console.error('Database query error:', error.message);
      throw new Error('Database query failed');
    }
  }
}

export default BaseRepository;