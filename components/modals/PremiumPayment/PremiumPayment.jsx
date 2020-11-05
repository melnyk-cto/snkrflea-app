// core
import React from 'react'

// library
import { useDispatch } from "react-redux";

// components
import { ModalDescription, ModalLayout } from "../../../components";
import { authActions } from "../../../redux/auth/actions";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// assets
import styles from './PremiumPayment.module.scss'

import { signUpByEmail } from '../../../api/actions.js'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
        await signUpByEmail({ email: 'testemail2@gmail.com', password: 'testemail@gmail.com', payment_method: paymentMethod.id, productId: 'price_1HiLesDRG7cpN5KtZbNE7qKR', })
        .then(d => d.json())
        .then(() => {
           
        })
        
      console.log('[PaymentMethod]', paymentMethod);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51HiLaSDRG7cpN5KtOtem4yGPqXtz6bw28X8wsGPhfvPd6CQG5suB8juNWcET8i45QjsqP9jCzroSA2o3hZtFGG7V00CvGIXQPK');

export const PremiumPayment = ({classname}) => {
    const dispatch = useDispatch();

    const showPremiumPayment = (state) => dispatch(authActions.showPremiumPaymentModal(state));

    return (
        <ModalLayout
            classname={classname}
            maxWidth='1301px'
            showPopup={showPremiumPayment}>
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
                <Elements stripe={stripePromise}>
                <CheckoutForm />
                </Elements>
                <button type='button' className='btn-primary'>Pay</button>
                <button type='button' className={styles.stripe}>Powered by <span>stripe</span></button>
            </div>
        </ModalLayout>
    )
};

