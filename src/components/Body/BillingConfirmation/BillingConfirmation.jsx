import React, { useContext } from "react";

import classes from "./BillingConfirmation.module.css";
import WUContext from "../../../context/wu-context";

const BillingConfirmation = () => {
  const wuCtx = useContext(WUContext);
  console.log(wuCtx);
  return (
    <div className={classes.confirmationContainer}>
      <div className={classes.confirmationMessage}>
        <span>&#10003;</span> Thank you! Your installments have been
        successfully created!
      </div>
    </div>
  );
};

export default BillingConfirmation;
