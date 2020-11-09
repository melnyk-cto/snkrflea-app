// core
import React  from 'react'

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
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/auth/actions";
import { generalActions } from "../../../redux/general/actions";
import { getAuthAlreadyErrorState, getUserState } from "../../../redux/auth/selectors";
import { signUpByEmail } from "../../../api/actions";

import {
    USER_SIGN_IN_BY_EMAIL_REQUEST
} from "../../../redux/auth/sagas";

export const RegisterPremium = ({classname}) => {
    const dispatch = useDispatch();

    const user = useSelector(getUserState);
    const showUserAlreadyError = useSelector(getAuthAlreadyErrorState);


    const setShowRegisterPremium = (state) => dispatch(authActions.showRegisterPremiumModal(state));
    const showLoading = (state) => dispatch(generalActions.showLoading(state));
    const setUserAlreadyError = (state) => dispatch(authActions.userAlreadyError(state));

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


    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegisterPremium}
            classname={classname}>
            <ModalDescription
                premium={true}
                title='Premium'
                subTitle='$99/month'
            />
            {!user ?
                <div className={styles.popupRight}>
                    <h1>Create your account</h1>
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
                                    <Field type="checkbox" />
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
                    <img src='/icons/boots.svg' alt='' />
                    <h3>Your payment was successful</h3>
                    <button type='button' className='btn-primary'>View my premium links</button>
                </div>}
        </ModalLayout>
    )
};
