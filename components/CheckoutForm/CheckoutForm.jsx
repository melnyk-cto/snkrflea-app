// core
import React from 'react'

// library
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// components
import { signUpByEmail } from '../../api/actions.js'

export const CheckoutForm = () => {
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
            await signUpByEmail({
                email: 'testemail2@gmail.com',
                password: 'testemail@gmail.com',
                payment_method: paymentMethod.id,
                productId: 'price_1HiLesDRG7cpN5KtZbNE7qKR',
            })
                .then(d => d.json())
                .then(() => {

                });

            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe} className='btn-primary'>
                Pay
            </button>
        </form>
    );
};



