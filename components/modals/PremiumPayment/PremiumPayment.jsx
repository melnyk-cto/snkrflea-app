// core
import React, { useState } from 'react'

// library
import classNames from 'classnames'

// components
import { ModalLayout } from "../../../components";

// assets
import styles from './PremiumPayment.module.scss'

export const PremiumPayment = ({setShowPremiumPlan}) => {
    const [showDescription, setShowDescription] = useState(true);
    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowPremiumPlan}>
            <div className={classNames(styles.popupLeft, styles.black)}>
                <h3 onClick={() => setShowDescription(!showDescription)}
                    className={classNames(showDescription ? styles.show : '')}>Premium <span>$99/month</span>
                </h3>
                {showDescription && <ul>
                    <li>Open your own store</li>
                    <li>Open your own store</li>
                    <li>Never pay a commission or seller fee</li>
                    <li>Link your paypal</li>
                    <li>Get a custom link for your store</li>
                    <li>Get access to hundreds of discount links</li>
                    <li>Discount links from sites like Kith, Walmart, target, Amazon, Fargetch, Bestbuy and more!</li>
                    <li>Up to 50 new discount links per day</li>
                    <li>Monthly giveaways. Up to 10 rare sneakers per month</li>
                    <li>Exclusive monthly hype drops. (i.e. box logos for $99.99)</li>
                </ul>}
            </div>
            <div className={styles.popupRight}>
                <h1>Payment</h1>
                <ul className={styles.plans}>
                    <li>Premium Membership 1-month <span>$99.00</span></li>
                    <li className={styles.free}>Processing fee <span>$3.00</span></li>
                    <li className={styles.total}>Total <span>$102.00</span></li>
                </ul>
                <p className={styles.renews}>*Renews automatically at end of month unless canceled</p>
                <button type='button'>Pay</button>
                <button type='button' className={styles.stripe}>Powered by <span>stripe</span></button>
            </div>
        </ModalLayout>
    )
};

