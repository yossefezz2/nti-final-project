var jwt = require('jsonwebtoken');
const userMoudle = require("../../db/moudels/user.modul")
const {resGenerator}= require('../helper')
const userMiddleware= async (req,res,next)=>{
    try {

        const token = req.header("authorization").replace("Bearer ","")
        console.log(token);
        let decoded = jwt.verify(token,process.env.jwtKey)
        const user =await userMoudle.findOne({
            _id:decoded._id,
            "tokens.token":token
        })
        if(!user)  throw new Error("invalid auth")

        req.user = user
        req.token = token

        next()
        
    } catch (error) {
        resGenerator(res, 500, false, error.message , "invalid auth")
    }
}
const isAdmin= async (req,res,next)=>{
    try {

        if (req.user.type != "admin") throw new Error("not authorized admin")

        next()
        
    } catch (error) {
        resGenerator(res, 500, false, error.message , "invalid auth")
    }
}
module.exports = {userMiddleware,isAdmin}