import React from "react";
import style from './Users.module.css'

function User(props) {
    const changeEdit = () => {
        props.setEdit(props.user.id);
    }

    const deleteUser = () => {
        props.deleteUser(props.user.id);
    }
    return(
        <div className={style.user}>
            <div className={style.text}>
            {props.user.email}
            </div>
            <div>
                <button onClick={changeEdit}>Edit</button>
                <button onClick={deleteUser}>Delete</button>
            </div>
        </div>
    )
}

export default User;