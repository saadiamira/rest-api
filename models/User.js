const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userSchema=new Schema({
    fullName:String,
    email:String,
    password:String,
    Phone:String,
    adress:String,
  
    userRole: {
        type: String,
        default: 'User',
        roles: ['User', 'Admin'],
      },

});
module.exports= User=mongoose.model("User",userSchema);