import { query } from './database';

export const seedDatabase = async () => {
  try {
    await query(`INSERT INTO Users (username, email, password_hash) VALUES
      ('john_doe', 'john@example.com', 'hashed_password'),
      ('jane_smith', 'jane@example.com', 'hashed_password');
    `);
    await query(`INSERT INTO Feedback (user_id, company_name, feedback_requested) VALUES
      (1, 'Acme Corp', true),
      (2, 'Globex Inc.', false);
    `);
    console.log('Seeding completed successfully');
  } catch (err) {
    console.error('Seeding error', err);
    throw err;
  }
};