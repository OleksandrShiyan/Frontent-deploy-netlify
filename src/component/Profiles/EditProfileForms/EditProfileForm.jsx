import React from "react";
import style from "./EditForm.module.css"
import {Field, Form} from "react-final-form";

function EditProfileForm (props) {
    const onSubmit = (formData) => {
        props.updateProfile(formData.fullname, formData.sex, formData.birth, formData.city, props.profile.id, props.profile.user_id);
        props.setEdit(false);
    };
    const validate = (values) => {
        const errors = {}
        if (!values.fullname) {
            errors.fullname = 'Required'
        }
        if (!values.sex) {
            errors.sex = 'Required'
        }
        if (!values.birth) {
            errors.birth = 'Required'
        }
        if (!values.city) {
            errors.city = 'Required'
        }
        return errors
    }

    const deleteEdit = () =>{
        props.setEdit(false);
        //if setEdit is commented this field is counted as submit button(onClick={onSubmit} is used to this button)
    }

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
            <Form
                onSubmit={onSubmit}
                initialValues={{sex: `${props.profile.sex}`, fullname:`${props.profile.fullname}`,
                    birth:`${props.profile.birth}`, city:`${props.profile.city}`}}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field id="edtFullname" name="fullname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Username</label>
                                        <input {...input} type="text" placeholder="Full name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <label>Sex</label>
                            <div>
                                <label>
                                    <Field
                                        name="sex"
                                        component="input"
                                        type="radio"
                                        value="Male"
                                    />{' '}
                                    Male
                                </label>
                                <label>
                                    <Field
                                        name="sex"
                                        component="input"
                                        type="radio"
                                        value="Female"
                                    />{' '}
                                    Female
                                </label>
                            </div>
                        </div>
                        <div>
                            <Field name="birth">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Birth</label>
                                        <input {...input} type="text" placeholder="Birth" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name="city">
                                {({ input, meta }) => (
                                    <div>
                                        <label>City</label>
                                        <input {...input} type="text" placeholder="City" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>

                        <button id="edtSbmBtn" type="submit">Submit</button>
                        {/*need to delete form without warnings*/}
                        <button id="edtDltBtn" onClick={deleteEdit}>Exit</button>
                    </form>
                )}/>
            </div>
        </div>
    )

}

export default EditProfileForm;