import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

import "./PaymentModule.css";

const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

function PaymentModule({ description, amount, currency, stripeEmail }) {
    const location = useLocation();
    const navigate = useNavigate();
  const stripe = useStripe();
  console.log("pnr",location.state.pnr);
  console.log(location.state.fare);
  

  const elements = useElements();

  const handlePayment = async (event) => {

    console.log(location.state.pnr);
    event.preventDefault();

    const response = await fetch("http://localhost:8083/payment", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        description,

        amount,

        currency,

        email: stripeEmail,
      }),
    });

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",

      card: cardElement,

      billing_details: {
        email: stripeEmail,
      },
    });

    if (error) {
      console.error("Payment error:", error);

      return;
    }
    navigate("/ticket", {state: {pnr: location.state.pnr, fare: location.state.fare, payment: paymentMethod}})
    
    console.log("Payment succeeded:", paymentMethod);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",

        color: "#424770",

        "::placeholder": {
          color: "#aab7c4",
        },
      },

      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <div>
      <h2>Payment</h2>

      <form onSubmit={handlePayment}>
        <div className="card-element-container">
          <label>Card details:</label>

          <CardElement options={cardElementOptions} className="card-element" />
            <br/>

            <label>Amount: {location.state.fare}</label>
            
            <label>Description:</label>
            
            <label>Currency</label>
            
            <label>Email</label>

        </div>



        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

function PaymentModuleWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentModule />
    </Elements>
  );
}

export default PaymentModuleWrapper;
