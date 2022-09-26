import React, { useState, useContext } from "react";

import WUContext from "../../../context/wu-context";
import classes from "./Installment.module.css";

import { useNavigate } from "react-router-dom";

const Installment = () => {
  const [showInstallmentInfo, setShowInstallmentInfo] = useState(false);
  const [installmentPeriod, setInstallmentPeriod] = useState(3);

  const navigate = useNavigate();

  const wuCtx = useContext(WUContext);
  const installmentHandler = (term) => {
    setInstallmentPeriod(term);
    setShowInstallmentInfo(true);
    console.log(term);
  };

  const installmentPaymentHandler = () => {
    wuCtx.setInstallmentPeriod(installmentPeriod);
    navigate("../billing", { replace: true });
    // console.log(installmentPeriod);
  };

  const inst__info = (
    <p>
      With an installment period of{" "}
      <span className={classes.installment__info__highlight}>
        {installmentPeriod} months
      </span>{" "}
      , we will deduct{" "}
      <span className={classes.installment__info__highlight}>
        £{1200 / installmentPeriod + 400}
      </span>{" "}
      from your payment method. This includes your outstanding amount per month
      plus an estimated cost incurred per every month"
    </p>
  );
  return (
    <div className={classes.installment__container}>
      <h3>
        You can pay your outstanding due of £1200 in installments while,
        simultaneously paying your monthly utility bill as well.
      </h3>
      <br />
      <br />
      <h4>Choose your installment period from below</h4>

      <button onClick={() => installmentHandler(3)}>3 months</button>
      <button onClick={() => installmentHandler(6)}>6 months</button>
      <button onClick={() => installmentHandler(12)}>12 months</button>

      {showInstallmentInfo && (
        <div className={classes.installment__info}>
          {inst__info}
          <button onClick={installmentPaymentHandler}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default Installment;
