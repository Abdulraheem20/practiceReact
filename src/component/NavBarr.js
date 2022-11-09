import React, { useState } from "react";
import avarter from "../images/profile-pic (4).png";
import "../component/styles/NavBarr.css";
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const NavBarr = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <h1>
              <NavLink href="">LOGO</NavLink>
            </h1>
          </div>
          <div className="nav-links">
            <ul className={show ? "navItemsSmall" : "navItems"}>
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
            <button onClick={showHandler}>
              {show ? (
                <GrClose
                  style={{
                    backgroundColor: "red",
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
            </button>
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
