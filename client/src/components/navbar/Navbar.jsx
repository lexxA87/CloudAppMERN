import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <img src="#" alt="LOGO" />
      <div>MERN Cloud</div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
