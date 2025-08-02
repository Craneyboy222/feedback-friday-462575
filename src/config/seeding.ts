import pool from './database';

export async function seedDatabase() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // Add seeding logic here
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

seedDatabase().catch(console.error);