"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ecommerce_routes_1 = require("./modules/ecommerce/ecommerce.routes");
const order_routes_1 = require("./modules/ecomerce-order/order.routes");
//import cors from "cors"
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
//app.use(cors())
app.use('/api/products', ecommerce_routes_1.ecommerceRoutes); // route for ecomerce products
app.use('/api/orders', order_routes_1.orderRoutes); // route for ecomerce orders
app.get('/', (req, res) => {
    res.send('Ecommerce Products and Orders!');
});
exports.default = app;
