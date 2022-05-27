import 'dotenv/config.js';

//server config
export const dbUri = process.env.DATABASE_URL;
export const port = process.env.SERVER_PORT || 5000;

//database connection config
export const user = process.env.USERNAME;
export const password = process.env.PASSWORD;
export const host = process.env.HOST;
export const dbPort = process.env.DATABASE_PORT;
export const dbName = process.env.DB_NAME;