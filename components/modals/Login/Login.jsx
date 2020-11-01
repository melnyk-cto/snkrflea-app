// core
import React, { useState } from 'react'

// library
// import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { loginSchema } from '../../../schemas/index';
import { SocialButton } from '../../SocialButton'
// assets
import styles from './Login.module.scss'
import classNames from "classnames";

export const Login = ({onSuccess, setShowLogin, setShowRegister}) => {
    const responseFacebook = (response) => {
        console.log(response);
      }

    const responseGoogle = (response) => {
        console.log(response);
        
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <span onClick={() => {
                    setShowLogin(false);
                    setShowRegister(false)
                }} className={styles.close} />
                <div className={styles.popupRight}>
                    <div className={styles.title}>
                        <h1>Login</h1>
                        <p onClick={() => {
                            setShowLogin(false);
                            setShowRegister(true)
                        }}
                           className={styles.create}>
                            Create an account
                        </p>
                    </div>
                    <div>
                <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 4000);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" 
                            className={classNames('btn-second', styles.continue)} 
                            disabled={isSubmitting}>
                            Continue
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
                                         styles={styles.google} 
                                         iconClasses={"fab fa-facebook-f"} 
                                         buttonText={"Facebook"}  />
                                )}  
                                />
                                <SocialButton  styles={styles.google} 
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
                </div>
            </div>
        </div>
    )
};

