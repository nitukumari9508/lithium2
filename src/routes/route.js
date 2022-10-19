const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', (req, res)=> {// route.get(route, callback())
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('studendName')
})
//problem1:Create an API for GET /movies that returns a list of movies. 
//Define an array of movies in your code and return the value in response.

router.get('/movies',(req,res)=>{
    console.log("The path params in the request are : ", req.params)
    let abc = ["pratigya","mangal","bodyguard" ,"kabhi khushi kabhi gam"]

    console.log(abc)
    res.send(abc)
})
//problem 2:Create an API GET /movies/:indexNumber 
//(For example GET /movies/1 is a valid request and it should return the movie in your array at index 1).
// You can define an array of movies again in your api




let movies = ["vivah", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movies/:indexNumber', (req,res)=>{
    
let index = req.params.indexNumber


  

res.send(movies[index])
})



//problem :4  . Write another api called GET /films.
// Instead of an array of strings define an array of movie objects this time. 
//Each movie object should have values - id, name. An example of movies array is 


router.get('/films',function(req,res){
    console.log("path params request are :", req.params)
 const films = [ {
    "id" : 1,
    "name" : "3 idiots"
},{
"id" : 2, 
"name" : "kabir singh"
},{
 "id" : 3,             // problem -4
 "name" : "pratigya" 
}]
res.send(films)
})
   const films1 ={
    id: 1,
    name: "rang de basanti"
   }

router.get('/films/:filmId',(req,res)=>{
    let index1 = req.params.filmId
     res.send(films1[index1] )

})
//problem no :5  Similarly for a request GET /films/9 the response can be something like - 
//‘No movie exists with this id’
//let filmArray =[ navya, pratigya, war, suryavansam, saathiya, humapkehaikoun]
router.get('films/:filmid',(req,res)=>{
    let index = req.params.filmid
if(filmArray>(filmArray.length-1)){
    res.send()
}

})







module.exports = router;