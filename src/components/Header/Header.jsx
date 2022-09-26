import React from "react";
import LogoSvg from "../../assets/LogoSvg";
import classes from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className={classes.header}>
      <LogoSvg />
      <Navbar />

      <button className={classes.close__button}>Close</button>
    </div>
  );
};

export default Header;
