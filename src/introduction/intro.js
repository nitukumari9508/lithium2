const batchName = "Plutonium"

let printName = function() {
    console.log('Bathc name is ', batchName)
}

const array =[1,2,3,5,6,7]
const missingElement = (arr)=>{
let sum = arr.length+1
const total =(sum*(sum*sum+1))/2
const totalNumber = 0
for(let i=0;i<arr.length;i++){
    totalNumber+=arr[i]
} 
return total-totalNumber
}
console.log(missingElement(array))
module.exports.name = batchName
module.exports.printName = printName
//module.exports.array1 = missingElement
