const itemMoudle = require("../../db/moudels/item.modul")
const uploadHandler = require("../middelware/upload.middleware")
const { resGenerator } = require('../helper')
class items {
    static async additem(req, res) {
        try {
            const item = new itemMoudle(req.body)
            await item.save()
            res.send({
                data: req.body,
                file:req.file
            })
        } catch (error) {
            res.send({
                error: error.message
            })
        }
    }
    static async item(req, res) {
        try {
            // let f =uploadHandler.filehendeler(req.files)
            // let itemImg = "http://localhost:3000/"+ f.replace(`public\\`,"")
            // const item = new itemMoudle({
            //     userId: req.user._id, itemImg:itemImg,
            //     ...req.body
            // })
            // await item.save()
            res.send({
                data: req.files,
            })
        } catch (error) {
            res.send({
                error: error.message
            })
        }
    }
    static async getitem(req, res,items) {
        try {
            let item = await itemMoudle.find({ _id:req.params.id })
            res.send({ item: item })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    static async edititem(req, res) {
        try {

            let item = await itemMoudle.findOneAndUpdate({_id:req.params.id, userId:req.user.id},req.body)
            if( !item) throw new Error("item not found")
            res.send({ item: item })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    static async deleteitem(req, res) {
        try {

            let item = await itemMoudle.findOneAndDelete({_id:req.params.id, userId:req.user.id},req.body)
            if( !item) throw new Error("item not found")
            res.send({ item: item })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    static async getAllItemsUser(req, res,items) {
        try {
            let data =[]
            items.forEach(async (element)  => {
                // element.toString()
                // console.log(element);
                let itemData = await itemMoudle.find({_id: { '$in': items}})
                data.push(itemData) 
            });
            
            res.send({ data: data })
        }catch(error) {

        }

}
static async getAllItems(req, res) {
    try {
        let item = await itemMoudle.find()
        resGenerator(res, 200, true, item, "success")
    } catch (error) {
        resGenerator(res, 500, false, error.message, "invaild show single")
    }
}
static async getSingleItems(req,res){
    try {
        let item = await itemMoudle.findById(req.params.id)
        resGenerator(res, 200, true, item, "success")
    } catch (error) {
        resGenerator(res, 500, false, error.message, "invaild show single")
    }
}
}
module.exports = items