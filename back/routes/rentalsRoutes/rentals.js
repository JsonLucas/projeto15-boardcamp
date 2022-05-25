import { Router } from "express";

const rentalsRoutes = Router();

rentalsRoutes.gett('/rentals');
rentalsRoutes.post('/rentals');
rentalsRoutes.delete('/rentals');

export default rentalsRoutes;