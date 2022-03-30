const express = require("express")

const userController = require("../src/controllers/user.controllers")

const app = express()

app.use("/users", userController)

module.exports = app;