import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ error: err.message || 'Internal Server Error' });
});

export default app;
