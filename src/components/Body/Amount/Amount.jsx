import React, { useContext } from "react";

import classes from "./Amount.module.css";

import WUContext from "../../../context/wu-context";

import { useNavigate } from "react-router-dom";

const Amount = () => {
  const navigate = useNavigate();
  const wuCtx = useContext(WUContext);

  const scenarioHandler = (scenario) => {
    wuCtx.setScenario(scenario);

    if (scenario === "installment") {
      navigate("../installment", { replace: true });
    } else {
      navigate("../payment", { replace: true });
    }
  };

  return (
    <div className={classes.container}>
      <h1>Welcome, {wuCtx.customerName}</h1>
      <br />
      <br />
      <h3>
        Your outstanding balance with us is £1200. How would you like to pay
        this?
      </h3>
      <div className={classes.scenarios}>
        <button onClick={() => scenarioHandler("one-time")}>
          Pay £1200 one-time
        </button>
        <button onClick={() => scenarioHandler("custom-amount")}>
          Choose a custom amount to pay
        </button>
        <button onClick={() => scenarioHandler("installment")}>
          Break your payment into installments
        </button>
      </div>
    </div>
  );
};

export default Amount;
