require("../db/Connection")
const path =require("path")
const express =require("express")
const app =express()
const cors =require("cors")
var bodyParser = require('body-parser')
const userInfo = require("../routes/usersRoutes")
const userItem = require("../routes/ItemsType/user")
const items = require("../routes/itemRouts")
const admin = require("../routes/ItemsType/admin")


app.use(express.static(path.join(__dirname,"../public")))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use("/apiUser",userInfo)
app.use("/apiTask",items)
app.use("/apiItem/admin",admin)
app.use("/apiItem/user",userItem)
app.all('*',(req,res)=>{
    res.send({
        massage:"not found"
    })
})

module.exports =app