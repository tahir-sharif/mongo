const mongoose = require("mongoose")
const { Schema } = mongoose
const orderSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        validate: {
            validator: (val) => val > 0,
            message: "Price cannot be less than 0"
        },
    },
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order