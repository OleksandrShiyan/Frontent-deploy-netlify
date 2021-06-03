import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import userPhoto from '../../assets/images/user.jpg'

function Header(props) {
    return (
        <header>
            <div className={style.wrapper}>
                {props.isAuth
                    ? <div>
                        <img className={style.user} src={userPhoto} alt="user"/>
                        <span className={style.login}>{props.email}</span>
                        <div>
                            <button className={style.item} onClick={props.logout}>Logout</button>
                        </div>
                    </div>
                    :  <div className={style.item}><NavLink to={'/login'}>Login</NavLink></div>
                }
                <div className={style.item}>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </div>
                {props.is_admin
                    ? <div>
                        <div className={style.item}><NavLink to={'/users'}>Users</NavLink></div>
                        <div className={style.item}><NavLink to={'/dashboard'}>Dashboard</NavLink></div>
                        <div className={style.item}><NavLink to={'/profiles'}>All Profiles</NavLink></div>
                    </div>
                    : null
                }
            </div>
        </header>
    )
}

export default Header;