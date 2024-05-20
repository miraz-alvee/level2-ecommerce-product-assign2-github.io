import { Request, Response } from "express";
import { createEcommerceServices } from "./ecommerce.service";

const createEcommerceData = async (req: Request, res: Response) => {

    try {
        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.createEcommerceData(req.body);
        res.status(200).json({
            success: true,
            message: 'Products is created succesfully',
            data: result,
        });
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
};

const getAllEcommerceData = async (req: Request, res: Response) => {

    try {
        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.getEcommerceDataFromDB();

        res.status(200).json({
            success: true,
            message: 'Get all Products succesfully',
            data: result,
        });
    }
    catch (error: any) {
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
        //it will call ecommerce.service.ts
        const result = await createEcommerceServices.getEcommerceSingleDataFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Get single Products succesfully',
            data: result,
        });
    }
    catch (error: any) {
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

        const result = await createEcommerceServices.modifyEcommerceDataFromDB(productId, updateData);

        res.status(200).json({
            success: true,
            message: 'Products Data Modify succesfully',
            data: result,
        });
    }
    catch (error: any) {
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
        
        const result = await createEcommerceServices.deleteEcommerceDataFromDB(productId);

        res.status(200).json({
            success: true,
            message: 'Products Delete succesfully',
            data: result,
        });
    }
    catch (error: any) {
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
}






// try {

//     

//     res.status(200).json({
//         success: true,
//         message: 'Products is created succesfully',
//         data: result,
//     });
//   }
//   catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: 'Something went wrong',
//       error: error,
//     });
//   }