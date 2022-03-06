const express = require("express")
const router = express.Router()
const productsController = require("../controllers/products");

const Product = require("../model/products")



router.get("/form", (req, res) => {
    res.render("form")
})

router.post("/form", productsController.addProduct)

router.use("/", productsController.fetchAll)

module.exports = router