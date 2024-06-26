import { TOrder } from "../ecomerce-order/ecomerceorder.interface";
import { Order } from "../ecomerce-order/ecomerceorder.model";
import { TProducts } from "./ecommerce.interface";
import { Ecommerce } from "./ecommerce.model";


//To Create All Products
const createEcommerceData = async (ecomData: TProducts) => {

    const result = await Ecommerce.create(ecomData);//it wil call controller model
    return result;
};

//To Create All Orders
const createOrderData = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result;
}

//To Get all Products
const getEcommerceDataFromDB = async (searchTerm?: string) => {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { name: new RegExp(searchTerm, 'i') },
                { description: new RegExp(searchTerm, 'i') },
                { category: new RegExp(searchTerm, 'i') },
                { tags: { $in: [new RegExp(searchTerm, 'i')] } },
            ],
        };
    }
    const result = await Ecommerce.find(query);
    return result;
};

//To Get all Orders
const getOrderDataFromDB = async (email?: string) => {

    let query = {};
    if (email) {
        query = { email: email };
    }
    const result = await Order.find(query);//it wil call controller model
    
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


export const createEcommerceServices = {
    createEcommerceData,
    getEcommerceDataFromDB,
    getEcommerceSingleDataFromDB,
    modifyEcommerceDataFromDB,
    deleteEcommerceDataFromDB, 
    createOrderData,
    getOrderDataFromDB,
}