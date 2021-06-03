import React, {useEffect} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {deleteUser, requestUsers, updateUser} from "../../Redux/users-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withAdminRedirect} from "../../hoc/withAdminRedirect";

function UsersContainer({requestUsers, deleteUser, updateUser, isAdmin, users, ...props}) {

    useEffect(() => {
        requestUsers();
    }, [])

    return (
        <Users deleteUser={deleteUser} isAdmin={isAdmin}
               updateUser={updateUser} users={users}/>
    )
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        isAdmin: state.auth.is_admin
    }
}

const dispatches = {
    requestUsers,
    updateUser,
    deleteUser
}

export default compose(
    connect(mapStateToProps, dispatches),
    withAuthRedirect,
    withAdminRedirect
)(UsersContainer)