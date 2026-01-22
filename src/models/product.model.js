import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    disCountAmount: {
        type: Number,
        required: false,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

} , { timestamps: true });

export const Product = mongoose.model("Product", productSchema);