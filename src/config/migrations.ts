import { Client } from 'pg';
import { DATABASE_URL } from './env';

const client = new Client({ connectionString: DATABASE_URL });

export async function runMigrations() {
  await client.connect();
  // Define migration scripts here
  await client.end();
}

runMigrations().catch(console.error);