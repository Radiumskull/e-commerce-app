import axios from 'axios';

const authSuccess = (user) => {
    return {
        type : "AUTH_SUCCESS",
        user : user
    }  
}; 

const authFailure = (error) => {
    return {
        type : "AUTH_FAILURE",
        error : error
    };
}

const authStart = () => {
    return {
        type : "AUTH_START"
    }
}

export const authLogout = () => {
    return {
        type : "AUTH_LOGOUT"
    }
}





export const auth = (isSignUp, data) => {
    const baseUrl = `http://127.0.0.1:5000/api/users/${isSignUp ? 'signup' : 'login'}`;
    return dispatch => {
        dispatch(authStart());
        return isSignUp ? 
        axios.post(baseUrl, {
            username : data.email,
            password : data.password
        }).then(res => {
            console.log(res.data);
            dispatch(authSuccess(res.data));
        }).catch(e => {
            console.log(e.response.data);
            dispatch(authFailure("Error Authenticating"));
        }) : axios.post(baseUrl, {
            username : data.email,
            password : data.password
        }).then(res => {
            dispatch(authSuccess(res.data))
        }).catch(e => {
            console.log(e.response);
            dispatch(authFailure("Error Authenticating"));
        });


    }
    


}

