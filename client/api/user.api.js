import axios from 'axios';

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
        const result = await axios.get('http://localhost:3001/api/refreshtoken');
        return result.data.accessToken;
    }
    catch(err) {
        console.log(err);
    }

}