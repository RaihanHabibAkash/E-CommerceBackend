import mongoose from "mongoose";

const oderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },

}, { timestamps: true });

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
        default: 0
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [ oderItemSchema ],
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [ "Pending", "Cancelled", "Delivered" ],
        default: "Pending",
    },

}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);