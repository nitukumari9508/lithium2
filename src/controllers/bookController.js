const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const newBook= async function (req, res) {

    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
//4. Write a GET api that fetches all the books
// along with their author details (you have to populate for this) 
//as well the publisher details (you have to populate for this) 

/*const booksName = async (req,res)=>{
    let book = req.body
    let bookCreated = await bookModel.find(book).populate(["_id","id"])
    res.send({data: bookCreated})
}*/

let newBook2 = async function(req,res){
    //let book = req.body
let data = await bookModel.find().Populate(["_id","id"])
res.send({msg:data})
    }


  
/*const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}*/

/*const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate()
    res.send({data: specificBook})

}*/


module.exports.newBook= newBook
module.exports.newBook2=newBook2
//module.exports.getBooksData= getBooksData
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
