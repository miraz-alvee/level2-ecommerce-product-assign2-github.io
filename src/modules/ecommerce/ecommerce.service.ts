import { TProducts } from "./ecommerce.interface";
import { Ecommerce } from "./ecommerce.model";


//To Create All products
const createEcommerceData = async (ecomData: TProducts) => {

    const result = await Ecommerce.create(ecomData);//it wil call controller model
    return result;
};

//To Get All  products
const getEcommerceDataFromDB = async () => {
    const result = await Ecommerce.find();//it wil call controller model
    return result;
};

//To Get A single product
const getEcommerceSingleDataFromDB = async (id: string) => {
    const result = await Ecommerce.findById(id);//it wil call controller model
    return result;
};

//To Modify A single product
const modifyEcommerceDataFromDB = async (id: string, updateData:TProducts) => {

    const result = await Ecommerce.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });//it wil call controller model
    return result;
   
};

//To Delete A single product
const deleteEcommerceDataFromDB = async (id: string) => {

    const result = await Ecommerce.findByIdAndDelete(id);//it wil call controller model
    return result;
   
};

const searchProductFromDB = async (id: string) => {

    const result = await Ecommerce.findByIdAndDelete(id);
    return result;
   
};





export const createEcommerceServices = {
    createEcommerceData,
    getEcommerceDataFromDB,
    getEcommerceSingleDataFromDB,
    modifyEcommerceDataFromDB,
    deleteEcommerceDataFromDB,
    searchProductFromDB
}