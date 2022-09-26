import React from "react";

import classes from "./Account.module.css";
import SinginForm from "../SigninForm/SinginForm";

const Account = () => {
  return (
    <div className={classes.container}>
      <div className={classes.signin__Container}>
        <h1>Pay your bill by debit or credit card</h1>
        <h3>Please complete your details below.</h3>
        <br />
        <br />
        <h4>
          To complete this form you will need your customer reference (found on
          your bill or any other correspondence from us), the amount you wish to
          pay and a valid debit or credit card.
        </h4>
        <br />
        <br />
        <SinginForm />
        <br />
        <br />
        <h4>
          Please note that payments made by BACS or by card may take some time
          to show up on your account.
        </h4>
      </div>

      <div className={classes.qr__container}>
        <h2>Logging in is "too 19th Century"?</h2>
        <img
          src={require("../../../assets/qr_test.png")}
          alt="QR Code for Payment"
        />
      </div>
    </div>
  );
};

export default Account;
