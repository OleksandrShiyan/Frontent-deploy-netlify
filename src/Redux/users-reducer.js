import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';

let initialState = {
    users : [
        {id: null, email : null, password: null, isAdmin: null}
    ]
};
//throwing error when initialized state is an empty object

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        default:
            return state;
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export const requestUsers = () => {
    return async (dispatch) => {
        let data = await usersAPI.getUsers();
        dispatch(setUsers(data));
    }
}

export const updateUser = (id, email, password, isAdmin) => {
    return async (dispatch) => {
        debugger;
        let user = await usersAPI.updateUser(id, email, password, isAdmin);
        dispatch(requestUsers());
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        let user = await usersAPI.deleteUser(id);
        dispatch(requestUsers());
    }
}

export default usersReducer;