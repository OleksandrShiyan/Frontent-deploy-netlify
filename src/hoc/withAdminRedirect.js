import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    is_admin: state.auth.is_admin
});

export const withAdminRedirect = (Component) => {

    class  RedirectComponent extends React.Component {
        render() {
            if(!this.props.is_admin) return <Redirect to={"/profile"}/>;
            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}