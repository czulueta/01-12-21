const express = require("express")
const elderRouter = express.Router()
const Elder = require("../models/elder.js")

elderRouter.get("/", (req, res, next) => {
    Elder.find((err, elders) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(elders)
    })
})
module.exports = elderRouter