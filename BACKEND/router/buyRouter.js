const express = require("express")
const buyRouter = express.Router()


const { AddBuyer, getBuyer } = require("../controller/buyController")

buyRouter.post("/add" , AddBuyer)
buyRouter.get("/list" , getBuyer)

module.exports = buyRouter

