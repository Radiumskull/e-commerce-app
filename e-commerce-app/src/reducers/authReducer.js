const initState = {
    user : null,
    error : "",
    loading : false,
}


const authStart = (state) => {
    return {...state, loading : true};
}

const authSuccess = (state, action) => {
    return {...state, user : action.user, loading : false};
}

const authFailure = (state, action) => {
    return {...state, error : action.error, loading : false};
}

const authLogout = (state, action) => {
    return initState;
}



const authReducer = (state = initState, action) => {
    switch(action.type){
        case "AUTH_SUCCESS": return authSuccess(state, action);
        case "AUTH_FAILURE": return authFailure(state, action); 
        case "AUTH_START": return authStart(state); 
        case "AUTH_LOGOUT": return authLogout(state, action); 
        default:
            return state;
    }
}

export default authReducer;