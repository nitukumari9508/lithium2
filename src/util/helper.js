
//- printDate() : prints the current date
////- printMonth() : prints the current month
//- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
//
	//Call all these functions in route.js inside the test-me route handler
let printDate = function(){
    const date = new Date()
    return date.getDate()
}
let printMonth = function(){
    const month = new Date()
    return month.getMonth()
}
let nitu1 = function(){
    
    return "lithium W3D3 the topic for today is Nodejs module system"
}

module.exports.printDate1 = printDate
module.exports.printMonth1 = printMonth
module.exports.getBatchInfo1 = nitu1
