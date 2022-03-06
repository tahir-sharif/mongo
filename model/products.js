const mongoose = require("mongoose")
const { Schema } = mongoose
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        validate: {
            validator: (val) => val > 0,
            message: "must enter the valid price"
        },
        required: true
    }
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product