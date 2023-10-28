const buyedItemMoudle = require('../../../db/moudels/userBuyItem');
const { resGenerator } = require('../../helper')
class buyedItem {
    static async getAllItems(req, res) {
        try {
            let item = await buyedItemMoudle.find()
            console.log(item);
            resGenerator(res, 200, true, item, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show single")
        }
    }
    static async createItemForUser(req, res) {
        try {
            console.log(req.body);
            let item = await new buyedItemMoudle({userId:req.user._id,itemId:req.params.id})
            item.save()
            resGenerator(res, 200, true, item, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "invaild show single")
        }
    }
    static async deleteItemForUser(req, res) {
        try {
            let item = await buyedItemMoudle.findOneAndDelete({ userId:req.user._id,itemId: req.params.id })
            resGenerator(res, 200, true, item, "deleted success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't delete")
        }
    }
    static async checkInvalid(req, res) {
        try {
            let item = await buyedItemMoudle.find({ userId:req.user._id,itemId: req.params.id })
            resGenerator(res, 200, true, item, "success")
        } catch (error) {
            resGenerator(res, 500, false, error.message, "can't delete")
        }
    }
}

module.exports = buyedItem