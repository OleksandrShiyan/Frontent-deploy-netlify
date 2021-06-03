import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getDashboardData} from "../../Redux/dashboard-reducer";
import Dashboard from "./Dashboard";

function DashboardContainer({getDashboardData, ...props}) {

    useEffect(() => {
        getDashboardData();
    }, [])

    return <Dashboard {...props}/>

}

const mapStateToProps = (state) => ({
    users: state.dashboard.users,
    profiles: state.dashboard.profiles,
    adultProfiles: state.dashboard.adultProfiles

})


export default connect(mapStateToProps, {getDashboardData})(DashboardContainer)