import { Router } from "express";
import rentalsController from "../../controllers/rentalsController.js";
import rentalsMiddleware from "../../middlewares/rentalsMiddleware.js";

const rentalsRoutes = Router();

rentalsRoutes.get('/rentals', rentalsMiddleware, rentalsController);
rentalsRoutes.post('/rentals', rentalsMiddleware, rentalsController);
rentalsRoutes.post('/rentals:id/return', rentalsMiddleware, rentalsController);
rentalsRoutes.delete('/rentals:id', rentalsMiddleware, rentalsController);

export default rentalsRoutes;