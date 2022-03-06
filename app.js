const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const DB = "mongodb+srv://tahir150:03162534986@cluster0.z6p9p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("Connected !"); })

const welcomeRoute = require("./routes/welcomeRoute")
const productRoute = require("./routes/productRoute");
const bodyParser = require("body-parser");


app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use("/app", welcomeRoute)

app.use("/product", productRoute)

app.use("*", (req, res, next) => {
    res.render("notFound")
})

app.listen("3000")