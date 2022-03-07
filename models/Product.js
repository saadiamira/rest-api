const mongoose=require("mongoose")
const Schema=mongoose.Schema

const ProductShema=new Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    imageUrl:String,
    category:{
        type:String,
        required:true,
    },
    price:Number,
    required:true,
    quantity:{
        type:Number,
        required:true,
    }

})
module.exports=Product=mongoose.model('Product',ProductShema);