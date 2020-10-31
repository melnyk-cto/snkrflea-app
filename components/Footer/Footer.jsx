// core
import React from 'react'

// library
import Link from 'next/link'

// components
import { routes } from "../../constants/routes";

// assets
import styles from './Footer.module.scss'

export const Footer = ({setShowLogin}) => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerTop}>
                        <ul className={styles.account}>
                            <li><Link href={routes.join}><a>Join</a></Link></li>
                            <li>
                                <Link href={routes.login}>
                                    <a onClick={(e) => {
                                        setShowLogin(true);
                                        e.preventDefault()
                                    }}>Login</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={styles.social}>
                            <li>
                                <a href="https://twitter.com/snkrflea" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className={styles.social}>
                                <a href="https://www.facebook.com/snkrflea/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            <li className={styles.social}>
                                <a href="https://www.instagram.com/snkrflea/"
                                   className="FooterSocials__icon"
                                   target="_blank" rel="noreferrer">
                                    <i className="fab fa-google" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <ul className={styles.footerBottom}>
                        <li><Link href={routes.privacy}><a>Privacy</a></Link></li>
                        <li><Link href={routes.terms}><a>Terms</a></Link></li>
                        <li><Link href={routes.faqs}><a>FAQs</a></Link></li>
                        <li><Link href={routes.contact}><a>Contact</a></Link></li>
                    </ul>
                </div>
            </footer>

        </>
    )
};
