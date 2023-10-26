var express = require('express');
const itemControlar =require("../../app/controlar/item/adminItem")
const {userMiddleware,isAdmin} = require("../../app/middelware/auth.middelware")
const multer  = require('multer')
const upload = multer({ dest: 'public/' })
const router =express.Router()

router.get("/:id",userMiddleware,isAdmin, itemControlar.getSingleUserByAdmin )

router.post("/addTaskImg",userMiddleware,isAdmin,upload.single('img'), itemControlar.addItem)

router.put("/editTask/:id",userMiddleware,isAdmin,upload.single('img'), itemControlar.editItem)

router.delete("/deleteTask/:id",userMiddleware,isAdmin, itemControlar.deleteItem)



module.exports = router