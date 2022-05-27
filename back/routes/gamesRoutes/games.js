import { Router } from "express";
import gamesController from "../../controllers/gamesController.js";
import gamesMiddleware from "../../middlewares/gamesMiddleware.js";

const gamesRoutes = Router();

gamesRoutes.get('/games', gamesMiddleware, gamesController);
gamesRoutes.post('/games', gamesMiddleware, gamesController);

export default gamesRoutes;