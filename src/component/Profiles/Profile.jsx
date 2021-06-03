import React from "react";
import styles from './Profiles.module.css';
import style from './Profile.css'

function Profile(props) {

     const changeEdit = () => {
         props.setEdit(props.profile.id);
    }

    const deleteProfile = () => {
         debugger;
        props.deleteProfile(props.profile.id, props.profile.user_id);
        debugger;
    }

    return (
        <div className={'profile'}>
            <div className={styles.text}>
                {props.profile.fullname}
            </div>
            <div className={styles.text}>
                {props.profile.sex}
            </div>
            <div className={styles.text}>
                {props.profile.birth}
            </div>
            <div className={styles.text}>
                {props.profile.city}
            </div>
            <div>
                <button id="editBtn" onClick={changeEdit}>Edit</button>
                <button onClick={deleteProfile}>Delete</button>
            </div>
        </div>
    )
}

export default Profile;