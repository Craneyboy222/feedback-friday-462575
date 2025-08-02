import { Request, Response } from 'express';
import { Pool } from 'pg';
import { logError } from '../utils/logger';

const pool = new Pool();

export class CategoryService {
  async createCategory(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const result = await pool.query(
        'INSERT INTO Categories (name) VALUES ($1) RETURNING id',
        [name]
      );
      res.status(201).json({ categoryId: result.rows[0].id });
    } catch (error) {
      logError('createCategory', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const result = await pool.query('SELECT * FROM Categories');
      res.status(200).json(result.rows);
    } catch (error) {
      logError('getCategories', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}