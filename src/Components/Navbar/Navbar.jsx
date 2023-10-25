import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
         <div className={classes.img}></div>
      <div className={classes.titulo}>
        <h1>RADIOATIVIDADE</h1>
        <h2>& APLICAÇÕES TECNOLÓGICAS</h2>
      </div>
    </div>
  );
};

export default Navbar;
