import {dashboardAPI} from "../api/api";

const SET_DASHBOARD_DATA = 'SET_DASHBOARD_DATA';

let initialState = {
    users: null,
    profiles: null,
    adultProfiles: null
};
//throwing error when initialState is an empty object
//Reducers
function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DASHBOARD_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

//Action Creators
export function setDashboardData(users, profiles, adultProfiles) {
    return {
        type: SET_DASHBOARD_DATA,
        data: {users, profiles, adultProfiles}
    }
}

//Thunk Creators
export const getDashboardData = () => async (dispatch) => {
    let response = await dashboardAPI.dashboard();
    let {users, profiles, adultProfiles} = response.data;
    dispatch(setDashboardData(users, profiles, adultProfiles));
};

export default dashboardReducer;