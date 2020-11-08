import React, { useEffect, useState } from 'react'

// components
import { AccountTabs, Layout, ProductItem } from "../../components";

// assets
import styles from '../../styles/Account.module.scss'

import { useDispatch, useSelector } from "react-redux";

import {
    GET_PURCHASES_REQUEST
} from "../../redux/cabinet/sagas";

import {
    getPurchasesState
} from "../../redux/cabinet/selectors";


const products = [
    {title: 'Yeezy 350 V2 ‘Carbon’', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Izabella Tabakova', name: '@supremekciks', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Opi Watihana', name: '@sneakerisland', price: '$1240.29', image: '/images/boots.png'},
];

const Account = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(getPurchasesState);


    useEffect(() => {
        dispatch({type: GET_PURCHASES_REQUEST, payload: null})
    }, []);

    return (
        <Layout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>My Account</h1>
                        <AccountTabs activeMenu='Purchases' />
                        <div className={styles.purchasesProducts}>
                            {purchases.map(({product}, index) => (<ProductItem key={index} product={product} />))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Account
