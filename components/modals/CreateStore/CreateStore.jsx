// core
import React, { useState } from 'react'

// library
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";

// components
import { registerSchema } from '../../../schemas/index';
import { ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

import { signUpByEmail } from '../../../api/actions.js'

import {
    USER_SIGN_IN_BY_EMAIL_REQUEST
} from "../../../redux/auth/sagas";

// assets
import styles from './CreateStore.module.scss'

export const CreateStore = ({classname}) => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [signUpError, setSignUpError] = useState(false);

    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));

    function handleErrors(response) {
        if (!response.ok) {
            setSignUpError(true);
            throw Error(response.statusText);
        }
        return response;
    }


    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegister}
            classname={classname}>
            {!success ?
                <div className={styles.popupRight}>
                    <h1>Create your store</h1>
                    {signUpError ? <p>Error</p> : null}
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={registerSchema}
                        onSubmit={async (values, {setSubmitting}) => {
                            setSubmitting(false);
                            await signUpByEmail({...values, productId: 'price_1HiLerDRG7cpN5KtDWBJXisO'})
                                .then(handleErrors)
                                .then(d => d.json())
                                .then(() => {
                                    dispatch({type: USER_SIGN_IN_BY_EMAIL_REQUEST, payload: values});
                                })
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <label>
                                    <span>Email</span>
                                    <Field type="email" name="email" placeholder='Enter Email' />
                                    <ErrorMessage className='error' name="email" component="div" />
                                </label>
                                <label>
                                    <span>Password</span>
                                    <Field type="password" name="password" placeholder='Password' />
                                    <ErrorMessage className='error' name="password" component="div" />
                                </label>
                                <button type="submit"
                                        className={classNames('btn-second', styles.continue)}
                                        disabled={isSubmitting}>
                                    Continue
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                : <div className={styles.success}>
                    <img src='/icons/boots.svg' alt='' />
                    <h3>Your account was <br /> successfully created!</h3>
                    <button type='button' className='btn-second'>Create my store</button>
                </div>}

            <div>sdasda</div>

        </ModalLayout>
    )
};
