import React from "react";

const WUContext = React.createContext({
  id: "",
  email: "",
  name: "",
  scenario: "",
  customAmount: "",
  installmentPeriod: "",
  setInstallmentPeriod: (period) => {},
  setCustomAmount: () => {},
  setScenario: () => {},
  setCustomer: (cust) => {},
});

export default WUContext;
