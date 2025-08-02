import { Pool } from 'pg';
import { hashPassword, verifyPassword } from '../utils/auth';

class UserRepository {
  constructor(private db: Pool) {}

  async register(username: string, email: string, password: string): Promise<void> {
    const hashedPassword = await hashPassword(password);
    try {
      await this.db.query(
        'INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3)',
        [username, email, hashedPassword]
      );
    } catch (error) {
      if (error.code === '23505') {
        throw new Error('User already exists');
      }
      throw error;
    }
  }

  async authenticate(email: string, password: string): Promise<boolean> {
    const result = await this.db.query('SELECT password_hash FROM Users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      throw new Error('User not found');
    }
    const { password_hash } = result.rows[0];
    return await verifyPassword(password, password_hash);
  }

  async getProfile(userId: number): Promise<any> {
    const result = await this.db.query('SELECT * FROM Users WHERE id = $1', [userId]);
    return result.rows[0];
  }

  async updateProfile(userId: number, profileInfo: any): Promise<void> {
    await this.db.query('UPDATE Users SET profile_info = $1 WHERE id = $2', [profileInfo, userId]);
  }
}

export default UserRepository;