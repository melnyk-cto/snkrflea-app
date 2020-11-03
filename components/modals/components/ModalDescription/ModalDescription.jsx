// core
import React, { useState } from 'react'

// assets
import styles from './ModalDescription.module.scss'
import classNames from "classnames";

const premiumArray = ['Open your own store', 'Never pay a commission or seller fee', 'Link your paypal', 'Get a custom link for your store', 'Get access to hundreds of discount links', 'Discount links from sites like Kith, Walmart, target, Amazon, Fargetch, Bestbuy and more!', 'Up to 50 new discount links per day', 'Monthly giveaways. Up to 10 rare sneakers per month', 'Exclusive monthly hype drops. (i.e. box logos for $99.99)'];
const starterArray = ['Open your own store', 'Upload unlimited items for sale', 'Never pay a commission or seller fee', 'Link your paypal', 'Get a custom link for your store'];
let listArray = [];
export const ModalDescription = ({title, subTitle, premium, showButton}) => {
    const [showDescription, setShowDescription] = useState(true);
    if (premium) {
        listArray = premiumArray;
    } else {
        listArray = starterArray;
    }
    return (
        <div className={classNames(styles.listWrapper, {[styles.black]: premium})}>
            <h3 onClick={() => setShowDescription(!showDescription)}
                className={classNames(styles.title, {[styles.show]: showDescription})}>
                {title} <span>{subTitle}</span>
            </h3>
            {showDescription && <ul className={styles.list}>
                {listArray.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>}
            {showButton
                ? premium
                    ? <button type='button' className='btn-second'>Get Premium</button>
                    : <button type='button' className='btn-primary'>Start Free</button>
                : ''}
        </div>
    )
};
