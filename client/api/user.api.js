import axios from 'axios';

// axios.defaults.withCredentials = true;

export const signInUser = async (username,password)=>{
    try {
        const result = await axios.post('http://localhost:3001/api/login', {username,password});
        console.log(result);
        return result.data.accessToken;
    }
    catch(err) {
        console.log(err);
    }
}

export const persistAuth = async(username,password)=>{
    try {
        const result = await axios.get('http://localhost:3001/api/refreshtoken', {withCredentials : true});
        return result.data.accessToken;
    }
    catch(err) {
        console.log(err);
    }

}

export const createUser = async(username,password) =>{
        const result = await axios.post('http://localhost:3001/api/register',{username,password});
        return result.data;
    
}