import * as actionTypes from './actionTypes';
import BaseURL from '../../utils/BaseURL';
import Strings from '../../strings/Strings';



export const makeLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        fetch(new BaseURL().getMainURL() + 'Usuarios/login',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ email: email, password: password })
            })
            .then(results => { /* console.log(results);*/
                if (results.status !== 200) {
                    return null;
                } else {
                    return results.json();
                }
            })
            .then(data => {

                if (data === null) {
                    dispatch(authFail(Strings.login.userNotFound));
                } else {
                    dispatch(authSuccess(data.id, data.userId));
                }
            })
            .catch(err => {
                console.log("Error", err);
            });
    }
}


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userID) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userID: userID,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
