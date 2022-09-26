import React, { useContext } from "react";

import classes from "./Confirmation.module.css";
import WUContext from "../../../context/wu-context";

const Confirmation = () => {
  const wuCtx = useContext(WUContext);
  console.log(wuCtx);
  return (
    <div className={classes.confirmationContainer}>
      <div className={classes.confirmationMessage}>
        <span>&#10003;</span> Thank you! Your payment has been successfully
        submitted!
      </div>
    </div>
  );
};

export default Confirmation;
