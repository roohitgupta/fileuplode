const express = require("express")

const userController = require("../src/controllers/user.controllers")
const galleryController=require("./controllers/gallery.contoller")

const app = express()

app.use(express.json());

app.use("/users", userController)
app.use("/gallery",galleryController)

module.exports = app;