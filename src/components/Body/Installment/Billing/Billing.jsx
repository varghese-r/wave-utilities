import React, { useContext, useState, useEffect } from "react";

import WUContext from "../../../../context/wu-context";

import classes from "./Billing.module.css";

import axios from "../../../../utils/axios";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SetupForm from "./SetupForm";

const stripePromise = loadStripe(
  "pk_test_51Jw3UpHciXopN8IpxX0gfmfWroOGi9d9XRuDlpH9bqRCt0g9ykocNmpe0uDKnBTv2KHTYUQHaGdKs7z42zUGwZEs00M6FVmlJx"
);

const Billing = () => {
  const [clientSecret, setClientSecret] = useState("");

  const wuCtx = useContext(WUContext);

  useEffect(() => {
    const fetchPayment = async () => {
      const request = await axios.post("/billing", {
        id: wuCtx.id,
        payment_method_types: ["card", "bacs_debit"],
      });

      console.log(request.data);
      setClientSecret(request.data.clientSecret);
    };

    fetchPayment();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className={classes.billingContainer}>
      <h2>
        We do not have your card details on file. Please provide your card
        details below
      </h2>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <SetupForm />
        </Elements>
      )}
    </div>
  );
};

export default Billing;
