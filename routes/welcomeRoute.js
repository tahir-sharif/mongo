const express = require("express")
const path = require("path")

const router = express.Router()
const welcomeFile = path.join(__dirname , "../" , "public" , "index.html")

router.use("/welcome", (req, res) => {
    res.sendFile(welcomeFile)
})

module.exports = router