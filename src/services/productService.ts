import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import NewRelic from 'newrelic';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

// Middleware for validating JWT
const authenticateJWT = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// User Registration
export const registerUser = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const result = await pool.query(
        'INSERT INTO Users (id, username, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id',
        [uuidv4(), username, email, hashedPassword]
      );

      const userId = result.rows[0].id;
      const token = jwt.sign({ userId, email }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
      });

      res.status(201).json({ token });
    } catch (error) {
      NewRelic.noticeError(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

// User Login
export const loginUser = [
  body('email').isEmail(),
  body('password').exists(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password_hash);

      if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
      });

      res.json({ token });
    } catch (error) {
      NewRelic.noticeError(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

// Feedback Submission
export const submitFeedback = [
  authenticateJWT,
  body('company_name').notEmpty(),
  body('url').isURL(),
  body('purpose').notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { company_name, url, purpose, technologies, feedback_requested, beta_testers, additional_comments } = req.body;

    try {
      await pool.query(
        'INSERT INTO Feedback (id, user_id, company_name, url, purpose, technologies, feedback_requested, beta_testers, additional_comments, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [
          uuidv4(),
          req.user.userId,
          company_name,
          url,
          purpose,
          technologies,
          feedback_requested,
          beta_testers,
          additional_comments,
          new Date(),
        ]
      );

      res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      NewRelic.noticeError(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

// Fetch Feedback
export const getFeedback = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Feedback ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    NewRelic.noticeError(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getFeedbackById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM Feedback WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    NewRelic.noticeError(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Logging wrapper
function logError(error: any) {
  console.error(error);
  NewRelic.noticeError(error);
}

// Additional services for comments, surveys, promo codes, and votes can be implemented similarly.
