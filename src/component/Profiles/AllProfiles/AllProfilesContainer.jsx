import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profiles from "../Profiles";
import {
    createAllProfile, deleteAllProfile,
    requestAllProfiles,
    updateAllProfile
} from '../../../Redux/profiles-reducer'
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {withAdminRedirect} from "../../../hoc/withAdminRedirect";

function AllProfilesContainer({requestAllProfiles, ...props}) {

    useEffect(() => {
        requestAllProfiles();
    }, [])
    //without deps massive useEffect will call function every ms

    return (
        <Profiles deleteProfile={props.deleteAllProfile} createProfile={props.createAllProfile}
                  userId={props.authUserId}
                  profiles={props.profiles} updateProfile={props.updateAllProfile}/>
    )
}

function mapStateToProps(state) {
    return {
        profiles: state.profilesPage.profiles,
        authUserId: state.auth.id
    }
}

const dispatches = {
    requestAllProfiles,
    deleteAllProfile,
    createAllProfile,
    updateAllProfile
}

export default compose(
    connect(mapStateToProps, dispatches),
    withAuthRedirect,
    withAdminRedirect
)(AllProfilesContainer)