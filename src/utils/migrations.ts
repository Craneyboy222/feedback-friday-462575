import { query } from './database';

export const runMigrations = async () => {
  try {
    await query(`CREATE TABLE IF NOT EXISTS Users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      profile_info JSONB
    );`);
    await query(`CREATE TABLE IF NOT EXISTS Feedback (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES Users(id),
      company_name VARCHAR(100),
      url TEXT,
      purpose TEXT,
      technologies TEXT[],
      feedback_requested BOOLEAN,
      beta_testers BOOLEAN,
      additional_comments TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`);
    // Additional tables...
    console.log('Migrations completed successfully');
  } catch (err) {
    console.error('Migration error', err);
    throw err;
  }
};