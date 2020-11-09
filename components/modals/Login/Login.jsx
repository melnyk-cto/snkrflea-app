// core
import React from 'react'

// library
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatch, useSelector } from "react-redux";

// components
import { loginSchema } from '../../../schemas/index';
import { SocialButton } from '../../SocialButton/SocialButton'
import { ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

import {
    getAuthorizedErrorState
} from "../../../redux/auth/selectors";

import {
    USER_SIGN_IN_BY_EMAIL_REQUEST,
    USER_SIGN_IN_BY_FACEBOOK_REQUEST
} from "../../../redux/auth/sagas";

// assets
import styles from './Login.module.scss'
import { generalActions } from "../../../redux/general/actions";

export const Login = () => {
    const dispatch = useDispatch();
    const showUnathorizedError = useSelector(getAuthorizedErrorState);
    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));
    const setShowLogin = (state) => dispatch(authActions.showLoginModal(state));
    const setUnathorizedError = (state) => dispatch(authActions.userUnauthorizedError(state));
    const showLoading = (state) => dispatch(generalActions.showLoading(state));


    const responseFacebook = (response) => {
        const {accessToken} = response;
        dispatch({type: USER_SIGN_IN_BY_FACEBOOK_REQUEST, payload: accessToken});
    };

    // const responseGoogle = (response) => {
    //     console.log(response);
    // };

    return (
        <ModalLayout
            maxWidth='649px'
            showPopup={setShowLogin}>
            <div className={styles.popupRight}>
                <h1>Login
                    <p onClick={() => {
                        setShowLogin(false);
                        setShowPlans(true);
                    }}
                       className={styles.create}>
                        Create an account
                    </p>
                </h1>
                {showUnathorizedError ? <p className='error ta-c'>User Not Found</p> : null}
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={loginSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch({type: USER_SIGN_IN_BY_EMAIL_REQUEST, payload: values});
                        setSubmitting(false);
                        showLoading(true);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form onChange={() => setUnathorizedError(false)}
                        >
                            <label>
                                <span>Password</span>
                                <Field type="email" name="email" placeholder='Enter Email' />
                                <ErrorMessage className='error' name="email" component="div" />
                            </label>
                            <label>
                                <span>Password</span>
                                <Field type="password" name="password" placeholder='Password' />
                                <ErrorMessage className='error' name="password" component="div" />
                            </label>
                            <button type="submit" className={classNames('btn-second', styles.continue)}
                                    disabled={isSubmitting}>Continue
                            </button>
                            <p className={styles.signUp}>Or continue with</p>
                            <div className={styles.buttons}>
                                <FacebookLogin
                                    appId="365357578072889"
                                    autoLoad={false}
                                    callback={responseFacebook}
                                    render={renderProps => (
                                        <SocialButton
                                            onClick={renderProps.onClick}
                                            styles={styles.facebook}
                                            iconClasses={"fab fa-facebook-f"}
                                            buttonText={"Facebook"} />
                                    )}
                                />
                                <SocialButton styles={styles.google}
                                              iconClasses={"fab fa-facebook-f"}
                                              buttonText={"Google"}
                                              onClick={() => {
                                                  window.location.href = "http://localhost:4000/api/auth/google";
                                              }} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </ModalLayout>
    )
};