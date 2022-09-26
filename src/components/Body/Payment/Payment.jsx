import React, { useContext, useEffect, useState, useRef } from "react";
import WUContext from "../../../context/wu-context";

import classes from "./Payment.module.css";
import axios from "../../../utils/axios";

import PaymentForm from "./PaymentForm";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Jw3UpHciXopN8IpxX0gfmfWroOGi9d9XRuDlpH9bqRCt0g9ykocNmpe0uDKnBTv2KHTYUQHaGdKs7z42zUGwZEs00M6FVmlJx"
);

const Payment = () => {
  const wuCtx = useContext(WUContext);
  const [clientSecret, setClientSecret] = useState("");
  const customAmount = useRef();

  console.log(wuCtx);
  useEffect(() => {
    const fetchPayment = async () => {
      if (wuCtx.scenario === "one-time") {
        const request = await axios.post("/one-time", {
          id: wuCtx.id,
          payment_method_types: ["card", "bacs_debit"],
        });

        console.log(request.data);
        setClientSecret(request.data.clientSecret);
      }
    };

    fetchPayment();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const request = await axios.post("/custom-amount", {
      id: wuCtx.id,
      payment_method_types: ["card", "bacs_debit", "customer_balance"],
      amount: customAmount.current.value,
    });

    wuCtx.setCustomAmount(customAmount.current.value);

    setClientSecret(request.data.clientSecret);
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className={classes.paymentElement}>
      {wuCtx.scenario === "one-time" && (
        <h3>
          Please provide your payment details below to pay the outstanding
          amount of £1200
        </h3>
      )}
      {wuCtx.scenario === "custom-amount" && (
        <div className={classes.customAmountContainer}>
          <h2>Enter below the amount you would like to pay!</h2>
          <form className={classes.formContainer} onSubmit={submitHandler}>
            <label htmlFor="amount">Amount to be paid (£)</label>
            <input
              ref={customAmount}
              type="number"
              id="amount"
              min={500}
              max={1500}
              placeholder="Enter a value between 500 and 1500"
            />
            <button>Confirm</button>
          </form>
        </div>
      )}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
