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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEcommerceControllers = void 0;
const ecommerce_service_1 = require("./ecommerce.service");
const ecommerce_zod_validation_1 = __importDefault(require("./ecommerce.zod.validation"));
const createEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //data validation with zod
        const zodSchema = ecommerce_zod_validation_1.default.parse(req.body);
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.createEcommerceData(zodSchema);
        res.status(200).json({
            success: true,
            message: 'Products is created succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const createOrderData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.createOrderData(req.body);
        res.status(200).json({
            success: true,
            message: 'Order created succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const getAllEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.getEcommerceDataFromDB();
        res.status(200).json({
            success: true,
            message: 'Get all Products succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const getAllOrdereData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.getOrderDataFromDB();
        res.status(200).json({
            success: true,
            message: 'Get all Order data succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const getSingleEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.getEcommerceSingleDataFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Get single Products succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const modifyEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.modifyEcommerceDataFromDB(productId, updateData);
        res.status(200).json({
            success: true,
            message: 'Products Data Modify succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const deleteEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.deleteEcommerceDataFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Products Delete succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
const searchEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.params;
        //it will call ecommerce.service.ts
        const result = yield ecommerce_service_1.createEcommerceServices.searchProductFromDB(searchTerm);
        ;
        res.status(200).json({
            success: true,
            message: 'Products found succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
});
exports.createEcommerceControllers = {
    createEcommerceData,
    getAllEcommerceData,
    getSingleEcommerceData,
    modifyEcommerceData,
    deleteEcommerceData,
    searchEcommerceData,
    createOrderData,
    getAllOrdereData,
};
