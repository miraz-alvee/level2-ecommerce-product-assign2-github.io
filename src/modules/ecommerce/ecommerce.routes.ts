import express, { Request, Response } from "express";
import { createEcommerceControllers } from "./ecommerce.controller";

const route = express.Router();

//this all routes will call ecommerce.controller.ts
route.post('/', createEcommerceControllers.createEcommerceData);
route.get('/', createEcommerceControllers.getAllEcommerceData);
route.get('/:productId', createEcommerceControllers.getSingleEcommerceData);
route.get('/:searchTerm', createEcommerceControllers.searchEcommerceData);
route.put('/:productId', createEcommerceControllers.modifyEcommerceData);
route.delete('/:productId', createEcommerceControllers.deleteEcommerceData);


export const ecommerceRoutes = route;