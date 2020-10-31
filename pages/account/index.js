// core
import React from 'react'

// library
import Link from 'next/link'

// components
import { Layout } from "../../components";
import { routes } from "../../constants/routes";

// assets
import styles from '../../styles/Account.module.scss'

const Account = () => {
    return (
        <Layout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>My Account</h1>
                        </div>
                        <div className={styles.menu}>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <Link href={routes.account}><a className={styles.active}>Selling</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href={routes.account}><a>Purchases</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href={routes.account}><a>Membership</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href={routes.account}><a>Store Info</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <h3>
                                You aren’t selling anything yet. You can list an item for sale <Link
                                href={routes.account}><a>here</a></Link></h3>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Account
