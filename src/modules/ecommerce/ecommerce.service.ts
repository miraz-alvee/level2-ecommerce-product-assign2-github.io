import { TProducts } from "./ecommerce.interface";
import { Ecommerce } from "./ecommerce.model";
//import ObjectId from "mongodb";

const createEcommerceData = async (ecomData: TProducts) => {

    const result = await Ecommerce.create(ecomData);//it wil call controller model
    return result;
};

const getEcommerceDataFromDB = async () => {
    const result = await Ecommerce.find();//it wil call controller model
    return result;
};

const getEcommerceSingleDataFromDB = async (id: string) => {
    const result = await Ecommerce.findById(id);//it wil call controller model
    return result;
};

const modifyEcommerceDataFromDB = async (id: string, updateData:TProducts) => {

    const result = await Ecommerce.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    return result;
   
};

const deleteEcommerceDataFromDB = async (id: string) => {

    const result = await Ecommerce.findByIdAndDelete(id);
    return result;
   
};





export const createEcommerceServices = {
    createEcommerceData,
    getEcommerceDataFromDB,
    getEcommerceSingleDataFromDB,
    modifyEcommerceDataFromDB,
    deleteEcommerceDataFromDB,
}