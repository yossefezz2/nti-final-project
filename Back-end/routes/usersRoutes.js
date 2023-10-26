const userControlar =require("../app/controlar/users")
const {userMiddleware,isAdmin} = require("../app/middelware/auth.middelware")
const multer  = require('multer')
const upload = multer({ dest: 'public/' })
var express = require('express');
const router =express.Router()

router.get("/",userMiddleware,isAdmin, userControlar.showAll )
router.get("/:", userControlar.single )

router.get("/showAllAdresse", userMiddleware, userControlar.showAllAdresse )
router.delete("/deleteAddress/:idAddress", userMiddleware, userControlar.deleteAddress )

router.delete("/:id", userControlar.deleteOne )
router.delete("/",userMiddleware,isAdmin,  userControlar.deleteAll )

router.put("/:id", userControlar.UpdateOne )

router.post("/res", userControlar.signUp )

router.post("/login", userControlar.login )

router.post("/logout",userMiddleware,  userControlar.logout )
router.post("/change",userMiddleware,  userControlar.changePassword )
router.post("/logoutAll",userMiddleware,  userControlar.logoutAll )


router.post('/addImg', userMiddleware,upload.single('img'),userControlar.uploadImg,)
module.exports=router