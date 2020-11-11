// core
import React, { useEffect, useState } from 'react'

// components
import { AccountTabs, GuardLayout } from "../../components";

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

const Selling = () => {
    const dispatch = useDispatch();
    const list = useSelector(getSellingList);

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        dispatch({type: GET_SELLING_LIST_REQUEST})
    }, []);


    useEffect(() => {
        setListItems(list)
    }, [list]);

    return (
        <GuardLayout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>My Account</h1>
                        <AccountTabs activeMenu='Selling' />
                        {listItems && listItems.length === 0 ? <div className={styles.sellingInfo}>
                                <h3>
                                    You aren’t selling anything yet. You can list an item for sale <Link
                                    href={routes.productList}><a>here</a></Link>
                                </h3>
                            </div>
                            : <div className={styles.sellingList}>
                                {listItems.map((product, index) => (
                                    <div key={index} className={styles.listItem}>
                                        <div className={styles.image}>
                                            <img src={product.img} alt='' />
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
                                <Link href={routes.productList}>
                                    <a className='btn-second'>List an item for sale</a>
                                </Link>
                            </div>}
                    </div>
                </div>
            </section>
        </GuardLayout>
    )
};

export default Selling
