import React from "react";
import style from "./Dashboard.module.css";

function Dashboard (props) {
    return(
        <div>
            <h1>Dashboard</h1>
            <div className={style.dashboards}>
            <div className={style.dashboard}>
                <div className={style.text}>
                    <label>Users:{props.users}</label>
                </div>
            </div>
            <div className={style.dashboard}>
                <div className={style.text}>
                    <label>Profiles:{props.profiles}</label>
                </div>
            </div>
            <div className={style.dashboard}>
                <div className={style.text}>
                    <label>Profiles over 18 years old:{props.adultProfiles}</label>
                </div>
            </div>
            </div>
        </div>
    )
}



export default Dashboard;