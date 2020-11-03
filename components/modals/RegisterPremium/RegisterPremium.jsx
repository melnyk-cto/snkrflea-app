// core
import React, { useState } from 'react'

// library
// import PropTypes from 'prop-types'
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Link from 'next/link'

// components
import { registerSchema } from '../../../schemas/index';
import { SocialButton } from '../../SocialButton/SocialButton'
import { ModalDescription, ModalLayout } from "../../../components";
import { routes } from "../../../constants/routes";

// assets
import styles from './RegisterPremium.module.scss'
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/auth/actions";

export const RegisterPremium = () => {
    const dispatch = useDispatch();

    const [success, setSuccess] = useState(true);

    const setShowRegisterPremium = (state) => dispatch(authActions.showRegisterPremiumModal(state));

    const responseFacebook = (response) => {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegisterPremium}>
            <ModalDescription
                premium={true}
                title='Premium'
                subTitle='$99/month'
            />
            {!success ?
                <div className={styles.popupRight}>
                    <h1>Create your account</h1> <Formik
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
                                <ErrorMessage className={styles.error} name="email" component="div" />
                            </label>
                            <label>
                                <span>Password</span>
                                <Field type="password" name="password" placeholder='Password' />
                                <ErrorMessage className={styles.error} name="password" component="div" />
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
                            <button type="submit" className={classNames('btn-primary', styles.continue)}
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
                    <h3>Your payment was successful</h3>
                    <button type='button' className='btn-primary'>View my premium links</button>
                </div>}
        </ModalLayout>
    )
};
