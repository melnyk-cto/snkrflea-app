// core
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

// library
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import classNames from "classnames";

// components
import { Layout } from "../../../components";
import {
    getSelectedItem
} from "../../../redux/products/selectors";
import {
    GET_PRODUCT_ITEM_REQUEST
} from "../../../redux/products/sagas";

// assets
import styles from '../../../styles/Product.module.scss'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { checkoutSchema } from "../../../schemas";
import { routes } from "../../../constants/routes";

const Product = () => {
    const dispatch = useDispatch();
    const product = useSelector(getSelectedItem);
    const router = useRouter();
    const {product_id} = router.query;

    SwiperCore.use([Pagination, Navigation]);

    useEffect(() => {
        if (product_id !== undefined) {
            dispatch({type: GET_PRODUCT_ITEM_REQUEST, payload: product_id})
        }
    }, [product_id]);

    return (
        <Layout>
            <section className={classNames(styles.product, styles.checkout)}>
                {product ? <div className="container">
                    <div className={styles.productInner}>
                        {/*<Link href={routes.marketplace}>*/}
                        {/*    <a className={styles.breadCrumbs}>Back to marketplace</a>*/}
                        {/*</Link>*/}
                        <div className={classNames(styles.productLeft, 'product-slider', 'checkout-slider')}>
                            <Swiper
                                navigation={{clickable: true}}
                                pagination={{clickable: true}}
                                slidesPerView={1}
                                loop={true}
                                clickable='true'>
                                {product.images.map((img, index) => (
                                    <SwiperSlide key={index}><img src={img.url} alt='' /></SwiperSlide>
                                ))}
                            </Swiper>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <div className={styles.buttons}>
                                <h3>${product.price}</h3>
                                <button type='button' className='btn-second'>Buy Now</button>
                            </div>
                            <div className={styles.seller}>
                                <h6>Seller</h6>
                                <div className={styles.image}>
                                    <img src='/images/user.png' alt='' />
                                </div>
                                <div className={styles.info}>
                                    <h6>{product?.vendor?.store?.name}</h6>
                                    <Link href=''><a>24 items for sale</a></Link>
                                </div>
                                <div className={styles.links}>
                                    <Link href=''><a>Contact seller</a></Link>
                                    <img src='/icons/instagram.svg' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.productRight}>
                            <div className={styles.checkout}>
                                <h3>Checkout</h3>
                                <Formik
                                    initialValues={{name: '', address: '', state: '', city: '', zip: ''}}
                                    validationSchema={checkoutSchema}
                                    onSubmit={(values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            alert(values);
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
                                                <span>Address</span>
                                                <Field type="text" name="address" placeholder='Enter Address' />
                                                <ErrorMessage className='error' name="address" component="div" />
                                            </label>
                                            <label>
                                                <span>State</span>
                                                <Field type="text" name="state" placeholder='Enter State' />
                                                <ErrorMessage className='error' name="state" component="div" />
                                            </label>
                                            <label>
                                                <span>City</span>
                                                <Field type="text" name="city" placeholder='Enter City' />
                                                <ErrorMessage className='error' name="city" component="div" />
                                            </label>
                                            <label>
                                                <span>ZIP Code</span>
                                                <Field type="number" name="zip" placeholder='Enter ZIP Code' />
                                                <ErrorMessage className='error' name="zip" component="div" />
                                            </label>
                                            <button type="submit"
                                                    className={classNames('btn-second', styles.continue)}
                                                    disabled={isSubmitting}>
                                                PayPal
                                            </button>
                                            <label className="checkbox">
                                                <Field type="checkbox" name="privacy" />
                                                <ErrorMessage className='error' name="privacy" component="div" />
                                                <span className="checkmark" />
                                                <p>
                                                    Save my information for faster checkout and to view your
                                                    purchases. <Link href={routes.privacy}><a>Learn more</a></Link>
                                                </p>
                                            </label>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div> : null}
            </section>
        </Layout>
    )
};

export default Product
