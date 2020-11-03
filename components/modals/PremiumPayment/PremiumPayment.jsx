// core
import React from 'react'

// library
import { useDispatch } from "react-redux";

// components
import { ModalDescription, ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

// assets
import styles from './PremiumPayment.module.scss'

export const PremiumPayment = () => {
    const dispatch = useDispatch();

    const setShowPremiumPlan = (state) => dispatch(authActions.showPremiumPlanModal(state));

    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowPremiumPlan}>
            <ModalDescription
                premium={true}
                title='Premium'
                subTitle='$99/month'
            />
            <div className={styles.popupRight}>
                <h1>Payment</h1>
                <ul className={styles.plans}>
                    <li>Premium Membership 1-month <span>$99.00</span></li>
                    <li className={styles.free}>Processing fee <span>$3.00</span></li>
                    <li className={styles.total}>Total <span>$102.00</span></li>
                </ul>
                <p className={styles.renews}>*Renews automatically at end of month unless canceled</p>
                <button type='button' className='btn-primary'>Pay</button>
                <button type='button' className={styles.stripe}>Powered by <span>stripe</span></button>
            </div>
        </ModalLayout>
    )
};

