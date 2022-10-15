//const lodash = require('lodash')
let str = "nitu"
let trim = function(){
    let res = str.toUpperCase()
    
    return "res"
}


var _ = require('lodash');
const arr = ["Jan","Feb","Mar","April","May","June","july","august","september","october","November","December"]
 let result = _.flatten(arr,4)
console.log(result)


// use chunk function
var _ = require('lodash');
var numbers = ["Jan","Feb","Mar","April","May","June","july","august","september","october","November","December"];
var listOfNumbers = '';

listOfNumbers = _.chunk(numbers, 4);
console.log(listOfNumbers);
//odd number
var_ = require('lodash')
const functionup =[1,3,5,7,9,11,13,15,17,19]
let result2 = _.tail(functionup)
console.log(result2)
//- Create 5 arrays of numbers containing a few duplicate values.
// Using the function union create a merged array with only unique values and print them on console
var_ = require('lodash');
var numbers2 = [1, 2, 3, 4 ,4]

let result5 = _.union(numbers2, [5]);
console.log(result5);

//Use the function fromPairs to create an object containing key value pairs. 
//For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

var _ = require('lodash');
let list = [['One' , 1], ['Two', 2],['three',3],['four',4]]
let pairs = _.fromPairs(list)

console.log(pairs);

 module.exports.trim1 = trim
 module.exports.arr1 = arr
 module.exports.numbers1=numbers
 module.exports.functionup1=functionup
 module.exports.mamma = numbers2
module.exports.list1 = list