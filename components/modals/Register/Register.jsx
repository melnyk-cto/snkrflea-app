// core
import React, { useState } from 'react'

// library
import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames'

// components
import { routes } from "../../../constants/routes";
import { ModalLayout } from "../../../components";

// assets
import styles from './Register.module.scss'

export const Register = ({onSuccess, setShowLogin, setShowRegister}) => {
    const [errorMessage, setErrorMessage] = useState(false);
    return (
        <ModalLayout
            maxWidth='1301px'
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}>
            <div className={styles.popupLeft}>
                <h3>Starter <span>Free</span></h3>
                <ul>
                    <li>
                        <Link href={routes.home}><a>Open your own store</a></Link>
                    </li>
                    <li>
                        <Link href={routes.home}><a>Upload unlimited items for sale</a></Link>
                    </li>
                    <li>
                        <Link href={routes.home}><a>Never pay a commission or seller fee</a></Link>
                    </li>
                    <li>
                        <Link href={routes.home}><a>Link your paypal</a></Link>
                    </li>
                    <li>
                        <Link href={routes.home}><a>Get a custom link for your store</a></Link>
                    </li>
                </ul>
            </div>
            <div className={styles.popupRight}>
                <h1>Create your account</h1>
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
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <p>
                            By creating an account, you agree to the <a href={routes.privacy}>Terms and
                            Conditions</a> and <a href={routes.privacy}>Privacy Policy</a>
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

Register.propTypes = {
    onSuccess: PropTypes.func.isRequired,
};
