import { Router } from "express";
import customersController from "../../controllers/customersController.js";
import customersMiddleware from "../../middlewares/customersMiddleware.js";

const customersRoutes = Router();
customersRoutes.get('/customers', customersController);
customersRoutes.get('/customers/:id', customersController);
customersRoutes.post('/customers', customersMiddleware, customersController);
customersRoutes.put('/customers/:id', customersMiddleware, customersController);

export default customersRoutes;