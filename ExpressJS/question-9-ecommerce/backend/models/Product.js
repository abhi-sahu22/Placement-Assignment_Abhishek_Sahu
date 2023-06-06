import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4,
        },
        name: {
            type: String,
            required: true
        },
        description: { 
            type: String, 
            required: true 
        },
        price: { 
            type: Number, 
            required: true 
        },
        image: {
             type: String, 
             required: true 
            },
        count: {
            type: Number, 
            required: true 
        },
        // Add any additional fields as needed
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
