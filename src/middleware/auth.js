

const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
  req.token= decodedToken
    next()}
    catch(error){
      res.status(500).send({error:error.message})
    }
}

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
   
  try{
    let userId = req.params.userId;
  if(userId!=req.token.userId){
    return res.status(401).send({status:false, msg:"unauthorized"})
  }
   

    next()}catch(error){
      res.status(500).send({error:error.message})
    }

}

module.exports = {authenticate,authorise}

