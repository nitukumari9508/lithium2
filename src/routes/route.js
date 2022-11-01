const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController = require("../controllers/publishController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createAuthor", authorController.createAuthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

/*router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)*/

router.post("/newBook", bookController.newBook  )

router.post("/newAuthor", authorController.createAuthor)
router.post("/newPublisher", publishController.newPublisher)
router.get("/newBook2",bookController.newBook2)


//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)








module.exports = router;