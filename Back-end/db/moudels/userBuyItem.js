const mongoose = require('mongoose');

const userBuyItemsSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    itemId:{
        type: mongoose.Schema.Types.ObjectId, ref:"item"},
})
const userBuyItems = mongoose.model("buyItems",userBuyItemsSchema)
module.exports = userBuyItems