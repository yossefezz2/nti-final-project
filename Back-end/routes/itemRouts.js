const itemControlar =require("../app/controlar/items")
var express = require('express');
const {userMiddleware,isAdmin} = require("../app/middelware/auth.middelware")

const upload =require("../app/middelware/upload.many")
const router =express.Router()

// router.post("/Task",userMiddleware,itemControlar.additem)
router.get("/:id",userMiddleware, itemControlar.getSingleItems)
router.get("/", itemControlar.getAllItems)
module.exports=router