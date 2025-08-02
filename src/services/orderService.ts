import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import { checkSchema, validationResult } from 'express-validator';
import { Logger } from 'winston';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

const logger: Logger = /* Initialize your Winston logger here */;

interface Order {
  id: string;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Middleware for order authentication
const authenticateOrder = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET || '', (err: any, user: any) => {
    if (err) {
      logger.error('Invalid token', err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Order request validation schema
const orderValidationSchema = checkSchema({
  userId: {
    in: ['body'],
    isString: true,
    errorMessage: 'User ID is required and must be a string',
  },
  status: {
    in: ['body'],
    isIn: {
      options: [['pending', 'completed', 'cancelled']],
      errorMessage: 'Status must be one of [pending, completed, cancelled]',
    },
  },
});

// Create a new order
const createOrder = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Orders(user_id, status, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *',
      [userId, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    logger.error('Error creating order', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get order by ID
const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Orders WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    logger.error('Error fetching order', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the order service functions
export default {
  authenticateOrder,
  orderValidationSchema,
  createOrder,
  getOrderById,
};