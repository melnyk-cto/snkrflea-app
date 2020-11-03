// core
import React, { useState } from 'react'

// library
// import PropTypes from 'prop-types'
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Link from 'next/link'
import { useDispatch } from 'react-redux';

// components
import { registerSchema } from '../../../schemas/index';
import { SocialButton } from '../../SocialButton/SocialButton'
import { ModalDescription, ModalLayout } from "../../../components";
import { routes } from "../../../constants/routes";
import { authActions } from "../../../redux/auth/actions";

// assets
import styles from './Register.module.scss'

export const Register = () => {
    const dispatch = useDispatch();

    const [success, setSuccess] = useState(false);

    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));
    const setShowLogin = (state) => dispatch(authActions.showLoginModal(state));
    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));

    const responseFacebook = (response) => {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegister}>
            <span className={styles.back} onClick={() => {
                setShowPlans(true);
                setShowRegister(false)
            }}>
                Back
                </span>
            <ModalDescription
                title='Starter'
                subTitle='Free' />
            {!success ?
                <div className={styles.popupRight}>
                    <h1>
                        Create your account
                        <span className={styles.login} onClick={() => {
                            setShowLogin(true);
                            setShowRegister(false)
                        }}>
                    Login
                </span>
                    </h1> <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={registerSchema}
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
                            <label className="checkbox">
                                <Field type="checkbox" name="privacy" />
                                <span className="checkmark" />
                                <p>
                                    By creating an account, you agree to the
                                    <Link href={routes.privacy}><a>Terms and
                                        Conditions</a></Link> and <Link href={routes.privacy}><a>Privacy
                                    Policy</a></Link>
                                </p>
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
                : <div className={styles.success}>
                    <h3>Your account was <br /> successfully created!</h3>
                    <button type='button' className='btn-second'>Create my store</button>
                </div>}
        </ModalLayout>
    )
};
