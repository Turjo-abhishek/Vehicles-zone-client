import React from "react";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const PaymentPage = () => {
  const order = useLoaderData();
  const {product_name, price} = order;
  return (
    <div>
      <h1 className="text-2xl font-bold ml-7">Payment for <span className="text-orange-500">{product_name}</span></h1>
      <p className="text-lg font-semibold ml-7 my-5">
        Please pay <span className="text-orange-500">${price}</span> for your the Booked vehicle
      </p>
      <Elements stripe={stripePromise}>
          <PaymentForm order={order} />
        </Elements>
    </div>
  );
};

export default PaymentPage;
