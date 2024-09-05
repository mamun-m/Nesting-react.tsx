/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">home </Link>
        <Link to="contact">contact</Link>
        <Link to="about">about</Link>
        <Link to="login">login</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
