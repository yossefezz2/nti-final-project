const userMoudle = require("../../db/moudels/user.modul")
const bycrypt = require("bcrypt")
const uploadHandler = require("../middelware/upload.middleware")
const { resGenerator } = require('../helper')
class users {
    static async signUp(req, res) {
        try {
            const user = new userMoudle(req.body)
            await user.save()
            resGenerator(res, 200, true, user, "register")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild register")
        }
    }
    static async showAll(req, res) {
        try {
            let allUsers = await userMoudle.find()
            resGenerator(res, 200, true, allUsers, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show all")
        }
    }
    static async deleteOne(req, res) {
        try {
            let deletedUser = await userMoudle.findOneAndDelete({ _id: req.params.id })
            resGenerator(res, 200, true, deletedUser, "deleted success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't delete")
        }
    }
    static async deleteAll(req, res) {
        try {
            let deletedUser = await userMoudle.deleteMany({})
            resGenerator(res, 200, true, deletedUser, "deleted success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't delete")
        }
    }
    static async single(req, res) {
        try {
            let allUsers = await userMoudle.findById(req.params.id)

            resGenerator(res, 200, true, allUsers, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show single")
        }
    }
    static async UpdateOne(req, res) {
        try {
            let allUsers = await userMoudle.findByIdAndUpdate(req.params.id, req.body)

            resGenerator(res, 200, true, allUsers, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't update")
        }
    }
    static async login(req, res) {
        try {
            const user = await userMoudle.login(req.body.email, req.body.password)
            await user.genTokens()
            resGenerator(res, 200, true, user, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't login")
        }
    }
    static async logout(req, res) {
        try {
            let user = await userMoudle.filter(t => {
                return t.tokens.token != req.token
            })
            await user.save()
            resGenerator(res, 200, true, user, "logout")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't loggedOut")
        }
    }
    static async logoutAll(req, res) {
        try {
            let user = await userMoudle.findByIdAndUpdate(req.user._id, { tokens: [] })

            await user.save()
            resGenerator(res, 200, true, user, "logout")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't loggedOut")
        }
    }
    static async showAllAdresse(req, res) {
        try {
            let user = await userMoudle.findById(req.user._id)

            resGenerator(res, 200, true, user.address, "logout")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't loggedOut")
        }
    }
    static async deleteAddress(req, res) {
        try {
            let userAddr = req.user.address
            userAddr.splice(req.params.idAddress, 1)
        resGenerator(res, 200, true, req.user, "deleted")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't deleted")
        }
    }
    static async changePassword(req, res) {
        try {
            const isValid = await bycrypt.compare(req.body.oldPassword, req.user.password)
            console.log(req.user.password, req.body.oldPassword, isValid);
            if (isValid) {
                req.user.password = req.body.newPassword
                req.user.save()
                resGenerator(res, 200, true, req.user, "done")
            } else {
                throw new Error("Couldn't change password")
            }
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't deleted")
        }
    }
    static async uploadImg(req, res) {
        let f = uploadHandler.filehendeler(req.file)
        req.user.img = "http://localhost:3000/" + f.replace(`public\\`, "")
        req.user.save()
        res.send({ img: req.user.img, message: req.user })

    }
}
module.exports = users