// core
import React from 'react'

// library
import Link from 'next/link'

// components
import { routes } from '../../constants/routes';

// assets
import styles from './Header.module.scss'

export const Header = ({setShowLogin}) => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <div className={styles.navTop}>
                        <Link href={routes.home}>
                            <a className={styles.navLogo}>
                                <img src='/icons/logo.svg' alt='' />
                            </a>
                        </Link>
                        <div className={styles.search}>
                            {/*<SearchIcon />*/}
                            <img src='/icons/search.svg' alt='' />

                        </div>
                    </div>
                    <div className={styles.navItems}>
                        <Link href={routes.account}>
                            <a className={styles.menuItem}>
                                Account
                            </a>
                        </Link>
                        <Link href={routes.account}>
                            <a
                                onClick={(e) => {
                                    setShowLogin(true);
                                    e.preventDefault()
                                }}
                                className={styles.menuItem}>
                                Login
                            </a>
                        </Link>
                        <Link href={routes.join}>
                            <a className={styles.menuItem}>
                                Join
                            </a>
                        </Link>
                        <Link href={routes.premium}>
                            <a className={styles.menuItem}>
                                Premium
                            </a>
                        </Link>
                        <Link href={routes.sell}>
                            <a className={styles.menuItem}>
                                Sell
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

