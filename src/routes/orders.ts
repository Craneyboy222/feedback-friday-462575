import express, { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { authenticateToken } from '../middleware/auth';
import { OrderService } from '../services/OrderService';
import { Order } from '../types';

const router = express.Router();
const orderService = new OrderService();

// Error handling middleware
function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
}

// Order validation rules
const orderValidationRules = [
  check('userId').isInt().withMessage('User ID must be an integer'),
  check('productIds').isArray().withMessage('Product IDs must be an array'),
  check('totalAmount').isFloat({ gt: 0 }).withMessage('Total amount must be a positive number')
];

// POST /api/orders - Create a new order
router.post('/', authenticateToken, orderValidationRules, async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const orderData: Order = req.body;
    const newOrder = await orderService.createOrder(orderData);
    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:orderId - Get order by ID
router.get('/:orderId', authenticateToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderId } = req.params;
    const order = await orderService.getOrderById(parseInt(orderId, 10));
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
});

// PUT /api/orders/:orderId - Update an order
router.put('/:orderId', authenticateToken, orderValidationRules, async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { orderId } = req.params;
    const orderData: Order = req.body;
    const updatedOrder = await orderService.updateOrder(parseInt(orderId, 10), orderData);
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/orders/:orderId - Delete an order
router.delete('/:orderId', authenticateToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderId } = req.params;
    const success = await orderService.deleteOrder(parseInt(orderId, 10));
    if (!success) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// Use error handling middleware
router.use(errorHandler);

export default router;