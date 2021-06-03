import preloader from "../../../assets/images/cupertino_activity_indicator.gif";
import React from "react";

let Preloader = (props) => {
    return (
        <div style={{backgroundColor: "white"}}>
            <img src={preloader} alt={'preloader gif'}/>
        </div>)
}

export default Preloader;