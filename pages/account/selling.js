// core
import React, { useState } from 'react'

// components
import { AccountTabs, Layout } from "../../components";

// assets
import styles from '../../styles/Account.module.scss'
import Link from "next/link";
import { routes } from "../../constants/routes";


const products = [
    {title: 'Yeezys 240 Sneakers Limited 1', image: '/images/boots.png', price: '$79.99', edit: ''},
    {title: 'Yeezys 240 Sneakers Limited 2', image: '/images/boots.png', price: '$79.99', edit: ''},
];
const Account = () => {
    const [showProducts, setShowProducts] = useState(false);
    return (
        <Layout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>My Account</h1>
                        </div>
                        <AccountTabs activeMenu='Selling' />
                        {showProducts ? <div className={styles.sellingInfo}>
                                <h3>
                                    You aren’t selling anything yet. You can list an item for sale <Link
                                    href={routes.selling}><a>here</a></Link>
                                </h3>
                            </div>
                            : <div className={styles.sellingList}>
                                {products.map(product => (
                                    <div key={product.title} className={styles.listItem}>
                                        <div className={styles.image}><img src={product.image} alt='' /></div>
                                        <div className={styles.description}>
                                            <h6>{product.title}</h6>
                                            <div className={styles.itemInfo}>
                                                <Link href={product.edit}><a>Edit</a></Link>
                                                <p>{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button type='button' className='btn-second'>List an item for sale</button>
                            </div>}
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Account
