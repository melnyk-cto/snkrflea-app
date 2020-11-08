// core
import React from 'react'

// library
import Link from 'next/link'
import { useDispatch } from "react-redux";

// components
import { routes } from '../../constants/routes';
import { authActions } from "../../redux/auth/actions";

// assets
import styles from './Header.module.scss'

export const Header = () => {
    const dispatch = useDispatch();

    const setShowLogin = (state) => dispatch(authActions.showLoginModal(state));
    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));

    return (
        <header className={styles.header}>
            <div className={styles.navWrapper}>
                <div className={styles.navTop}>
                    <Link href={routes.home}>
                        <a className={styles.navLogo}>
                            <img src='/icons/logo.svg' alt='' />
                        </a>
                    </Link>
                    <div className={styles.search}>
                        <img src='/icons/search.svg' alt='' />
                    </div>
                </div>
                <div className={styles.navItems}>
                    {/*<Link href={routes.selling}>*/}
                    {/*    <a className={styles.menuItem}>*/}
                    {/*        Account*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    <Link href={routes.home}>
                        <a onClick={(e) => {
                            setShowLogin(true);
                            e.preventDefault()
                        }}
                           className={styles.menuItem}
                        >
                            Login
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
                    <Link href={routes.marketplace}>
                        <a className={styles.menuItem}>
                            Buy
                        </a>
                    </Link>
                    <Link href={routes.premium}>
                        <a className={styles.menuItem}>
                            Premium
                        </a>
                    </Link>
                    <Link href={routes.productList}>
                        <a
                            onClick={(e) => {
                                setShowPlans(true);
                                e.preventDefault()
                            }}
                            className={styles.menuItem}>
                            Sell
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
};

