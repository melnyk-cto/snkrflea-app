// core
import React, { useState } from 'react'

// library
import classNames from "classnames";
import { useDispatch } from "react-redux";

// components
import { authActions } from "../../../../redux/auth/actions";

// assets
import styles from './ModalDescription.module.scss'

const premiumArray = ['Open your own store', 'Upload unlimited items for sale', 'Never pay a commission or seller fee', 'Link your paypal', 'Get a custom link for your store', 'Get access to hundreds of discount links', 'Discount links from sites like Kith, Walmart, target, Amazon, Fargetch, Bestbuy and more!', 'Up to 50 new discount links per day', 'Monthly giveaways. Up to 10 rare sneakers per month', 'Exclusive monthly hype drops. (i.e. box logos for $99.99)'];
const starterArray = ['Open your own store', 'Upload unlimited items for sale', 'Never pay a commission or seller fee', 'Link your paypal', 'Get a custom link for your store'];
let listArray = [];
export const ModalDescription = ({title, subTitle, premium, showButton}) => {
    const dispatch = useDispatch();

    const [showDescription, setShowDescription] = useState(true);

    const setShowRegisterPremium = (state) => dispatch(authActions.showRegisterPremiumModal(state));
    const setShowRegister = (state) => dispatch(authActions.showRegisterModal(state));
    const setShowPlans = (state) => dispatch(authActions.showPlansModal(state));

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
                    ? <button type='button' className='btn-second' onClick={()=>{
                        setShowRegisterPremium(true);
                        setShowPlans(false);
                    }}>Get Premium</button>
                    : <button type='button' className='btn-primary'  onClick={()=>{
                        setShowRegister(true);
                        setShowPlans(false);
                    }}>Start Free</button>
                : ''}
        </div>
    )
};
