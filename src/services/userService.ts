import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { validationResult } from 'express-validator';

const pool = new Pool({
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  profile_info: string;
}

class UserService {
  async register(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, profile_info } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO Users (username, email, password_hash, profile_info) VALUES ($1, $2, $3, $4) RETURNING id',
        [username, email, hashedPassword, profile_info]
      );

      const user: User = result.rows[0];

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

      res.status(201).json({ token, userId: user.id });
    } catch (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Server error');
    }
  }

  async login(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
      const user: User = result.rows[0];

      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password_hash);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

      res.json({ token, userId: user.id });
    } catch (err) {
      console.error('Error logging in user:', err);
      res.status(500).send('Server error');
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const userId = req.user.userId;
      const result = await pool.query('SELECT id, username, email, profile_info FROM Users WHERE id = $1', [userId]);
      const user: User = result.rows[0];

      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      res.status(500).send('Server error');
    }
  }

  async updateProfile(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.user.userId;
    const { username, email, profile_info } = req.body;

    try {
      await pool.query(
        'UPDATE Users SET username = $1, email = $2, profile_info = $3 WHERE id = $4',
        [username, email, profile_info, userId]
      );

      res.json({ msg: 'Profile updated successfully' });
    } catch (err) {
      console.error('Error updating user profile:', err);
      res.status(500).send('Server error');
    }
  }
}

export default new UserService();
