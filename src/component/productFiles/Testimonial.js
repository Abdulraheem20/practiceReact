import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/style.css";
import { useAuth } from "../Utilities/auth";

const Testimonial = () => {
  const auth = useAuth()
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="featuredStory">
        <h1>Welcome: {auth.user1}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          voluptates possimus autem cum expedita delectus, voluptate quaerat ea
          blanditiis, quasi explicabo maxime sapiente commodi repudiandae
          deleniti! Praesentium saepe iste provident dicta sint, ea autem, a
          nobis quae quis quod pariatur!
        </p>
      </div>
      <div className="featuredNav">
        <ul className="linP">
          <li>
            <Link to="newproduct">New Product</Link>
          </li>
          <li>
            <Link to="popular">Popular Products</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Testimonial;