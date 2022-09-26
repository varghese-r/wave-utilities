import React, { useState, useContext } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import classes from "./SetupForm.module.css";

import axios from "../../../../utils/axios";

import WUContext from "../../../../context/wu-context";

import { useNavigate } from "react-router-dom";

const SetupForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const wuCtx = useContext(WUContext);

  const [showSaveMessage, setShowSaveMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setTimeout(200);
      return;
    }

    const response = await stripe.confirmSetup({
      elements,
      redirect: "if_required",
    });

    setShowSaveMessage(true);

    console.log(response.setupIntent);
    if (response.setupIntent.status === "succeeded") {
      console.log(wuCtx.id, wuCtx.email);
      const request = await axios.post("/subscriptions", {
        id: wuCtx.id,
        payment_method: response.setupIntent.payment_method,
        price_amount: (1200 / wuCtx.installmentPeriod + 400) * 100,
        period: wuCtx.installmentPeriod,
      });

      console.log(request);

      navigate("../billing_confirmation", { replace: true });
    }
  };

  return (
    <>
      <form className={classes.setupForm__container} onSubmit={handleSubmit}>
        <PaymentElement />
        <div className={classes.submitButton}>
          <button disabled={!stripe}>Submit</button>
        </div>
      </form>
      <br />
      <br />
      {showSaveMessage && <h3>... creating installments</h3>}
    </>
  );
};

export default SetupForm;
