import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const service = useLoaderData();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  return (
    <div className="h-screen bg-slate-400 w-[40%] mx-auto ">
      <h3 className="text-lg font-bold text-center text-black py-4">
        Payment for:{service.name}, Item Price:{service.price}
      </h3>
      <div className="p-10 bg-white">
        <Elements stripe={stripePromise}>
          <CheckoutForm details={service}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
