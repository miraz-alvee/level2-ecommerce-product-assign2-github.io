import { model, Schema } from "mongoose";
import { TOrder } from "./ecomerceorder.interface";

// 2. Create a Schema corresponding to the document interface
const ordersSchema = new Schema<TOrder>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, default:0 },
    quantity: { type: Number, default:0 },
    
});

// 3. Create a Model. add according to mongo  TProducts we have to add this interface also.
export const Order = model<TOrder>('Order', ordersSchema);