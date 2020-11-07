// core
import React from 'react'

// library
import Link from "next/link";
import classNames from "classnames";

// components
import { routes } from "../../constants/routes";

// assets
import styles from './PremiumLinks.module.scss'

export const PremiumLinks = ({mobile}) => {
    return (
        <div className={styles.premiumLinks}>
            <h3>View premium links</h3>
            <p>
                Get access to hundreds of discount links, monthly giveaways, and exclusive monthly
                hype drops.
            </p>
            <Link href={routes.marketplace}>
                <a className={classNames('btn-second', !mobile ? styles.mobile : '')}>Get Premium</a>
            </Link>
        </div>
    )
};
