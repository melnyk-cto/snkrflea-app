// core
import React, { useState, useEffect } from 'react'


// components
import { Layout } from "../components";

// assets
import styles from '../styles/Product.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import {
    getSelectedItem
} from "../redux/products/selectors";

import {
    GET_PRODUCT_ITEM_REQUEST
} from "../redux/products/sagas";

const Product = () => {
    const dispatch = useDispatch();
    const product = useSelector(getSelectedItem)

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_ITEM_REQUEST, payload: 1})
     }, []);
     
    return (
        <Layout>
            <section className={styles.product}>
           {product ? <div className="container">
                    <div className={styles.productInner}>
                        <div className={styles.productLeft}>
                        <Swiper
                        autoplay={{delay: 2000}}
                        speed={1000}
                        spaceBetween={20}
                        loopedSlides={4}
                        slidesPerView={1}
                        loop={true}
                        clickable='true'
                        breakpoints={{
                            567: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                      {product.images
                      .map((img) => 
                      (<SwiperSlide>
                          <div className={styles.slideImage}>
                             <img src={img.url} alt='' />
                        </div>
                        </SwiperSlide>))}  
                      </Swiper>
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
                                    <Link href=''><a><a>24 items for sale</a></a></Link>
                                </div>
                                <div className={styles.links}>
                                    <Link href=''><a>Contact seller</a></Link>
                                    <img src='/icons/instagram.svg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}     
            </section>
        </Layout>
    )
};

export default Product
