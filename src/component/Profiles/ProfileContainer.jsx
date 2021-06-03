import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profiles from "./Profiles";
import {createProfile, deleteProfile, requestProfiles, updateProfile} from '../../Redux/profiles-reducer'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function ProfilesContainer({requestProfiles, ...props}) {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) userId = props.authUserId;
        requestProfiles(userId);
    }, [])

    return (
        <Profiles deleteProfile={props.deleteProfile} createProfile={props.createProfile}
                  userId={props.authUserId}
                  profiles={props.profiles} updateProfile={props.updateProfile}/>
    )
}

function mapStateToProps(state) {
    return {
        profiles: state.profilesPage.profiles,
        authUserId: state.auth.id
    }
}

const dispatches = {
    requestProfiles,
    updateProfile,
    deleteProfile,
    createProfile
}

export default compose(
    connect(mapStateToProps, dispatches),
    withAuthRedirect,
    //better use useHistory, useLocation, useParams, useRouteMatch later
    withRouter
)(ProfilesContainer)