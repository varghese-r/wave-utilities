import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Account from "./Account/Account";
import Amount from "./Amount/Amount";
import Confirmation from "./Confirmation/Confirmation";
import Installment from "./Installment/Installment";
import Payment from "./Payment/Payment";
import Billing from "./Installment/Billing/Billing";
import BillingConfirmation from "./BillingConfirmation/BillingConfirmation";

const Body = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Account />} />
      <Route exact path="/amount" element={<Amount />} />
      <Route exact path="/payment" element={<Payment />} />
      <Route exact path="/confirmation" element={<Confirmation />} />
      <Route exact path="/installment" element={<Installment />} />
      <Route exact path="/billing" element={<Billing />} />
      <Route
        exact
        path="/billing_confirmation"
        element={<BillingConfirmation />}
      />
    </Routes>
  );
};

export default Body;
