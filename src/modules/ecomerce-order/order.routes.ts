import  express  from 'express';
import { createEcommerceControllers } from "../ecommerce/ecommerce.controller";

const route = express.Router();

route.post('/', createEcommerceControllers.createOrderData);
route.get('/', createEcommerceControllers.getAllOrdereData);


export const orderRoutes = route;