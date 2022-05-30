import pg from 'pg';
import { dbUri } from "../utils/env-config.js";

const { Pool } = pg;
const db = {
  connectionString: dbUri,
  ssl: { rejectUnauthorized: false }
};

const dbConnection = new Pool(db);

export default dbConnection;