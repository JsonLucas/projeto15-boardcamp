import express, { json } from 'express';
import { port } from './utils/env-config';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
app.use(json());
app.use(cors());
app.use(router);

app.listen(port, () => { console.log(`server running at port ${port}`); });