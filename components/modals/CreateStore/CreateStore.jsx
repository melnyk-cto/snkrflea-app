// core
import React, { useState } from 'react'

// library
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";

// components
import { storeSchema } from '../../../schemas/index';
import { ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";


// assets
import styles from './CreateStore.module.scss'
import Link from "next/link";

export const CreateStore = ({classname}) => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [signUpError, setSignUpError] = useState(false);

    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));

    function handleErrors(response) {
        if (!response.ok) {
            setSignUpError(true);
            throw Error(response.statusText);
        }
        return response;
    }


    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowRegister}
            classname={classname}>
            <h1 className={styles.title}>Create your store</h1>
            {!success ?
                <>
                    <div className={styles.popupRight}>
                        {signUpError ? <p>Error</p> : null}
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                tikTok: '',
                                instagram: '',
                                twitter: '',
                                address: '',
                                apt: '',
                            }}
                            validationSchema={storeSchema}
                            onSubmit={(values, {setSubmitting}) => {
                                setSubmitting(false);
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <div className={styles.avatar}>
                                        <img src='/icons/avatar.svg' alt='' />
                                    </div>
                                    <label>
                                        <span>Store Name</span>
                                        <Field type="text" name="name" placeholder='Enter Name' />
                                        <ErrorMessage className='error' name="name" component="div" />
                                    </label>
                                    <h6>
                                        Connect your Paypal for get paid instantly
                                    </h6>
                                    <button type="button"
                                            className={classNames('btn-second', styles.payPal)}>
                                        PayPal
                                    </button>
                                    <p className={styles.noPayPal}>
                                        No paypal? No worries! Your customers can contact you via email or social
                                        profiles
                                        by entering below
                                    </p>
                                    <label>
                                        <span>Contact email</span>
                                        <Field type="email" name="email" placeholder='Enter Email' />
                                        <ErrorMessage className='error' name="email" component="div" />
                                    </label>
                                    <label>
                                        <span>TikTok username</span>
                                        <Field type="text" name="tikTok" placeholder='Enter TikTok' />
                                        <ErrorMessage className='error' name="tikTok" component="div" />
                                    </label>
                                    <label>
                                        <span>Instagram Username</span>
                                        <Field type="text" name="instagram" placeholder='Enter Instagram' />
                                        <ErrorMessage className='error' name="instagram" component="div" />
                                    </label>
                                    <label>
                                        <span>Twitter Username</span>
                                        <Field type="text" name="twitter" placeholder='Enter Twitter' />
                                        <ErrorMessage className='error' name="twitter" component="div" />
                                    </label>
                                    <label>
                                        <span>Shipping Address</span>
                                        <Field type="text" name="address" placeholder='Enter Address' />
                                        <ErrorMessage className='error' name="address" component="div" />
                                    </label>
                                    <label>
                                        <span>Apt # / Building No.</span>
                                        <Field type="text" name="apt" placeholder='Enter Apt' />
                                        <ErrorMessage className='error' name="apt" component="div" />
                                    </label>
                                    <button type="submit"
                                            className={classNames('btn-second', styles.continue)}
                                            disabled={isSubmitting}>
                                        Continue
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className={styles.popupLeft}>
                        <ul>
                            <li>
                                <img src='/icons/infinity.svg' alt='' />
                                <span>
                                    Paypal protection for buyers <br />
                                and sellers. <Link href=''><a>Learn more</a></Link>
                                </span>
                            </li>
                            <li>
                                <img src='/icons/infinity.svg' alt='' />
                                <span>
                                    Upload unlimited <br />
                                items for sale
                                </span>
                            </li>
                            <li>
                                <img src='/icons/store.svg' alt='' />
                                <span>
                                    Your own store with a <br />
                                unique link
                                </span>
                            </li>
                            <li>
                                <img src='/icons/fist.svg' alt='' />
                                <span>
                                    Never pay a commission <br />
                                or seller fee
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
                : <div className={styles.success}>
                    <img src='/icons/boots.svg' alt='' />
                    <h2>Congratulations on creating your store!</h2>
                </div>}
        </ModalLayout>
    )
};
