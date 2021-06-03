import React from "react";
import {connect} from "react-redux";
import { Form, Field } from 'react-final-form'
import {login} from "../../Redux/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import style from './Sign.module.css'

function Login(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password);
    };
    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type="text" placeholder="Email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="text" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>

                    <button id="submitBtn" className={style.button} type="submit">Login</button>
                </form>
            )}/>
            <div ><NavLink to={'/signup'} >Sign Up</NavLink></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);