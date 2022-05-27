import pg from 'pg';
import { dbName, dbPort, dbUri, host, password, user } from "../utils/env-config.js";

const { Pool } = pg;
const dbConnection = new Pool({
  connectionString: dbUri,
  user: user,
  password: password,
  host: host,
  port: dbPort,
  database: dbName
});

export default dbConnection;