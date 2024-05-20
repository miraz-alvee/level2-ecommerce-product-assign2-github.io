export interface TInventory {
    quantity: string;
    inStock: boolean;
}

export interface TVariants {
    type: string;
    value: string;
}

// 1. Create an interface representing a document in MongoDB
export interface TProducts {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants:[TVariants];
    inventory: TInventory 
};