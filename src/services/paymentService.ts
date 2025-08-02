import Stripe from 'stripe';
import { logger } from '../utils/logger';

const stripe = new Stripe(process.env.STRIPE_API_KEY!, { apiVersion: '2020-08-27' });

class PaymentService {
  async createCheckoutSession(req: Request, res: Response) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Premium Subscription',
              },
              unit_amount: 5000,
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });
      res.status(200).json({ id: session.id });
    } catch (error) {
      logger.error('Error creating checkout session:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export const paymentService = new PaymentService();
