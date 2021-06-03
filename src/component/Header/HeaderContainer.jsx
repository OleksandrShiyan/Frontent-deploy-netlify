import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../Redux/auth-reducer";

function HeaderContainer({getAuthUserData, ...props}) {

    useEffect(() => {
        getAuthUserData();
    }, [])


    return <Header {...props}/>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    is_admin: state.auth.is_admin,
    email: state.auth.email
})


export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer)