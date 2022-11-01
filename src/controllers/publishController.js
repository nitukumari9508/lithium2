const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishModel = require("../models/publishModel")
//3The publisherId is present in the request body.
// If absent send an error message that this detail is required
//

//If present, make sure the publisherId is a valid 
//ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

const newPublisher= async function (req, res) {
 
    
    let body = req.body
    let publishCreated = await publishModel.create(body)
    res.send({data: publishCreated})
}

const public = async function(req,res){
    const {publish_Id} =req.body
  if(!publish_Id){
  res.send(" publish_ID  detail is required")
     }
     
    let body = req.body
    let publishCreated = await publishModel.find(body)
    res.send({data: publishCreated})
}














module.exports.newPublisher = newPublisher
module.exports.public =public