const itemMoudle = require("../../../db/moudels/item.modul")
const uploadHandler = require("../../middelware/upload.middleware")
const { resGenerator } = require('../../helper')
const fs = require('fs')
const { log, error } = require("console")
class adminItem {

    static async getSingleUserByAdmin(req, res) {

    }
    static async addItem(req, res) {
        try {
            console.log(req.file);
            let f = uploadHandler.filehendeler(req.file)
            // console.log(f);
            let img = "http://localhost:3000/" + f.replace(`public\\`, "")
            let item = new itemMoudle({ itemImg: img, ...req.body })

            item.save()
            resGenerator(res, 200, true, item, "register")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild register")
        }
    }
    static async deleteItem(req, res) {
        try {
            let item = await itemMoudle.findById(req.params.id);
            let deletedItem = await itemMoudle.findOneAndDelete({ _id: req.params.id })
            let img =  item.itemImg.replace(`http://localhost:3000/`, "")
            fs.unlinkSync("./public/" + img);
            
            resGenerator(res, 200, true, deletedItem, "deleted success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't delete")
        }
    }
    static async editItem(req, res) {
        try {
            
            let itemUpdate = await itemMoudle.findById(req.params.id);
            if (!itemUpdate) {
                throw new error("item not found") ;
            }
            
            let img =  itemUpdate.itemImg.replace(`http://localhost:3000/`, "")
                fs.unlinkSync("./public/" + img);
            
            
            if (req.file) {
                let f = uploadHandler.filehendeler(req.file)
                let img = "http://localhost:3000/" + f.replace(`public\\`, "")
                req.body.itemImg = img;
              }
            let item = await itemMoudle.findByIdAndUpdate(req.params.id, req.body)

            resGenerator(res, 200, true, item, "success")
        } catch (error) {
            console.log(error);
            resGenerator(res, 500, false, error.message, "can't update")
        }
    }
}
module.exports = adminItem