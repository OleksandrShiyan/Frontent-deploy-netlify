import {profilesAPI} from "../api/api";

const SET_PROFILES = 'SET_PROFILES';

let initialState = {
    profiles : [
        {id:null, fullname : null, sex : null, birth : null, city : null, user_id : null}
    ]
};
//throwing error when initialized state is an empty object

function profilesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILES:
            return {...state, profiles: action.profiles}
        default:
            return state;
    }
}

export function setProfiles(profiles) {
    return {
        type: SET_PROFILES,
        profiles
    }
}

export const requestProfiles = (userId) => {
    return async (dispatch) => {
        let res = await profilesAPI.getUserProfiles(userId);
        dispatch(setProfiles(res));
    }
};

export const requestAllProfiles = () => {
    return async (dispatch) => {
        let res = await profilesAPI.getAllProfiles();
        dispatch(setProfiles(res));
    }
};

export const updateProfile = (fullname, sex, birth, city, id, user_id) => {
    return async (dispatch) => {
        let res = await profilesAPI.updateUserProfile(fullname, sex, birth, city, id, user_id);
        dispatch(requestProfiles(user_id))
        // dispatch(setProfiles(res));
        //need to solve the problem when you dispatch profiles from allProfiles page
    }
};

export const updateAllProfile = (fullname, sex, birth, city, id, user_id) => {
    return async (dispatch) => {
        let res = await profilesAPI.updateUserProfile(fullname, sex, birth, city, id, user_id);
        dispatch(requestAllProfiles())
    }
};

export const deleteProfile = (id, userId) => {
    return async (dispatch) => {
        let res = await profilesAPI.deleteProfile(id);
        debugger;
        dispatch(requestProfiles(userId));
        //need to solve the problem when you dispatch profiles from allProfiles page
    }
}

export const deleteAllProfile = (id) => {
    return async (dispatch) => {
        let res = await profilesAPI.deleteProfile(id);
        debugger;
        dispatch(requestAllProfiles())
        //need to solve the problem when you dispatch profiles from allProfiles page
    }
}

export const createProfile = (fullname, sex, birth, city, user_id) => {
    return async (dispatch) => {
        let res = await profilesAPI.createProfile(fullname, sex, birth, city, user_id);
        dispatch(requestProfiles(user_id));
        //need to solve the problem when you dispatch profiles from allProfiles page
    }
}

export const createAllProfile = (fullname, sex, birth, city, user_id) => {
    return async (dispatch) => {
        let res = await profilesAPI.createProfile(fullname, sex, birth, city, user_id);
        dispatch(requestAllProfiles());
        //need to solve the problem when you dispatch profiles from allProfiles page
    }
}

export default profilesReducer;