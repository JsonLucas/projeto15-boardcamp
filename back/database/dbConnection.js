import pg from 'pg';
import { dbUri, host, user, password, dbPort, dbName } from "../utils/env-config.js";

const { Pool } = pg;

const dbConnection = new Pool({
  connectionString: dbUri,
  host,
  user,
  password,
  port: dbPort,
  database: dbName,
  ssl: { rejectUnauthorized: false }
});

export default dbConnection;