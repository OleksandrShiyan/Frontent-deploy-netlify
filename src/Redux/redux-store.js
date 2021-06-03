import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import profilesReducer from "./profiles-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import dashboardReducer from "./dashboard-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    profilesPage: profilesReducer,
    auth: authReducer,
    app: appReducer,
    dashboard: dashboardReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;