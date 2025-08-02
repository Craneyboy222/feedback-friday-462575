import { Pool } from 'pg';
import { logError } from './logger';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export const query = async (text: string, params?: any[]): Promise<any> => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (err) {
    logError('Database query error', err);
    throw err;
  }
};

export const transaction = async (callback: (client: any) => Promise<void>) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await callback(client);
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    logError('Transaction error', err);
    throw err;
  } finally {
    client.release();
  }
};