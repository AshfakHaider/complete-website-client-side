import React, { useContext, useState } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { UserContext } from "../../../App";


const CartForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
      console.log('[PaymentMethod]', paymentMethod);
      alert('Payment Succesful. Enjoy our service')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h4>Dear {loggedInUser.name}</h4>
        <h5 className="mb-5">Your Starting Pack is $10 for this package</h5>
        <CardElement></CardElement>
        <button className="btn btn-danger mt-5" type="submit" disabled={!stripe}>
        Pay $10
      </button>
    </form>
  );
};
export default CartForm;
