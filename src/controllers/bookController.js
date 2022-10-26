const BookModel = require("../models/bookModel")
//const BookModel= require("../models/bookModel")
const bookName = async (req,res)=>{
    let data1 = req.body
    let allData = await BookModel.create(data1)
    res.send({msg: allData})
}


const getUsersData1= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}
//createBook : to create a new entry..use this api to create 11+
// entries in your collection

 const createBook = async (req,res)=>{
    let data = req.body
    let newEnties = await BookModel.create(data)
    res.send({msg:newEnties})


 }

 //bookList : gives all the books- their bookName and authorName only
 const bookList = async (req,res)=>{
    //let bookListing = req.body
    let newEnties = await BookModel.find().select({authorName:1,bookName:1,_id:0})
    res.send({msg:newEnties})

 }
 //getBooksInYear: takes year as input in post request and gives list of all
 // books published that year
 const getBooksInYear = async(req,res)=>{
    let year = req.body
    let yearData = await BookModel.find(year)
    res.send({msg:yearData})
 }
//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBooks= async(req,res)=>{
   
const  Books ={
    "price.IndianRupees" :{$in:["100INR","200INR"]}
}

    let getRupees = await BookModel.find({ Books})

        
       
    res.send({msg:getRupees})
 }

 const getRandomBooks= async(req,res)=>{
    const query={
        bookName:String
    }
    let getRandom = await BookModel.find({query}).select()
    res.send({msg:getRandom})
 }
 






module.exports.bookName = bookName 
module.exports.getUsersData1 = getUsersData1
module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks