const mongoose = require('mongoose');
const bycrypt = require("bcrypt")
const validator = require("validator")
var jwt = require('jsonwebtoken');
const itemModel =require("./item.modul")
const userSchema = mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        minLenght: 3,
        maxLenght: 20,
        required: true,
    },
    lname: {
        type: String,
        trim: true,
        minLenght: 3,
        maxLenght: 20,
        required: true,

    }, email: {
        type: String,
        trim: true,
        minLenght: 3,
        required: true,
        validate(value){
            if(!validator.isEmail(value))throw new Error("invalid email format")
        }

    }, password: {
        type: String,
        trim: true,
        minLenght: 3,
        required: true,

    },

    address: [{
        isDefault:{
            type:Boolean,
            trim: true,
            default: false
        },
        addressType: {
            type: String,
            trim: true,
            minLenght: 3,
            maxLenght: 20,
            // required: true,
        },
        addresscon: {
            type: String,
            trim: true,
            minLenght: 3,
            maxLenght: 20,
            // required: true,
        }
}],
    dataB: {
        type: Date
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    items : [{
        type: mongoose.Schema.Types.ObjectId,ref:'item'}
    ],type:{
        type: String,
        trim: true,
        enum:["user", "admin"],
        required: true,
        default: "user"
    },

}, {
    timestamps: true

})
userSchema.post("findOneAndDelete", async function (doc) {
    await itemModel.deleteMany({userId : doc._id})

})
userSchema.pre("save", async function () {
    if (this.isModified("password")){ 
        this.password = await bycrypt.hash(this.password, 10)       
        console.log("item")
    }
})
userSchema.methods.toJSON = function () {
    const user = this.toObject()
    delete user.password
    delete user.__v
    return user
}
userSchema.statics.login = async (email, password) => {

    const findEmail = await userModel.findOne({ email })
    if (findEmail) {
        if (await bycrypt.compare(password, findEmail.password)) {
            return findEmail
        } else {
            throw new Error("Invalid password")
        }
    } else {
        throw new Error("Invalid email")
    }
}
userSchema.methods.genTokens = async function () {
    const token = await jwt.sign({_id:this._id},process.env.jwtKey)
    this.tokens.push({token})
    await this.save()
    return token
}
const userModel = mongoose.model("user", userSchema)

module.exports = userModel