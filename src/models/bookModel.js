const mongoose = require('mongoose');
//const  publishController  = require('../controllers/publishController');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBook = new mongoose.Schema( {

_id: {
    type: ObjectId,
    ref: "newAuthor"
  },
    price: Number,
    ratings: Number,
     id: {
       type: ObjectId,
        ref: "newPublish"
      }

}, { timestamps: true });


module.exports = mongoose.model('newBook', newBook)
