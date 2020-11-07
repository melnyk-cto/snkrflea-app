// core
import React from 'react'

// library
import { useDispatch } from "react-redux";

// assets
import styles from './AccountTabs.module.scss'
import Link from "next/link";
import { authActions } from "../../../redux/auth/actions";

const menu = ['Selling', 'Purchases', 'Membership', 'Store Info'];
export const AccountTabs = ({activeMenu}) => {
    const dispatch = useDispatch();

    const setShowCreateStore = (state) => dispatch(authActions.showCreateStoreModal(state));
    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                {menu.map((item) => (
                    <li key={item} className={styles.item}>
                        <Link href={`/account/${item.toLowerCase()}`}><a
                            className={activeMenu === item ? styles.active : ''}
                            onClick={(e) => {
                                if (item === 'Store Info') {
                                    e.preventDefault();
                                    setShowCreateStore(true);
                                }
                            }}>{item}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
