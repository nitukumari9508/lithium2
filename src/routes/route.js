const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
//const bookmode = require("../models/bookmode")
const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/bookName",BookController.bookName)
router.get("/getUsersData1", BookController.getUsersData1)
router.post("/createBook",BookController.createBook)
router.get("/bookList",BookController.bookList)
router.post("/getBooksInYear",BookController.getBooksInYear)
router.get("/getXINRBooks",BookController.getXINRBooks)
router.get("/getRandomBooks",BookController.getRandomBooks)
module.exports = router;