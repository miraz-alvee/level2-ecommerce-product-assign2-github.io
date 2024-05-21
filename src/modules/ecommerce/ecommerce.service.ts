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
const getEcommerceDataFromDB = async () => {
    const result = await Ecommerce.find();//it wil call controller model
    return result;
};

//To Get all Orders
const getOrderDataFromDB = async () => {
    const result = await Order.find();//it wil call controller model
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

//search: { searchIterm?: string }
const searchProductFromDB = async (search : string) => {

    const regex = new RegExp(search, "i");

    const query = {
        $or: [
            { name: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $regex: regex } }
        ]
    };

    //console.log(query);
    const result = await Ecommerce.find(query);
    return result;
}


export const createEcommerceServices = {
    createEcommerceData,
    getEcommerceDataFromDB,
    getEcommerceSingleDataFromDB,
    modifyEcommerceDataFromDB,
    deleteEcommerceDataFromDB,
    searchProductFromDB, 
    createOrderData,
    getOrderDataFromDB,
}