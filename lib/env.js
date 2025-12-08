export const env = {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  AUDIT_PRICE: parseInt(process.env.AUDIT_PRICE || '497'),
  EMAIL_FROM: process.env.EMAIL_FROM || 'onboarding@resend.dev',
  EMAIL_REPLY_TO: process.env.EMAIL_REPLY_TO || 'nis2conformite@gmail.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'Admin2025!Secure',
};
