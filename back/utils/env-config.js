import 'dotenv/config.js';

export const dbUri = process.env.DATABASE_URL;
export const port = process.env.SERVER_PORT || 5000;