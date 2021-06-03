import React from "react";
import style from "../../Profiles/EditProfileForms/EditForm.module.css"
import {Field, Form} from "react-final-form";

function EditUserForm(props) {
    const onSubmit = (formData) => {
        props.updateUser(props.user.id, formData.email, formData.password, formData.isAdmin);
        props.setEdit(false);
    };
    const validate = (values) => {
        const errors = {}
        if (!values.password) {
            errors.password = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.isAdmin) {
            errors.isAdmin = 'Required'
        }
        return errors
    }

    const deleteEdit = () => {
        props.setEdit(false);
    }

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <Form
                    onSubmit={onSubmit}
                    initialValues={{ isAdmin: `${props.user.is_admin}`,email: `${props.user.email}`,
                        password: `${props.user.password}`}}
                    validate={validate}
                    render={({handleSubmit}) => (
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

                            <button type="submit">Submit</button>
                            {/*need to delete form without warnings*/}
                            <button onClick={deleteEdit}>Exit</button>
                        </form>
                    )}/>
            </div>
        </div>
    )

}

export default EditUserForm;