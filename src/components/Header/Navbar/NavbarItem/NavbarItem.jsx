import React from "react";
import classes from "./NavbarItem.module.css";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    // <NavLink to="/vehicles" className={classes.nav__item}>
    //         <span>VEHICLES</span>
    //       </NavLink>
    <NavLink to={props.link} className={classes.navbarItem__first}>
      <p>{props.text}</p>
    </NavLink>
  );
};

export default NavbarItem;
