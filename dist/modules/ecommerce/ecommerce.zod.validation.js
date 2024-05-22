"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define Zod schema for TInventory
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().nonnegative("Quantity must be a non-negative number"),
    inStock: zod_1.z.boolean().default(true)
});
// Define Zod schema for TVariants
const variantsValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1),
    value: zod_1.z.string().min(1)
});
// Define Zod schema for TProducts
const productsValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    price: zod_1.z.number().nonnegative("Price must be a non-negative number"),
    category: zod_1.z.string().min(1),
    tags: zod_1.z.array(zod_1.z.string()).nonempty("At least one tag is required"),
    variants: zod_1.z.array(variantsValidationSchema).nonempty("At least one variant is required"),
    inventory: inventoryValidationSchema
});
exports.default = productsValidationSchema;
