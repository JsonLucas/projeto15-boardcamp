import { dbUri } from "../utils/env-config";
function Pool(){} //demo

const dbConnection = new Pool({
  connectionString: dbUri,
});

export default dbConnection;