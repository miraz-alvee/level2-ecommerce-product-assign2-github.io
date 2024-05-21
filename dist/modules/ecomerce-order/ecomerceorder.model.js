"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface
const ordersSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
});
// 3. Create a Model. add according to mongo  TProducts we have to add this interface also.
exports.Order = (0, mongoose_1.model)('Order', ordersSchema);
