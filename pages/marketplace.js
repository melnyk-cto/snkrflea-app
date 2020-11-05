// core
import React from 'react'

// Library
import Link from 'next/link'
import classNames from "classnames";

// components
import { FilterItem, Layout } from "../components";
import { routes } from "../constants/routes";

// assets
import styles from '../styles/Product.module.scss'

const filters = [
    {title: 'Brand', items: ['Nike', 'Adidas', 'Asics'], link: true},
    {title: 'Categories', items: ['Shoes', 'Tops', 'Bottoms', 'Accessories']},
    {title: 'Sub-Categories', items: ['Foamposite', 'KD', 'Kobe', 'Air Max', 'Basketball', 'SB']},
    {title: 'Sizes', items: ['5', '6', '7', '8', '9', '10', '12', '13', '14', '15']},
    {title: 'Prices', items: ['0-$50', '$50-$100', '$100-$250', '$250-$500', '$500-$1000']},
    {title: 'Condition', items: ['New', 'Used']},
    {title: 'Available for', items: ['Sale', 'Trade']},
];

const products = [
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
];

const Home = () => {
    return (
        <Layout>
            <section className={styles.marketplace}>
                <div className="container">
                    <div className={styles.marketplaceInner}>
                        <div className={styles.filters}>
                            <h5>Filters</h5>
                            {filters.map(filter => (
                                <FilterItem filter={filter} />
                            ))}
                        </div>
                        <div className={styles.products}>
                            {products.map((product, index) => (
                                <div key={index} className={styles.productItem}>
                                    <div className={styles.image}>
                                        <img src={product.image} alt='' />
                                    </div>
                                    <div className={styles.description}>
                                        <h6>{product.title}</h6>
                                        <p>{product.name}</p>
                                        <p className={styles.price}>{product.price}</p>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.addMobile}>
                                <h1>AD</h1>
                            </div>
                            <h3>View premium links</h3>
                            <p className={styles.links}>
                                Get access to hundreds of discount links, monthly giveaways, and exclusive monthly hype
                                drops.
                            </p>
                            <Link href={routes.marketplace}><a className='btn-second'>Get Premium</a></Link>
                            <div className={classNames(styles.products, styles.premium)}>
                                {products.map((product, index) => (
                                    <div key={index} className={styles.productItem}>
                                        <div className={styles.image}>
                                            <img src={product.image} alt='' />
                                        </div>
                                        <div className={styles.description}>
                                            <h6>{product.title}</h6>
                                            <p>{product.name}</p>
                                            <p className={styles.price}>{product.price}</p>
                                        </div>
                                    </div>
                                ))}
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

export default Home
