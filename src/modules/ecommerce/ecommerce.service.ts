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

const searchProductFromDB = async (search: { searchTerm?: string }) => {
   
    // const regex = new RegExp(.searchTerm, "i"); // Case-insensitive regex
    // query.$or = [ 
    //     { tags: { $in: [regex] } }
    // ];
    // const query = Ecommerce.find(search); // `query` is an instance of `Query`
    // query.setOptions({ lean : true });
    // query.$or = [ 
    //     { tags: { $in: "iphone" } }
    // ];
    // const query: any = {};

    //     const regex = new RegExp(search.searchTerm, "i"); // Case-insensitive regex
    //     query.$or = [
    //         { tags: { $in: [regex] } }
    //     ];
    // }

    // const results = await Ecommerce.find(query);
    // return results;
};


export const createEcommerceServices = {
    createEcommerceData,
    getEcommerceDataFromDB,
    getEcommerceSingleDataFromDB,
    modifyEcommerceDataFromDB,
    deleteEcommerceDataFromDB,
    searchProductFromDB,
    
}