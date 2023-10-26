const mongoose = require('mongoose');
const validator = require("validator");
const userModel = require('./user.modul');
const itemSchema = mongoose.Schema({
    title:{
        type:String,
        trim:true,
        minLenght:3,
        maxLenght:20,
        required: true,
    },type:{
        type:String,
        trim:true,
        require:true
    },content:{
        type:String,
        trim:true,
        minLenght:3,
        maxLenght:20,
        required:true
    },price:{
        type:String,
        trim:true,
        required:true
    },
    itemImg:{
        type:String,
        trim:true,
    },
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
// itemSchema.post("findOneAndDelete", async function (doc) {
//     let allUsers = await userModel.find()
//     for (const item of allUsers){
//         await item.items.deleteMany((res) => res ==  doc._id)
//     }
//     allUsers.save()

// })
const itemModel =mongoose.model("item", itemSchema)

module.exports=itemModel