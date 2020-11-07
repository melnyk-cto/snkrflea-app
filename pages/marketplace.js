// core
import React, { useState } from 'react'

// Library
import Link from 'next/link'
import classNames from "classnames";

// components
import { FilterItem, Layout, ProductItem, PremiumLinks } from "../components";
import { routes } from "../constants/routes";

// assets
import styles from '../styles/Marketplace.module.scss'

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
    {title: 'Yeezy 350 V2 ‘Carbon’', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Off-White X Air Rubber', name: '@stansstore', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Izabella Tabakova', name: '@supremekciks', price: '$1240.29', image: '/images/boots.png'},
    {title: 'Opi Watihana', name: '@sneakerisland', price: '$1240.29', image: '/images/boots.png'},
];

const Home = () => {
    const [showFilters, setShowFilters] = useState(true);
    return (
        <Layout>
            <section className={styles.marketplace}>
                <div className="container">
                    <div className={styles.marketplaceInner}>
                        <div className={styles.filters}>
                            <h5 onClick={() => {
                                if (window.innerWidth < 768) setShowFilters(!showFilters)
                            }}><span>Filters</span></h5>
                            {showFilters && filters.map(filter => (
                                <FilterItem key={filter.title} filter={filter} />
                            ))}
                        </div>
                        <div className={styles.products}>
                            <div className={styles.productsItems}>
                                {products.map((product, index) => (
                                    <ProductItem key={index} product={product} />
                                ))}
                            </div>
                            <div className={styles.addMobile}>
                                <h1>AD</h1>
                            </div>
                            <PremiumLinks />
                            <div className={styles.productsItems}>
                                <div className={classNames(styles.products, styles.premium)}>
                                    <Link href={routes.marketplace}><a className='btn-second'>Get Premium</a></Link>
                                    {products.map((product, index) => (
                                        <ProductItem key={index} product={product} />
                                    ))}
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

export default Home
