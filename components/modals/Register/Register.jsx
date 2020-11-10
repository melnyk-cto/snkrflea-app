// core
import React, { useEffect, useState } from 'react'

// library
// import PropTypes from 'prop-types'
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";

// components
import { registerSchema } from '../../../schemas/index';
import { SocialButton } from '../../SocialButton/SocialButton'
import { ModalDescription, ModalLayout } from "../../../components";
import { routes } from "../../../constants/routes";
import { authActions } from "../../../redux/auth/actions";

import { signUpByEmail } from '../../../api/actions.js'

import {
    getAuthAlreadyErrorState,
    getPlan,
    getUserState
} from "../../../redux/auth/selectors";

import {
    GET_PLAN_REQUEST,
    USER_SIGN_IN_BY_EMAIL_REQUEST
} from "../../../redux/auth/sagas";

// assets
import styles from './Register.module.scss'
import { generalActions } from "../../../redux/general/actions";

export const Register = ({classname}) => {
    const dispatch = useDispatch();
    const user = useSelector(getUserState);
    const showUserAlreadyError = useSelector(getAuthAlreadyErrorState);

    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));
    const setShowCreateStore = (state) => dispatch(authActions.showCreateStoreModal(state));
    const setShowLogin = (state) => dispatch(authActions.showLoginModal(state));
    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));
    const setUserAlreadyError = (state) => dispatch(authActions.userAlreadyError(state));
    const showLoading = (state) => dispatch(generalActions.showLoading(state));

    const responseFacebook = (response) => {
        console.log(response);
    };

    // const responseGoogle = (response) => {
    //     console.log(response);
    // };

    function handleErrors(response) {
        if (!response.ok) {
            showLoading(false);
            setUserAlreadyError(true);
            throw Error(response.statusText);
        }
        return response;
    }


    const [showUser, setShowUser] = useState();
    const getPlans = useSelector(getPlan);

    useEffect(() => {
        if (user !== null) {
            setShowUser(true);
        } else {
            setShowUser(false);
        }
    }, [user]);

    useEffect(() => {
        dispatch({type: GET_PLAN_REQUEST})
    }, [getPlans]);
    console.log('getPlans',getPlans);

    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegister}
            classname={classname}>
            <span className={styles.back} onClick={() => {
                setShowPlans(true);
                setShowRegister(false)
            }}>
                Back
                </span>
            <ModalDescription
                title='Starter'
                subTitle='Free' />
            {!showUser ?
                <div className={styles.popupRight}>
                    <h1>
                        Create your account
                        <span className={styles.login} onClick={() => {
                            setShowLogin(true);
                            setShowRegister(false)
                        }}>
                    Login
                </span>
                    </h1>
                    {showUserAlreadyError ? <p className='error ta-c'>This user is already registered</p> : null}
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={registerSchema}
                        onSubmit={async (values, {setSubmitting}) => {
                            setSubmitting(false);
                            showLoading(true);
                            await signUpByEmail({...values})
                                .then(handleErrors)
                                .then(d => d.json())
                                .then(() => {
                                    dispatch({type: USER_SIGN_IN_BY_EMAIL_REQUEST, payload: values});
                                })
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form onChange={() => setUserAlreadyError(false)}>
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
                    <img src='/icons/boots.svg' alt='' />
                    <h3>Your account was <br /> successfully created!</h3>
                    <button type='button' className='btn-second' onClick={() => {
                        setShowRegister(false);
                        setShowCreateStore(true);
                    }}>Create my store
                    </button>
                </div>}
        </ModalLayout>
    )
};
