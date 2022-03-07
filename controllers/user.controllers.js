const { json } = require("express/lib/response");
const User = require("../models/User");
let bc = require("bcryptjs");
const jwt=require("jsonwebtoken");
const config= require("config")
const secret=config.get("secret")


exports.signUp = async (req, res) => {
  const { fullName, email, password, phone, adress,userRole } = req.body;
  try {

    const existinguser = await User.findOne({email});
  if (existinguser) { res.status(401).json({msg: 'User already exists!'});}

    const newUser = new User({fullName, email, password, phone, adress,userRole});
    const salt=await bc.genSalt(10);
    const hash=await bc.hashSync(password,salt)
    newUser.password=hash
    await newUser.save();

    const payload={
      id:newUser._id,
      fullName:newUser.fullName,

    };
    const token=jwt.sign(payload,secret)
    res.status(200).json({
      token,
      user:{
        id:newUser.id,
        email:newUser.email,
        password:newUser.password,
        phone:newUser.password,
        adress:newUser.adress,
        userRole:newUser.userRole,
        fullName:newUser.fullName,
      }
    })
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.login = async (req,res)=>{
  const {
    email,password}=req.body;
    try {
      const theUser= await User.findOne({
        email  });
        if (!theUser){
          res.status(402).json({msg:"invalid email or password "})
        }

        const isMatch=await bc.compare(password,theUser.password);
        if (!isMatch){
           res.status(402).json({msg:"invalid email or password "})

        }
        const payload={
          id:theUser._id,
          email:theUser.email,
          fullName:theUser.fullName,
          phone:theUser.phone,

        };
        const token=jwt.sign(payload,secret)
        res.status(203).json({
          token,
          user:{
            id:theUser.id_,email,
            phone:theUser.phone,
            password:theUser.password,
            fullName:theUser.fullName,
          }
        })
      
    } catch (error) {
      res.status(500).json({ msg: error.message });

      
    }

}
exports.getUser=(req,res)=>{
  res.send(req.user)
}
