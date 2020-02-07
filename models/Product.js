const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
    title: {
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
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: [{ type: Schema.Types.ObjectId, ref: "Image" }]
    }
});

module.exports = Product = mongoose.model("products", ProductSchema);
