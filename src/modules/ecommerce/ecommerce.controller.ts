import { Request, Response } from "express";
import { createEcommerceServices } from "./ecommerce.service";

import productsValidationSchema from "./ecommerce.zod.validation";

const createEcommerceData = async (req: Request, res: Response) => {

    try {

        //data validation with zod
        const zodSchema = productsValidationSchema.parse(req.body);

        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.createEcommerceData(zodSchema);
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
};

const createOrderData = async (req: Request, res: Response) => {

    try {
        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.createOrderData(req.body);
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
};

const getAllEcommerceData = async (req: Request, res: Response) => {

    try {
        const searchTerm = req.query.searchTerm as string | undefined;// Extract the searchTerm query parameter

        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.getEcommerceDataFromDB(searchTerm); // Fetch products based on the searchTerm

        res.status(200).json({
            success: true,
            message: searchTerm ? `Products matching term ${searchTerm} fetched successfully!` : 'All products fetched successfully.',
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
};

const getAllOrdereData = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string | undefined; // Extract the email query parameter
        const result = await createEcommerceServices.getOrderDataFromDB(email); // Fetch orders based on the query parameter

        res.status(200).json({
            success: true,
            message: email ? 'Order data fetched successfully for the specified email' : 'All order data fetched successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
};

const getSingleEcommerceData = async (req: Request, res: Response) => {

    try {
        const { productId } = req.params;

        //const zodsingleData = productsValidationSchema.parse(productId )
        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.getEcommerceSingleDataFromDB(productId);
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
};

const modifyEcommerceData = async (req: Request, res: Response) => {

    try {
        
        const { productId } = req.params;
        const updateData = req.body;

         //it will call ecommerce.service.ts
        const result = await createEcommerceServices.modifyEcommerceDataFromDB(productId, updateData);

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
}

const deleteEcommerceData = async (req: Request, res: Response) => {

    try {

        const { productId } = req.params;
         //it will call ecommerce.service.ts
        const result = await createEcommerceServices.deleteEcommerceDataFromDB(productId);

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
}

export const createEcommerceControllers = {
    createEcommerceData,
    getAllEcommerceData,
    getSingleEcommerceData,
    modifyEcommerceData,
    deleteEcommerceData,
    createOrderData,
    getAllOrdereData,
}

