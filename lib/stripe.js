import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';
import { env } from './env.js';

console.log('=== STRIPE CONFIG ===');
console.log('Secret Key présente:', env.STRIPE_SECRET_KEY ? 'OUI ✅' : 'NON ❌');
console.log('Prix ID:', env.STRIPE_PRICE_ID);

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

let stripePromise;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(env.STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export async function createCheckoutSession({ customerEmail, customerName }) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: env.STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.APP_URL}/`,
    customer_email: customerEmail,
    metadata: {
      customer_name: customerName,
    },
    allow_promotion_codes: true,
  });

  return session;
}

export function verifyWebhookSignature(payload, signature) {
  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );
    return event;
  } catch (err) {
    throw new Error(`Webhook signature verification failed: ${err.message}`);
  }
}