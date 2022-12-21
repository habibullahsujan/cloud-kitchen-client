import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";

const CheckoutForm = ({ details }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transID, setTransID] = useState("");
  const [processing, setProcessing] = useState(false);
  const price = parseFloat(details.price) * 100;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(" https://cloud-kitchen-server-puce.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (elements === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      setProcessing(false);
      setErrorMessage(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
        productPrice: details?.price,
        productName: details?.name,
        transactionId: paymentIntent.id,
        productId:details?._id,
      };
      fetch(" https://cloud-kitchen-server-puce.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setProcessing(false);
      setSuccess("your payment completed.");
      setTransID(paymentIntent.id);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="border border-amber-300 p-5">
        <CardElement />
        <button
          className="border border-sky-600 w-full my-10 text-black bg-sky-500 py-4"
          type="submit"
          disabled={!stripe || !elements || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-600 font-bold text-sm">{errorMessage}</p>
      )}
      {success && (
        <p className="text-green-500 font-semibold">
          {success},your transaction-ID:{transID}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
