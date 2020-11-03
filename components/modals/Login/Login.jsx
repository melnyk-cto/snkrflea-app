// core
import React from 'react'

// library
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatch } from "react-redux";

// components
import { loginSchema } from '../../../schemas/index';
import { SocialButton } from '../../SocialButton/SocialButton'
import { ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

// assets
import styles from './Login.module.scss'

export const Login = () => {
    const dispatch = useDispatch();
    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));
    const setShowLogin = (state) => dispatch(authActions.showLoginModal(state));

    const responseFacebook = (response) => {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <ModalLayout
            maxWidth='649px'
            showPopup={setShowLogin}>
            <div className={styles.popupRight}>
                <h1>Login
                    <p onClick={() => {
                        setShowLogin(false);
                        setShowRegister(true);
                    }}
                       className={styles.create}>
                        Create an account
                    </p>
                </h1>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={loginSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 4000);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
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
                                    appId="799782497476434"
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