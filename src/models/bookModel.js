const mongoose = require('mongoose');

//problem no:1
//Create a books collection in your DB ( using bookModel with following fields)
//- bookName( mandatory field), price containing Indian and european price, 
//year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 



const bookSchema = new mongoose.Schema({
    bookName:String,
    authorName :String,
    category: String,
    year:  Number,
    
    tags:[String],
    isPublished:Boolean,
    prices:{
        indianRupees:String,
        european:String
    },
    totalPages:Number,
    
    stockAvailable:Boolean



},{timestamps:true})


module.exports = mongoose.model('book', bookSchema)
