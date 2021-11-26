import dotenv from 'dotenv';
dotenv.config(); // load config vars from .env to process.env

export const config = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
};
