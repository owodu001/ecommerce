const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderScema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }]
});

module.exports = Order = mongoose.model("order", OrderScema);
