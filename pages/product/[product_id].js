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
import { Layout } from "../../components";
import {
    getSelectedItem
} from "../../redux/products/selectors";
import {
    GET_PRODUCT_ITEM_REQUEST
} from "../../redux/products/sagas";

// assets
import styles from '../../styles/Product.module.scss'

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
            <section className={styles.product}>
                {product ? <div className="container">
                    <div className={styles.productInner}>
                        <div className={classNames(styles.productLeft, 'product-slider')}>
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
                            <div className={styles.add}>
                                <h1>AD</h1>
                            </div>
                        </div>
                        <div className={styles.productRight}>
                            <h1>{product.title}</h1>
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
                            <div className={styles.payPal}>
                                <img src='/images/home/paypal.jpg' alt='' />
                                <div className={styles.info}>
                                    <h6>100% Purchase protected with Paypal</h6>
                                    <p>
                                        Orders that never arrive, inauthentic items, and items not described will be
                                        refunded - your satisfaction guaranteed
                                    </p>
                                    <Link href=''><a>Learn more</a></Link>
                                </div>
                            </div>
                            <Link href=''><a>Report this post</a></Link>
                        </div>
                    </div>
                </div> : null}
            </section>
        </Layout>
    )
};

export default Product
