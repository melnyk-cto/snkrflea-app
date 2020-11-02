// core
import React, { useState } from 'react'

// library
// import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames'

// components
import { routes } from "../../../constants/routes";
import { ModalLayout } from "../../../components";

// assets
import styles from './Register.module.scss'

export const Register = ({setShowLogin, setShowRegister}) => {
    const [showDescription, setShowDescription] = useState(true);
    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegister}>
            <div className={styles.popupLeft}>
                <h3 onClick={() => setShowDescription(!showDescription)}
                    className={showDescription ? styles.show : ''}>Starter <span>Free</span></h3>
                {showDescription && <ul>
                    <li>Open your own store</li>
                    <li>Upload unlimited items for sale</li>
                    <li>Never pay a commission or seller fee</li>
                    <li>Link your paypal</li>
                    <li>Get a custom link for your store</li>
                </ul>}
            </div>
            <span className={styles.back} onClick={() => {
                setShowLogin(true);
                setShowRegister(false)
            }}>
                Back
                </span>
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
                <form action=''>
                    <label>
                        <span>Email</span>
                        <input type='text' placeholder='Enter Email' />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type='text' placeholder='Password' />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <p>
                            By creating an account, you agree to the
                            <Link href={routes.privacy}><a>Terms and
                                Conditions</a></Link> and <Link href={routes.privacy}><a>Privacy Policy</a></Link>
                        </p>
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
