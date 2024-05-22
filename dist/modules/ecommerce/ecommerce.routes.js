"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecommerceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ecommerce_controller_1 = require("./ecommerce.controller");
const route = express_1.default.Router();
//this all routes will call ecommerce.controller.ts
route.post('/', ecommerce_controller_1.createEcommerceControllers.createEcommerceData);
route.get('/', ecommerce_controller_1.createEcommerceControllers.getAllEcommerceData);
route.get('/:productId', ecommerce_controller_1.createEcommerceControllers.getSingleEcommerceData);
route.put('/:productId', ecommerce_controller_1.createEcommerceControllers.modifyEcommerceData);
route.delete('/:productId', ecommerce_controller_1.createEcommerceControllers.deleteEcommerceData);
exports.ecommerceRoutes = route;
