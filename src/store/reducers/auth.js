import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/updateObject';

/**
 * This Object manage the Redux state of auth
 * The reducer always is called by Actions
 * 
 * Above the initial state
 */
const initialState = {
    token: "",
    userID: 0,
    error: "",
    loading: false,
};



/**
 * Update State when auth has success
 * @param {*} state 
 * @param {*} action 
 */
const authStart = (state, action) => {
    return updateObject(state, {
        token: '',
        userID: 0,
        error: "",
        loading: true,
    });
};

/**
 * Update State when auth has success
 * @param {*} state 
 * @param {*} action 
 */
const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userID: action.userID,
        error: "",
        loading: action.loading,
    });
};

/**
 * Update State when auth has fail
 * @param {*} state 
 * @param {*} action 
 */
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


/**
 * This method is called by Auth Actions
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default:
            return state;
    }
};

export default reducer;