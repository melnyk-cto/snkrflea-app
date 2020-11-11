// core
import React from 'react'

// library
import { useDispatch } from "react-redux";
import Link from "next/link";

// components
import { routes } from "../../../constants/routes";
import { authActions } from "../../../redux/auth/actions";
import { USER_LOG_OUT_REQUEST } from "../../../redux/auth/sagas";
import { generalActions } from "../../../redux/general/actions";

// assets
import styles from './AccountTabs.module.scss'

const menu = ['Selling', 'Purchases', 'Membership', 'Store Info', 'Log Out'];
export const AccountTabs = ({activeMenu}) => {
    const dispatch = useDispatch();

    const setShowCreateStore = (state) => dispatch(authActions.showCreateStoreModal(state));
    const showLoading = (state) => dispatch(generalActions.showLoading(state));

    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                {menu.map((item) => (
                    <li key={item} className={styles.item}>
                        <Link href={`/account/${item.toLowerCase()}`}>
                            <a className={activeMenu === item ? styles.active : ''}
                               onClick={(e) => {
                                   if (item === 'Store Info') {
                                       e.preventDefault();
                                       setShowCreateStore(true);
                                   } else if (item === 'Log Out') {
                                       e.preventDefault();
                                       showLoading(true);
                                       setTimeout(() => {
                                           dispatch({type: USER_LOG_OUT_REQUEST});
                                           window.location = routes.home
                                       }, 1000)
                                   }
                               }}>
                                {item}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
