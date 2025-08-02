import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { createPromoCode, getPromoCodes } from '../services/promoCodeService';

export const createPromoCodeEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const promoCode = await createPromoCode(req.body);
    res.status(201).json(promoCode);
  } catch (error) {
    logger.error('Error creating promo code', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const listPromoCodes = async (req: Request, res: Response): Promise<void> => {
  try {
    const promoCodes = await getPromoCodes(req.query);
    res.status(200).json(promoCodes);
  } catch (error) {
    logger.error('Error fetching promo codes', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};