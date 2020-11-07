// core
import React from 'react'

// assets
import styles from './AccountTabs.module.scss'
import Link from "next/link";

const menu = ['Selling', 'Purchases', 'Membership', 'Store Info'];
export const AccountTabs = ({activeMenu}) => {

    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                {menu.map((item) => (
                    <li key={item} className={styles.item}>
                        <Link href={`/account/${item.toLowerCase()}`}><a
                            className={activeMenu === item ? styles.active : ''}>{item}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
