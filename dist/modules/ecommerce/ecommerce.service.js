"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEcommerceServices = void 0;
const ecomerceorder_model_1 = require("../ecomerce-order/ecomerceorder.model");
const ecommerce_model_1 = require("./ecommerce.model");
//To Create All Products
const createEcommerceData = (ecomData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Ecommerce.create(ecomData); //it wil call controller model
    return result;
});
//To Create All Orders
const createOrderData = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecomerceorder_model_1.Order.create(orderData);
    return result;
});
//To Get all Products
const getEcommerceDataFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Ecommerce.find(); //it wil call controller model
    return result;
});
//To Get all Orders
const getOrderDataFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecomerceorder_model_1.Order.find(); //it wil call controller model
    return result;
});
//To Get A single product
const getEcommerceSingleDataFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Ecommerce.findById(id); //it wil call controller model
    return result;
});
//To Modify A single product
const modifyEcommerceDataFromDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Ecommerce.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }); //it wil call controller model
    return result;
});
//To Delete A single product
const deleteEcommerceDataFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Ecommerce.findByIdAndDelete(id); //it wil call controller model
    return result;
});
//search: { searchIterm?: string }
const searchProductFromDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(search, "i");
    const query = {
        $or: [
            { name: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $regex: regex } }
        ]
    };
    //console.log(query);
    const result = yield ecommerce_model_1.Ecommerce.find(query);
    return result;
});
exports.createEcommerceServices = {
    createEcommerceData,
    getEcommerceDataFromDB,
    getEcommerceSingleDataFromDB,
    modifyEcommerceDataFromDB,
    deleteEcommerceDataFromDB,
    searchProductFromDB,
    createOrderData,
    getOrderDataFromDB,
};
