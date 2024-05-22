import { z } from "zod";

// Define Zod schema for TInventory
const inventoryValidationSchema = z.object({
    quantity: z.number().nonnegative("Quantity must be a non-negative number"),
    inStock: z.boolean().default(true)
});

// Define Zod schema for TVariants
const variantsValidationSchema = z.object({
    type: z.string().min(1),
    value: z.string().min(1)
});

// Define Zod schema for TProducts
const productsValidationSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().nonnegative("Price must be a non-negative number"),
    category: z.string().min(1),
    tags: z.array(z.string()).nonempty("At least one tag is required"),
    variants: z.array(variantsValidationSchema).nonempty("At least one variant is required"),
    inventory: inventoryValidationSchema
});

export default productsValidationSchema;