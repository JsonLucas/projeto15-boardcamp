import { Router } from "express";
import rentalsController from "../../controllers/rentalsController.js";
import rerturnRentalController from "../../controllers/returnRentalController.js";
import rentalsMiddleware from "../../middlewares/rentalsMiddleware.js";

const rentalsRoutes = Router();

rentalsRoutes.get('/rentals', rentalsController);
rentalsRoutes.post('/rentals', rentalsMiddleware, rentalsController);
rentalsRoutes.post('/rentals/:id/return', rentalsMiddleware, rerturnRentalController);
rentalsRoutes.delete('/rentals/:id', rentalsMiddleware, rentalsController);

export default rentalsRoutes;