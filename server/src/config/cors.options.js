import dotenv from 'dotenv/config';

export const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS.split(','),
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
