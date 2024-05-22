import { model, Schema } from "mongoose";
import { TInventory, TProducts, TVariants } from "./ecommerce.interface";

const inventorySchema = new Schema<TInventory>({
    quantity: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true }
});

const variantsSchema = new Schema<TVariants>({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

// 2. Create a Schema corresponding to the document interface
const productsSchema = new Schema<TProducts>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantsSchema], required: true },
    inventory: { type: inventorySchema, required: true }
});

// 3. Create a Model. add according to mongo  TProducts we have to add this interface also.
export const Ecommerce = model<TProducts>('Ecommerce', productsSchema);


