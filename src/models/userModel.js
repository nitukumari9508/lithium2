//const mongoose = require('mongoose');

/*const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });*/
const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema( {    

    author_id:Number,
    author_name:String,
    age:Number,
    address:String
} ,{timeStamps:true}

)




//module.exports = mongoose.model('User', userSchema) //users

module.exports = mongoose.model('Author', authorSchema)




// String, Number
// Boolean, Object/json, array