// core
import React, { useState } from 'react'

// library
import PropTypes from "prop-types";
import classNames from "classnames";

// components
import { ModalLayout } from "../../../components";

// assets
import styles from './Login.module.scss'

export const Login = ({onSuccess, setShowLogin, setShowRegister}) => {
    const [errorMessage, setErrorMessage] = useState(false);
    return (
        <ModalLayout
            maxWidth='649px'
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}>
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
                <form action=''>
                    {errorMessage &&
                    <p className="error">{errorMessage}</p>}
                    <label>
                        <span>Email</span>
                        <input type='text' placeholder='Enter Email' />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type='text' placeholder='Password' />
                    </label>
                    <button type="submit" className={classNames('btn-second', styles.continue)}>Continue</button>
                    <p className={styles.signUp}>Or continue with</p>
                    <div className={styles.buttons}>
                        <div className={styles.facebook}>
                            <button type="button" className="button">
                                <i className="fab fa-facebook-f" />
                                <span>Facebook</span>
                            </button>
                        </div>
                        <div className={styles.google}>
                            <button type="button" className='button'>
                                <i className="fab fa-google" />
                                <span>Google</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </ModalLayout>
    )
};


Login.propTypes = {
    onSuccess: PropTypes.func.isRequired,
};
