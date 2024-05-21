"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ecommerce_controller_1 = require("../ecommerce/ecommerce.controller");
const route = express_1.default.Router();
route.post('/', ecommerce_controller_1.createEcommerceControllers.createOrderData);
route.get('/', ecommerce_controller_1.createEcommerceControllers.getAllOrdereData);
exports.orderRoutes = route;
