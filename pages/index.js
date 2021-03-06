// core
import React, { useEffect, useState } from 'react'

// library
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// components
import { routes } from "../constants/routes";
import { Layout, Loading } from "../components";

// assets
import styles from '../styles/Home.module.scss'
import classNames from "classnames";
import { authActions } from "../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUserState } from "../redux/auth/selectors";
import { useRouter } from "next/router";

const Home = () => {
    SwiperCore.use([Autoplay]);

    const router = useRouter();

    const dispatch = useDispatch();


    const [redirect, setRedirect] = useState(true);

    const user = useSelector(getUserState);

    useEffect(() => {
        if (user) {
            router.push(routes.marketplace);
            setRedirect(true);
        } else {
            setRedirect(false);
        }
    }, []);


    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));
    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));

    return (
        <Layout>
            {!redirect ? <section className={styles.home}>
                <div className={classNames(styles.slider, 'home-slider')}>
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
                        <SwiperSlide>
                            <div className={styles.slideImage}>
                                <img src='/images/home/slider/jacket.png' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slideImage}>
                                <img src='/images/home/slider/boots.png' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slideImage}>
                                <img src='/images/home/slider/jacket.png' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slideImage}>
                                <img src='/images/home/slider/boots.png' alt='' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="container">
                    <div className={styles.homeInner}>
                        <h1>Buy and sell all your items <span>100% FREE</span></h1>
                        <ul className={styles.list}>
                            <li>
                                Become a PREMIUM MEMBER and get access to HUNDREDS of discount links
                            </li>
                            <li>
                                Real-time alerts on discounts and restocks from
                                <img src='/images/home/kith.jpg' alt='' />,
                                <img src='/images/home/amazon.jpg' alt='' />, and 56 sites
                            </li>
                            <li>
                                Upload unlimited items for sale or trade
                            </li>
                            <li>
                                Never pay a buyer or seller fee again
                            </li>
                        </ul>
                        <div className={styles.bottom}>
                            <div className={styles.buttons}>
                                <button type='button'
                                        className='btn-primary'
                                        onClick={() => setShowRegister(true)}>
                                    Start selling for free
                                </button>
                                <button type='button'
                                        className='btn-second'
                                        onClick={() => setShowPlans(true)}>
                                    Become a premium member
                                </button>
                            </div>
                            <div className={styles.info}>
                                <img src='/images/home/paypal.jpg' alt='' />
                                <img src='/icons/home/secure.svg' alt='' />
                                <p>
                                    Paypal protection for buyers <br />
                                    and sellers.
                                    <Link href={routes.home}>
                                        <a> Learn more</a>
                                    </Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> : <Loading />}
        </Layout>
    )
};

export default Home
