import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartForm from './CartForm';




const stripePromise = loadStripe('pk_test_51Ie3ZfAQOTpWRkW9EClLMmZVFMNmfYpwaBph7E5AQwOK70E6nsnOt0v5nsv71T4HmG2dMD8PkKbk808Yz5S5R0oe00HnCfjAhG');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <CartForm></CartForm>
        </Elements>
    );
};

export default PaymentProcess;
