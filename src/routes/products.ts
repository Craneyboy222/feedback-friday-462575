import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { authenticateJWT } from '../middleware/auth';
import { logger } from '../middleware/logger';
import { Product } from '../models/Product';

const router = express.Router();

// Error handling middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
};

// Validation middleware
const requestValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// GET /api/products - Fetch all products
router.get('/', authenticateJWT, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id - Fetch specific product by ID
router.get('/:id', authenticateJWT, param('id').isInt(), requestValidation, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// POST /api/products - Create a new product
router.post('/', [
  authenticateJWT,
  body('name').isString().notEmpty(),
  body('description').isString().notEmpty(),
  body('price').isFloat({ gt: 0 }),
  requestValidation
], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await Product.create({ name, description, price });
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:id - Update a product
router.put('/:id', [
  authenticateJWT,
  param('id').isInt(),
  body('name').optional().isString().notEmpty(),
  body('description').optional().isString().notEmpty(),
  body('price').optional().isFloat({ gt: 0 }),
  requestValidation
], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.update({ name, description, price });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id - Delete a product
router.delete('/:id', authenticateJWT, param('id').isInt(), requestValidation, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.use(errorHandler);

export default router;
