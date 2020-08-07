import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const envs = {
  name: process.env.APP_NAME || 'Movies Explorer',
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT || 8000,
  domain: `${process.env.APP_HOST || 'locahost'}:${process.env.APP_PORT || 8000}`
};

export default envs;

