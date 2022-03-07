const express=require("express")
const { signUp, login, getUser } = require("../controllers/user.controllers");
const auth = require("../middellware/auth");
const { signUpRules , validator} = require("../middellware/validator")

router=express.Router()

router.post("/signUp",signUpRules(),validator,signUp);
router.post("/login",login)
router.get("/get",auth,getUser)


module.exports=router