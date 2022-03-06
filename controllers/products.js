const Product = require("../model/products");

exports.fetchAll = async (req, res) => {
    const product = await Product.find()
    res.render("products", { product })
};

exports.addProduct = (req, res) => {
    const product = new Product({ title: req.body.title, price: req.body.price }) //Not Working
    // const product = new Product({ title: "banana", price: 300 }) // Working
    product.save()
    res.send("product added !")
};