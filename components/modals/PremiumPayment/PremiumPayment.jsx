// core
import React from 'react'

// library
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Link from "next/link";

// components
import { ModalDescription, ModalLayout, CheckoutForm } from "../../../components";
import { authActions } from "../../../redux/auth/actions";
import { routes } from "../../../constants/routes";
import { showPremiumPaymentSuccessModal } from "../../../redux/auth/selectors";
import { subscripeToPremium } from '../../../api/actions.js'

// assets
import styles from './PremiumPayment.module.scss'

const stripePromise = loadStripe('pk_test_51HiLaSDRG7cpN5KtOtem4yGPqXtz6bw28X8wsGPhfvPd6CQG5suB8juNWcET8i45QjsqP9jCzroSA2o3hZtFGG7V00CvGIXQPK');
export const PremiumPayment = ({classname}) => {
    const dispatch = useDispatch();
    const getPremiumPaymentSuccess = useSelector(showPremiumPaymentSuccessModal);

    const showPremiumPayment = (state) => dispatch(authActions.showPremiumPaymentModal(state));
    const showPremiumPaymentSuccess = (state) => dispatch(authActions.showPremiumPaymentSuccessModal(state));

    const response = async (data) => {
        const resp = await subscripeToPremium(data);
    };

    const showPopup = (state) => {
        showPremiumPayment(state);
        showPremiumPaymentSuccess(state);
    };

    return (
        <ModalLayout
            classname={classname}
            maxWidth='1301px'
            showPopup={showPopup}>
            <ModalDescription
                premium={true}
                title='Premium'
                subTitle='$99/month'
            />
            {!getPremiumPaymentSuccess ? <div className={styles.popupRight}>
                <h1>Payment</h1>
                <ul className={styles.plans}>
                    <li>Premium Membership 1-month <span>$99.00</span></li>
                    <li className={styles.free}>Processing fee <span>$3.00</span></li>
                    <li className={styles.total}>Total <span>$102.00</span></li>
                </ul>
                <p className={styles.renews}>*Renews automatically at end of month unless canceled</p>
                <Elements stripe={stripePromise}>
                    <CheckoutForm response={response} />
                </Elements>
                <button type='button' className={styles.stripe}>Powered by <span>stripe</span></button>
            </div> : <div className={styles.success}>
                <img src='/icons/boots.svg' alt='' />
                <h3>Your payment was successful</h3>
                <Link href={routes.premium}>
                    <a className='btn-primary'
                       onClick={() => showPopup(false)}>View my premium links</a>
                </Link>
            </div>}
        </ModalLayout>
    )
};

