const { default: mongoose } = require("mongoose")
const AuthorModel= require("../models/authorModel")




//const getAuthorsData= async function (req, res) {
  //  let authors = await AuthorModel.find()
  //  res.send({data: authors})
//}

const createAuthor= async function (req, res) {

  

//If present, make sure the authorId is a valid ObjectId in the author collection. 
//If not then send an error message that the author is not present.


    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}
const createAuthor2 = async (req,res)=>{
    const {authorId,author_name}=req.body
if(!authorId){
    res.send("authorId is required")
}
if(!author_name){
    res.send("name is required")
}
if(!mongoose.isValidObjectId()){
res.send("objectId is not valid")
}

let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})

}



module.exports.createAuthor= createAuthor
module.exports.createAuthor2= createAuthor2