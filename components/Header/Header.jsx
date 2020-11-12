// core
import React, { useEffect, useState, } from 'react'

// library
import Link from 'next/link'
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { useRouter } from "next/router";

// components
import { routes } from '../../constants/routes';
import { authActions } from "../../redux/auth/actions";

// assets
import styles from './Header.module.scss'

export const Header = ({user = null}) => {
    const router = useRouter();

    const [isLogin, setIsLogin] = useState('Log out');

    const dispatch = useDispatch();

    const setShowLogin = (state) => dispatch(authActions.showLoginModal(state));
    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));

    useEffect(() => {
        if (user !== null) {
            setIsLogin('Log out');
        } else {
            setIsLogin('Login');
        }
    }, [user]);

    return (
        <header className={styles.header}>
            <div className={styles.navWrapper}>
                <div className={styles.navTop}>
                    <Link href={!user ? routes.home : routes.marketplace}>
                        <a className={styles.navLogo}>
                            <img src='/icons/logo.svg' alt='' />
                        </a>
                    </Link>
                    <div className={styles.search}>
                        <img src='/icons/search.svg' alt='' />
                    </div>
                </div>
                <div className={styles.navItems}>
                    {isLogin === 'Log out' ? <>
                            <Link href={routes.selling}>
                                <a className={classNames(styles.menuItem, {[styles.active]: (router.pathname === routes.selling || router.pathname === routes.purchases || router.pathname === routes.membership)})}>
                                    Account
                                </a>
                            </Link>
                        </>
                        : <>
                            <Link href={routes.home}>
                                <a onClick={(e) => {
                                    setShowLogin(true);
                                    e.preventDefault()
                                }}
                                   className={styles.menuItem}
                                >
                                    {isLogin}
                                </a>
                            </Link>
                            <Link href={routes.home}>
                                <a
                                    onClick={(e) => {
                                        setShowPlans(true);
                                        e.preventDefault()
                                    }}
                                    className={styles.menuItem}
                                >
                                    Join
                                </a>
                            </Link>
                        </>}
                    <Link href={routes.marketplace}>
                        <a className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.marketplace})}>
                            Buy
                        </a>
                    </Link>
                    <Link href={routes.premium}>
                        <a className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.premium})}>
                            Premium
                        </a>
                    </Link>
                    <Link href={routes.productList}>
                        <a
                            onClick={(e) => {
                                if (!user) {
                                    setShowPlans(true);
                                    e.preventDefault()
                                }
                            }}
                            className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.productList})}>
                            Sell
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
};

