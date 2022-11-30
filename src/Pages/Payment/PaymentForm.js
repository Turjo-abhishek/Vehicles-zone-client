import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = ({ order }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, buyer_name, buyer_email, product_id, _id } = order;
  const parsedPrice = parseFloat(price);

  useEffect(() => {
    fetch("https://vehicles-zone-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ parsedPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data?.clientSecret);
      });
  }, [parsedPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer_name,
            email: buyer_email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        buyer_email,
        transactionId: paymentIntent.id,
        booking_id: _id,
        price,
        product_id,
      };
      fetch("https://vehicles-zone-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setSuccess("Congratulations your payment completed");
          setTransactionId(paymentIntent.id);
          fetch(`https://vehicles-zone-server.vercel.app/products?productId=${product_id}`, {
            method: "PATCH",
            body: JSON.stringify({
              status: "sold",
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((response) => response.json())
            .then(data => console.log(data));
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="ml-10 mr-10"
          options={{
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
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-5 ml-10"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500 ml-10">{success}</p>
          <p className="ml-10">
            Your Transaction Id:{" "}
            <span className="text-indigo-500">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
