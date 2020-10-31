// core
import React from 'react'

// library
import Link from 'next/link'

// components
import Layout from "./layout";
import { routes } from "../constants/routes";

// assets
import styles from '../styles/404.module.scss'


const Custom404 = () => {
    return (
        <Layout>
            <section className={styles.errorPage}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>Whoops you've landed on a page that doesn't exist</h1>
                        <Link href={routes.home}><a>Go back home</a></Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Custom404
