import React from "react";
import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItem/NavbarItem";

const menu = [
  { label: "Account", link: "/" },
  { label: "Amount", link: "/amount" },
  { label: "Payment", link: "/payment" },
  { label: "Confirmation", link: "/confirmation" },
];
const Navbar = () => {
  return (
    <div className={classes.navbar__container}>
      <ul className={classes.navbar}>
        {menu.map((item, index) => (
          <li key={index}>
            <NavbarItem text={item.label} link={item.link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
