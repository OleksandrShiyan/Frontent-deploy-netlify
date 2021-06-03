import './App.css';
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./component/Users/UsersContainer";
import {connect} from "react-redux";
import ProfilesContainer from "./component/Profiles/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import {useEffect} from "react";
import {initializeApp} from "./Redux/app-reducer";
import {compose} from "redux";
import Preloader from "./component/common/Preloader/Preloader";
import SignUp from "./component/Login/SignUp";
import AllProfilesContainer from "./component/Profiles/AllProfiles/AllProfilesContainer";
import DashboardContainer from "./component/Dashboard/DashboardContainer";

function App({initializeApp, initialized}) {

    useEffect(() => {
        initializeApp();
    }, [initializeApp])

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div>
            <HeaderContainer/>
            <div>
                <Route path={'/profile/:userId?'} render={() => <ProfilesContainer/>}/>
                <Route path={'/profiles'} render={() => <AllProfilesContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/dashboard'} render={() => <DashboardContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/signup'} render={() => <SignUp/>}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
