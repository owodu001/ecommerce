const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ImagesSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    },
    productId: {
        // type is JSON object containing Schema.ObjectId
        type: Object,
        required: false
    }
});

module.exports = ProdImage = mongoose.model("prodImages", ImagesSchema);
