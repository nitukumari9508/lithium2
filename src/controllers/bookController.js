const BookModel = require("../models/bookModel")

/*const bookName = async (req,res)=>{


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

        //ankit mentor
       
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
module.exports.getRandomBooks = getRandomBooks*/

const bookAuthors = async (req,res)=>{


    let data1 = req.body
    let data2 = await BookModel.create(data1)
    res.send({msg: data2})
}

//find the author of “Two states” and update the book price to 100; 
// Send back the author_name and updated price in response. 
// ( This will also need 2  queries- 1st will be a findOneAndUpdate. 
//The second will be a find query aith author_id from previous query)
const nitu = async (req,res)=>{
    let statedata = await BookModel.findOneAndUpdate({author:"Two states"},
    {$set:price=100})
    res.send({msg: statedata})
}

const id = async (req,res)=>{
    let statedata = await BookModel.find({author_id:1}
    )
    res.send({msg: statedata})
}
//Find the books which costs between 50-100(50,100 inclusive)
 //and respond back with the author names of respective books

 const costs = async (req,res)=>{
    const costsData= bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    res.send({msg: costsData})
}

module.exports.bookAuthors = bookAuthors
module.exports.nitu = nitu
module.exports.id = id
module.exports.costs=costs