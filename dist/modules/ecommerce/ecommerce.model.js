"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ecommerce = void 0;
const mongoose_1 = require("mongoose");
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: String, required: true },
    inStock: { type: Boolean, default: true }
});
const variantsSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});
// 2. Create a Schema corresponding to the document interface
const productsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantsSchema], required: true },
    inventory: { type: inventorySchema, required: true }
});
// 3. Create a Model. add according to mongo  TProducts we have to add this interface also.
exports.Ecommerce = (0, mongoose_1.model)('Ecommerce', productsSchema);
