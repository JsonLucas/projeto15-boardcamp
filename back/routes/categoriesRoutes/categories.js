import { Router } from "express";
import categoriesController from "../../controllers/categoriesControllers.js";
import categoriesMiddleware from "../../middlewares/categoriesMiddleware.js";

const categoriesRoutes = Router();
categoriesRoutes.get('/categories', categoriesController);
categoriesRoutes.post('/categories', categoriesMiddleware, categoriesController);

export default categoriesRoutes;