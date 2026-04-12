const express = require("express")
const userRouter = express.Router()

const { AddUser, getUser, RemoveUser, loginUser } = require("../controller/userController")

userRouter.post("/add" , AddUser)
userRouter.get("/users" , getUser)
userRouter.delete("/delete/:id" , RemoveUser)
userRouter.post("/login" , loginUser)

module.exports = userRouter