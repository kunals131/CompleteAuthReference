
const userReducer = (state= null,action)=>{
    switch(action.payload) {
        case 'LOGIN_USER' : return action.payload;
        case 'LOGOUT_USER' : return {};
        case 'SET_USER' : return action.payload;
        default : return state;
    }

}

export default userReducer;