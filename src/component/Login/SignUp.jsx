import React from "react";
import {connect} from "react-redux";
import { Form, Field } from 'react-final-form'
import {signUp} from "../../Redux/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import style from './Sign.module.css'

function SignUp(props) {
    const onSubmit = (formData) => {
        debugger;
        props.signUp(formData.email, formData.password, formData.isAdmin);
    };
    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        if (!values.isAdmin) {
            errors.isAdmin = 'Required'
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
                initialValues={{ isAdmin: 'false' }}
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
                        <div>
                            <label>Is Admin</label>
                            <div>
                                <label>
                                    <Field
                                        name="isAdmin"
                                        component="input"
                                        type="radio"
                                        value="true"
                                    />{' '}
                                    True
                                </label>
                                <label>
                                    <Field
                                        name="isAdmin"
                                        component="input"
                                        type="radio"
                                        value="false"
                                    />{' '}
                                    False
                                </label>
                            </div>
                        </div>

                        <button className={style.button} type="submit">Sign Up</button>
                    </form>
                )}/>
            <div ><NavLink to={'/login'} >Login</NavLink></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signUp})(SignUp);