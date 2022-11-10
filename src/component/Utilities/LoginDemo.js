import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const LoginDemo = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    auth.login(user);
    navigate("/testimonial");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        style={{
          width: "50%",
          margin: "10px auto",
          border: "solid",
          padding: "40px",
        }}
      >
        <label htmlFor="username">
          Username
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <button
          type="submit"
          style={{
            width: "50%",
            padding: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginDemo;
