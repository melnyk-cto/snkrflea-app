// core
import React from 'react'

// library
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";

// components
import { contactSchema } from '../../../schemas/index';
import { ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

// assets
import styles from './Contact.module.scss'

export const Contact = () => {
    const dispatch = useDispatch();
    const setShowContact = (state) => dispatch(authActions.showContactModal(state));

    return (
        <ModalLayout
            maxWidth='649px'
            showPopup={setShowContact}>
            <div className={styles.popupRight}>
                <h1>Get in touch</h1>
                <Formik
                    initialValues={{name: '', email: '', help: ''}}
                    validationSchema={contactSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 2000);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <label>
                                <span>Name</span>
                                <Field type="text" name="name" placeholder='Enter Name' />
                                <ErrorMessage className='error' name="name" component="div" />
                            </label>
                            <label>
                                <span>Email</span>
                                <Field type="email" name="email" placeholder='Enter Email' />
                                <ErrorMessage className='error' name="email" component="div" />
                            </label>
                            <label>
                                <span>Reason for contact</span>
                                <Field as="select" name="help">
                                    <option disabled>Need help</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </Field>
                                <ErrorMessage className='error' name="help" component="div" />
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
        </ModalLayout>
    )
};