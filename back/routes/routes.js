import { Router } from "express";
import categoriesRoutes from "./categoriesRoutes/categories.js";
import customersRoutes from "./customersRoutes/customers.js";
import gamesRoutes from "./gamesRoutes/games.js";
import rentalsRoutes from "./rentalsRoutes/rentals.js";

const router = Router();

router.use(categoriesRoutes);
router.use(customersRoutes);
router.use(gamesRoutes);
router.use(rentalsRoutes);

export default router;