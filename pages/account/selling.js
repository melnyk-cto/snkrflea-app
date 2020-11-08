// core
import React, { useState, useEffect } from 'react'

// components
import { AccountTabs, Layout } from "../../components";

import { useSelector, useDispatch } from "react-redux";

import {
    GET_SELLING_LIST_REQUEST
} from "../../redux/products/sagas";

// assets
import styles from '../../styles/Account.module.scss'
import Link from "next/link";
import { routes } from "../../constants/routes";
import {
  getSellingList
} from "../../redux/products/selectors";

const Account = () => {
    const dispatch = useDispatch();
    const list = useSelector(getSellingList)

   useEffect(() => {
     dispatch({ type: GET_SELLING_LIST_REQUEST, payload: { }})
  }, []);

    return (
        <Layout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>My Account</h1>
                        <AccountTabs activeMenu='Selling' />
                        {list && list.length === 0 ? <div className={styles.sellingInfo}>
                                <h3>
                                    You aren’t selling anything yet. You can list an item for sale <Link
                                    href={routes.product}><a>here</a></Link>
                                </h3>
                            </div>
                            : <div className={styles.sellingList}>
                                {list.map(product => (
                                    <div key={product.title} className={styles.listItem}>
                                        <div className={styles.image}>
                                            <img src={product?.img} alt='' />
                                        </div>
                                        <div className={styles.description}>
                                            <h6>{product.title}</h6>
                                            <div className={styles.itemInfo}>
                                                <Link href={''}><a>Edit</a></Link>
                                                <p>${product.price}</p>
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
