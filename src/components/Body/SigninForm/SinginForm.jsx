import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../../utils/axios";

import classes from "./SinginForm.module.css";

import WUContext from "../../../context/wu-context";

const SinginForm = () => {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();

  const wuCtx = useContext(WUContext);

  const onSignInHandler = async (event) => {
    event.preventDefault();

    const request = await axios.post("/signin", {
      name: name.current.value,
      email: email.current.value,
    });

    wuCtx.setCustomer(request.data);
    if (request.data.id !== null) {
      navigate("../amount", { replace: true });
    }
  };
  return (
    <div className={classes.form__container}>
      <div className={classes.field__section}>
        <label htmlFor="reference">Customer reference</label>
        <input
          ref={name}
          type="text"
          id="reference"
          placeholder="Enter customer reference"
        />
      </div>

      <div className={classes.field__section}>
        <label htmlFor="email">Email address</label>
        <input
          ref={email}
          type="email"
          id="email"
          placeholder="Enter email address"
        />
      </div>

      <button onClick={onSignInHandler}>Continue</button>
    </div>
  );
};

export default SinginForm;
