import { Pool } from 'pg';
import { getUserById, createUser, updateUserProfile } from '../src/database/services/userService';

describe('Database Unit Tests', () => {
  const pool = new Pool();

  afterAll(async () => {
    await pool.end();
  });

  it('should retrieve a user by ID', async () => {
    const user = await getUserById(pool, 1);
    expect(user).toHaveProperty('id', 1);
  });

  it('should create a new user', async () => {
    const user = await createUser(pool, {
      username: 'testuser',
      email: 'testuser@example.com',
      password_hash: 'hashedpassword'
    });
    expect(user).toHaveProperty('username', 'testuser');
  });

  it('should update user profile', async () => {
    const updatedUser = await updateUserProfile(pool, 1, {
      profile_info: 'Updated profile info'
    });
    expect(updatedUser.profile_info).toBe('Updated profile info');
  });
});