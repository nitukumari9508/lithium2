const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const xyz1 = require('../logger/logger')
const nitu = require('../util/helper')
const engineer = require('../validator/formatter')
//importing external package
const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    console.log(xyz1.myfunction1())
    console.log(nitu.printDate1())
    console.log(nitu.printMonth1())
    console.log(nitu.getBatchInfo1())
    
    console.log(engineer.arr1)
    console.log(engineer.trim1())
    console.log(engineer.numbers1)
    console.log(engineer.functionup1)
    console.log(engineer.mamma)
    console.log(engineer.list1)
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

