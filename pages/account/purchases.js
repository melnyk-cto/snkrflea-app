import React, { useEffect } from 'react'

// components
import { AccountTabs, GuardLayout, ProductItem } from "../../components";

// assets
import styles from '../../styles/Account.module.scss'

import { useDispatch, useSelector } from "react-redux";

import {
    GET_PURCHASES_REQUEST
} from "../../redux/cabinet/sagas";

import {
    getPurchasesState
} from "../../redux/cabinet/selectors";

const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(getPurchasesState);


    useEffect(() => {
        dispatch({type: GET_PURCHASES_REQUEST, payload: null})
    }, []);

    return (
        <GuardLayout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>My Account</h1>
                        <AccountTabs activeMenu='Purchases' />
                        <div className={styles.purchasesProducts}>
                            {purchases.map(({product}, index) => (<ProductItem key={index} product={product} />))}
                        </div>
                    </div>
                </div>
            </section>
        </GuardLayout>
    )
};

export default Purchases
