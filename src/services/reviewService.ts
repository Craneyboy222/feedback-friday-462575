import { Request, Response } from 'express';
import { Pool } from 'pg';
import { logError } from '../utils/logger';

const pool = new Pool();

export class ReviewService {
  async addReview(req: Request, res: Response) {
    try {
      const { productId, userId, reviewText, rating } = req.body;
      const result = await pool.query(
        'INSERT INTO Reviews (product_id, user_id, review_text, rating) VALUES ($1, $2, $3, $4) RETURNING id',
        [productId, userId, reviewText, rating]
      );
      res.status(201).json({ reviewId: result.rows[0].id });
    } catch (error) {
      logError('addReview', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getReviews(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      const result = await pool.query('SELECT * FROM Reviews WHERE product_id = $1', [productId]);
      res.status(200).json(result.rows);
    } catch (error) {
      logError('getReviews', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}