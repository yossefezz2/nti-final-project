const itemControlar =require("../../app/controlar/item/userItem")
const {userMiddleware} = require("../../app/middelware/auth.middelware")
const buyedItem =require("../../app/controlar/item/buyedItem")
const multer  = require('multer')
const upload = multer({ dest: 'public/' })
var express = require('express');

const router =express.Router()



// take it to itemRout

router.get("/",userMiddleware, buyedItem.getAllItems)

router.post("/:id",userMiddleware, buyedItem.createItemForUser)

router.delete("/:id",userMiddleware, buyedItem.deleteItemForUser)

router.post("/checkInvalid/:id",userMiddleware, buyedItem.checkInvalid)

// router.put("/:id",userMiddleware, buyedItem.updateItemForUser)




// // // /// // //  //
// router.get("/single",userMiddleware, itemControlar.getSingleItemForUserByID )

// router.post("/:id",userMiddleware, upload.single(), itemControlar.createItemForUser)

// router.delete("/:id",userMiddleware, itemControlar.deleteItemForUser)

// router.put("/:id",userMiddleware, upload.single(), itemControlar.updateItemForUser)


module.exports = router