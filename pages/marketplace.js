// core
import React from 'react'

// Library
// import Link from 'next/link'

// components
import { FilterItem, Layout } from "../components";
// import { routes } from "../constants/routes";

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
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Home
