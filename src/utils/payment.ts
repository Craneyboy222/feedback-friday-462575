import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export const createPaymentIntent = async (amount: number, currency: string = 'usd') => {
  return await stripe.paymentIntents.create({
    amount,
    currency
  });
};