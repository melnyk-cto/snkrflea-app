// core
import React from 'react'

// components
import { AccountTabs, Layout, ProductItem } from "../../components";

// assets
import styles from '../../styles/Account.module.scss'

const products = [
    {title: 'Yeezy 350 V2 ‘Carbon’', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Izabella Tabakova', name: '@supremekciks', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Opi Watihana', name: '@sneakerisland', price: '$1240.29', image: '/images/boots.png'},
];

const Account = () => {

    return (
        <Layout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>My Account</h1>
                        </div>
                        <AccountTabs activeMenu='Purchases' />
                        <div className={styles.purchasesProducts}>
                            {products.map((product, index) => (<ProductItem key={index} product={product} />))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Account
