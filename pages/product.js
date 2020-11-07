// core
import React from 'react'

// components
import { Layout } from "../components";

// assets
import styles from '../styles/Product.module.scss'


import Link from "next/link";

const Product = () => {
    return (
        <Layout>
            <section className={styles.product}>
                <div className="container">
                    <div className={styles.productInner}>
                        <div className={styles.productLeft}>
                            <div className={styles.add}>
                                <h1>AD</h1>
                            </div>
                        </div>
                        <div className={styles.productRight}>
                            <h1>Yeezy Boost 350 V2 'Carbon'</h1>
                            <p>
                                The adidas Yeezy Boost 350 V2 ‘Carbon’ features a breathable Primeknit upper in a
                                neutral black and grey finish. The sneaker’s lateral side features a streak of black via
                                the post-dyed monofilament side stripe, separating a light grey weave up top with mostly
                                black construction on the lower half. No-tie bungee laces deliver a secure fit. The
                                sneaker rides on a full-length Boost midsole, surrounded by a yellow-tinged rubber cage.
                            </p>
                            <div className={styles.buttons}>
                                <h3>$150</h3>
                                <button type='button' className='btn-second'>Buy Now</button>
                            </div>
                            <div className={styles.seller}>
                                <h6>Seller</h6>
                                <div className={styles.image}>
                                    <img src='/images/user.png' alt='' />
                                </div>
                                <div className={styles.info}>
                                    <h6>Seb’s Store</h6>
                                    <Link href=''><a><a>24 items for sale</a></a></Link>
                                </div>
                                <div className={styles.links}>
                                    <Link href=''><a>Contact seller</a></Link>
                                    <img src='/icons/instagram.svg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Product
