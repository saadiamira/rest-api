import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./actionTypes"



const init={
    user:null,
    error:null,
    loading:false,
    token:localStorage.getItem("token"),
   isAuth:false,
}

export const userReducer=(state=init,{type,payload})=>{
 switch(type)
 {
     case SIGNUP:
         case LOGIN:
         return {
             ...state,loading:true ,

         };
         case SIGNUP_FAIL:
             case LOGIN_FAIL:
             return{
                 ...state,loading:false ,error:payload,
             }
             case SIGNUP_SUCCESS:
                 return{
                    ...state,loding:false,user:payload,error:null
                 }
                 case LOGIN_SUCCESS:
                     return{
                         ...state,loading:false,error:null,user:payload.user,token:payload.token
                         ,isAuth:true,

                     }
         default:
             return state
 }}
 