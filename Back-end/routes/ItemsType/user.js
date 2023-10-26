const itemControlar =require("../../app/controlar/item/userItem")
const {userMiddleware} = require("../../app/middelware/auth.middelware")
const multer  = require('multer')
const upload = multer({ dest: 'public/' })
var express = require('express');

const router =express.Router()

router.get("/",userMiddleware, itemControlar.showAllItemsUser )

// take it to itemRout




// // // /// // //  //
router.get("/single",userMiddleware, itemControlar.getSingleItemForUserByID )

router.post("/:id",userMiddleware, upload.single(), itemControlar.createItemForUser)

router.delete("/:id",userMiddleware, itemControlar.deleteItemForUser)

router.put("/:id",userMiddleware, upload.single(), itemControlar.updateItemForUser)


module.exports = router