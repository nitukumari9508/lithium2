const UserModel= require("../models/userModel")

/*const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData   
//module.exports.bookName = bookName*/
//.find({$or:[n>5,n>=10]})


const authorNitu = async (req,res)=>{


    let body = req.body
    let data = await UserModel.create(body)
    res.send({msg: data})
}
//List out the books written by "Chetan Bhagat" 
//( this will need 2 DB queries one after another- first query will
// find the author_id for "Chetan Bhagat”. 
//Then next query will get the list of books with that author_id )





   
const author2 = async (req,res)=>{

    let data = await UserModel.find().select({author_id:"chetan Bhagat"})
    res.send({msg: data})
}
     



const author1 = async (req,res)=>{


   // let body = req.body
    let data = await UserModel.find({author_id:1})
    res.send({msg: data})
}

module.exports.authorNitu = authorNitu
module.exports.author1 =author1
module.exports.author2=author2