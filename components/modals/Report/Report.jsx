// core
import React from 'react'

// library
import classNames from "classnames";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";

// components
import { reportSchema } from '../../../schemas/index';
import { ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

// assets
import styles from './Report.module.scss'

export const Report = () => {
    const dispatch = useDispatch();
    const setShowReport = (state) => dispatch(authActions.showReportModal(state));

    return (
        <ModalLayout
            maxWidth='649px'
            showPopup={setShowReport}>
            <div className={styles.popupRight}>
                <h1>Report this post</h1>
                <Formik
                    initialValues={{reason: '', comments: ''}}
                    validationSchema={reportSchema}
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
                                <span>Select reason</span>
                                <Field as="select" name="reason">
                                    <option selected disabled>Select option*</option>
                                    <option value="Fake listing">Fake listing</option>
                                    <option value="Controversial">Controversial</option>
                                    <option value="Scam">Scam</option>
                                </Field>
                                <ErrorMessage className='error' name="help" component="div" />
                            </label>
                            <label>
                                <span>Additional comments</span>
                                <Field type='text' name="comments"
                                       placeholder='This post is trying to sell a shoe that doesn’t even exist' />
                                <ErrorMessage className='error' name="comments" component="div" />
                            </label>
                            <button type="submit"
                                    className={classNames('btn-second', styles.continue)}
                                    disabled={isSubmitting}>
                                Submit report
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </ModalLayout>
    )
};