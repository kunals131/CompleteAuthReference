const errorReducer = (state='', action)=>{
    if (action.type==='SET_ERROR') {
    return action.payload;
    }
    else {
        return state;
    }
}

export default errorReducer;