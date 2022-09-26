import React, { useState } from "react";

import WUContext from "./wu-context";

const WUProvider = (props) => {
  const [customer, setCustomer] = useState("");
  const [scenario, setScenario] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [installmentPeriod, setInstallmentPeriod] = useState(3);

  const customerHandler = (customer) => {
    setCustomer((prevCustomer) => {
      return {
        ...prevCustomer,
        id: customer.id,
        email: customer.email,
        name: customer.name,
      };
    });
  };

  const scenarioHandler = (scenario) => {
    setScenario(scenario);
  };

  const customAmountHandler = (amount) => {
    setCustomAmount(amount);
  };

  const installmentPeriodHandler = (period) => {
    setInstallmentPeriod(period);
  };

  const wuCtx = {
    id: customer.id,
    email: customer.email,
    name: customer.name,
    scenario: scenario,
    customAmount: customAmount,
    installmentPeriod: installmentPeriod,
    setScenario: scenarioHandler,
    setCustomer: customerHandler,
    setCustomAmount: customAmountHandler,
    setInstallmentPeriod: installmentPeriodHandler,
  };

  return (
    <WUContext.Provider value={wuCtx}>{props.children}</WUContext.Provider>
  );
};

export default WUProvider;
