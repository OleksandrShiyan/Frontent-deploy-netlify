import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id : null,
    email : null,
    password : null,
    isAuth : false,
    is_admin : false
};
//throwing error when initialState is an empty object
//Reducers
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

//Action Creators
export function setAuthUserData(id, email, password, isAuth, is_admin) {
    return {
        type: SET_USER_DATA,
        data: {id, email, password, isAuth, is_admin}
    }
}

//Thunk Creators
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email, is_admin} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true, is_admin));
    }
};

export const login = (email, password) => async (dispatch) => {
    let response = await authAPI.login(email, password);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, false));
    }
};

export const signUp = (email, password, is_admin) => async (dispatch) => {
    let response = await authAPI.signup(email, password, is_admin);
    if (response.data.email && response.data.password) {
        dispatch(login(response.data.email, response.data.password));
    }
}
export default authReducer;