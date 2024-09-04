/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [singin, setsingin] = useState(false);
  useEffect(() => {
    const userData =
      localStorage.getItem("issingint") &&
      JSON.parse(localStorage.getItem("issingint"));
    setsingin(userData);
  }, []);

  const handlesingout = () => {
    setsingin(false);
    localStorage.setItem("issingint", JSON.stringify(true));
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-menu">
          <h1>my div </h1>
        </div>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`contact`}>contact</Link>
            </li>
            {singin && (
              <>
                <li>
                  <Link to={`signin`}>SignIn</Link>
                </li>
              </>
            )}
            {!singin && (
              <li>
                <Link onClick={handlesingout} to={`signout`}>
                  SignOut
                </Link>
              </li>
            )}

            <li>
              <Link to={`about`}>about</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
