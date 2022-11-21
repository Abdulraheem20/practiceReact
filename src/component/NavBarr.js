import React, { useState } from "react";
import avarter from "../images/profile-pic (4).png";
import "../component/styles/NavBarr.css";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Utilities/auth";

const NavBarr = () => {
  const [show, setShow] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <h1>
              <Link to="/">LOGO</Link>
            </h1>
          </div>
          <div className="nav-links">
            <ul className={show ? "navItemsSmall" : "navItems"}>
              <li>
                {auth.user1 ? (
                  <p className="navLink" onClick={handleLogout}>
                    Logout
                  </p>
                ) : (
                  <NavLink to="/login" className="navLink">
                    Login
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink to="/" className="navLink">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navLink">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" className="navLink">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/info" className="navLink">
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonial" className="navLink">
                  Testimonial
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="iconBtns">
            <div onClick={showHandler}>
              {show ? (
                <MdOutlineCancel
                  style={{
                    fontSize: "30px",
                    borderRadius: "10px",
                  }}
                  className="closeShow closeHidden"
                />
              ) : (
                <TiThMenu
                  style={{
                    backgroundColor: "white",
                    fontSize: "40px",
                    borderRadius: "10px",
                  }}
                  className="menuShow menuHidden"
                />
              )}
            </div>
          </div>
          <div className="profile avarterHidden avarterShow">
            <img src={avarter} alt="averter" className="avarter" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarr;
