import axios from "axios"
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./actionTypes"



export const userSignUp=(newUser)=>async (dispatch)=>{
    dispatch({ type:SIGNUP })

        try {
            const res = await axios.post("/user/signUp",newUser)
            dispatch({
                type:SIGNUP_SUCCESS,
                payload:res.data,
            })
        } catch (error) {
            dispatch({
                type:SIGNUP_FAIL,
                payload:error.response.data
            })
            
        }
}
export const userlogin=(user)=>async (dispatch)=>{
    dispatch({ type:LOGIN })

        try {
            const res = await axios.post("/user/login",user);
            localStorage.setItem("token",res.data.token)
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data,
            })
        } catch (error) {
            dispatch({
                type:LOGIN_FAIL,
                payload:error.response.data
            })
            
        }
}