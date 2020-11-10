// core
import React, { useState } from 'react'

// components
import {  Layout } from "../components";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from "react-redux";
import { productSchema } from '../schemas/index'
// assets
import styles from '../styles/ProductList.module.scss'

import {
    ADD_NEW_PRODUCT_REQUEST
} from "../redux/products/sagas";

const ProductList = () => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);

   const [images, setImages] = useState({});

    return (
        <Layout>
            <section className={styles.product}>
                <div className="container">
                    {!success ? <div className={styles.productInner}>
                            <h1>List your product</h1>
                            <Formik
                                initialValues={{title: '', description: '', price: 0}}
                                validationSchema={productSchema}
                                onSubmit={async (values) => {
                                    dispatch({type: ADD_NEW_PRODUCT_REQUEST, payload: {...values, images}})
                                }}>
                                {({isSubmitting}) => (
                                    <Form>
                                        <label>
                                            <span>Title</span>
                                            <Field type="text" name="title" placeholder='Title' />
                                            <ErrorMessage className='error' name="title" component="div" />
                                        </label>
                                        <label>
                                            <span>Description</span>
                                            <Field type="textarea" component="textarea" name="description"
                                                   placeholder='Description' />
                                            <ErrorMessage className='error' name="description" component="div" />
                                        </label>
                                        <label>
                                            <span>Price</span>
                                            <Field type="number" name="price" placeholder='Title' />
                                            <ErrorMessage className='error' name="price" component="div" />
                                        </label>
                                        <label>
                                            <span>Photos</span>
                                            <input type="file" multiple onChange={(e) => {
                                                setImages(e.target.files)
                                            }} />
                                        </label>
                                        <button type="submit" className='btn-second' disabled={isSubmitting}>Continue
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        : <div className={styles.success}>
                            <h1>Congratulations on creating your listing!</h1>
                            <h3 className={styles.subTitle}>Now share your product to start getting purchases</h3>
                            <img src='/images/home/slider/boots.png' alt='' />
                            <h3>Dunk High SP Retro 'Michigan' 2020</h3>
                            <button type='button' className='btn-primary'>List another product</button>
                            <button type='button' className='btn-second'>View product on the marketplace</button>
                        </div>}
                </div>
            </section>
        </Layout>
    )
};

export default ProductList
