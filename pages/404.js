// core
import React from 'react'

// library
import Link from 'next/link'

// components
import Layout from "./layout";

// assets
import styles from '../styles/404.module.scss'


const Custom404 = () => {
    return (
        <Layout>
            <section className={styles.errorPage}>
                <div className="container">
                    <div className={styles.errorPageContent}>
                        <h1>Whoops you've landed on a page that doesn't exist</h1>
                        <Link href="/"><a>Go back home</a></Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Custom404
