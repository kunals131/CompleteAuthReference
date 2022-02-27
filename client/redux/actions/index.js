import { persistAuth, signInUser } from "../../api/user.api"
import jwt_decode from "jwt-decode";
export const setError =(msg)=>({
    type : 'SET_ERROR',
    payload : msg
})

export const loginUser = (username,password)=>async (dispatch)=>{
    try {
        const user = await signInUser(username,password);
        const decodedData = jwt_decode(user);
        console.log(decodedData)
      
        dispatch({
            type : 'LOGIN_USER',
            payload : decodedData
        })
    
     
    }
    catch(err) {
        dispatch({
            type : 'SET_ERROR',
            payload : err.message
        })
    }
}

export const checkUserAuth = ()=>async(dispatch)=>{
    try {
        let token = await persistAuth();
        const data = jwt_decode(token);
        dispatch({
            type : 'LOGIN_USER',
            payload : decodedData
        })
    }
    catch(err) {
        dispatch({
            type : 'SET_ERROR',
            payload : 'NOT LOGGED IN!'
        })
    }
}