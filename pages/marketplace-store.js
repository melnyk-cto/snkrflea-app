// core
import React from 'react'

// Library
import Link from 'next/link'

// components
import { Layout, ProductItem } from "../components";
import { routes } from "../constants/routes";

// assets
import styles from '../styles/MarketplaceStore.module.scss'

const products = [
    {title: 'Yeezy 350 V2 ‘Carbon’', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Izabella Tabakova', name: '@supremekciks', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Opi Watihana', name: '@sneakerisland', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Opi Watihana', name: '@sneakerisland', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Opi Watihana', name: '@sneakerisland', price: '$1240.29', image: '/images/boots.png'},
];

const MarketplaceStore = () => {
    return (
        <Layout>
            <section className={styles.marketplace}>
                <div className="container">
                    <div className={styles.marketplaceInner}>
                        <div className={styles.marketplaceLeft}>
                            <Link href={routes.marketplace}>
                                <a className={styles.breadCrumbs}>Marketplace</a>
                            </Link>
                           <div className={styles.userWrapper}>
                               <div className={styles.user}>
                                   <img src='/images/user.png' alt='' />
                                   <div className={styles.description}>
                                       <div className={styles.info}>
                                           <h3>Seb’s Shoe Store</h3>
                                           <img src='/icons/instagram.svg' alt='' />
                                           <Link href={routes.marketplace}>
                                               <a>https://instagram.com/hello</a>
                                           </Link>
                                       </div>
                                       <div className={styles.instagram}>
                                           <img src='/icons/instagram.svg' alt='' />
                                           <Link href={routes.marketplace}>
                                               <a>Contact seller</a>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                               {/*<div className={styles.tabs}>*/}
                               {/*    <span className={styles.active}>Selling</span>*/}
                               {/*    <span>Sold</span>*/}
                               {/*</div>*/}
                               <div className={styles.products}>
                                   <div className={styles.productsItems}>
                                       {products.map((product, index) => (
                                           <ProductItem key={index} product={product} />
                                       ))}
                                   </div>
                                   <div className={styles.addMobile}>
                                       <h1>AD</h1>
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className={styles.addDesktop}>
                            <h1>AD</h1>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default MarketplaceStore
