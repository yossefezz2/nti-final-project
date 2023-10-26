const itemMoudle = require("../../../db/moudels/item.modul")
const userMoudle = require("../../../db/moudels/user.modul")
const itemsOptions = require("../items")
const { resGenerator } = require('../../helper')
class userItem {
    static async showAllItemsUser(req, res) {
        try {
            let item = await userMoudle.find({ _id: req.user._id })
            if (!item.items) throw new Error("No such item")
            itemsOptions.getAllItemsUser(req, res, item.items)
            resGenerator(res, 200, true, item, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show single")
        }
    }
    static async getSingleItemForUserByID(req, res) {
        try {
            let data = await userMoudle.aggregate([
                {$match: {
                    _id: req.user._id,
                    
                   }},
                {
                    
                    $lookup: {
                        from: "items",
                        localField: "items",
                        foreignField: "_id",
                        as: "item"
                    }
                }
            ])
            
            // let userdata= data.findById(req.user._id)
            resGenerator(res, 200, true, data, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show single")
        }
    }
    // Mongoose: stores.find({ _id: { '$in': [ ObjectId("59ab96d9c079220dd8eec42a"), ObjectId("59ab96d9c079220dd8eec42b") ] } }
    static async createItemForUser(req, res) {
        try {

            req.user.items.push(req.params.id)
            await req.user.save()
            resGenerator(res, 200, true, req.user, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show single")
        }
    }
    static async deleteItemForUser(req, res) {
        try {
            let item = await itemMoudle.findOneAndDelete({ _id: req.params.id })
            resGenerator(res, 200, true, item, "deleted success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't delete")
        }
    }
    static async updateItemForUser(req, res) {
        try {
            let item = await itemMoudle.findOneAndUpdata(req.params.id, req.body)
            resGenerator(res, 200, true, item, "updated success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't update")
        }
    }


}
module.exports = userItem
