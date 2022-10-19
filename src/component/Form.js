import React, { useState } from "react";
import "../component/styles/form.css";

const form = () => {
  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [input3, setInput3] = useState("");
  let [input4, setInput4] = useState("");
  // let [display, setDisplay] = useState("");
  let data = [];
  return (
    <div>
      <div className="form">
        <form action="">
          <div className="container">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Username@example"
              value={input1}
              onChange={(e) => {
                setInput1(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              placeholder="@password#"
              value={input3}
              onChange={(e) => {
                setInput3(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label htmlFor="email">Confirm Password</label>
            <input
              type="password"
              placeholder="@password#"
              value={input4}
              onChange={(e) => {
                setInput4(e.target.value);
              }}
            />
          </div>
          <button
            className="submitBtn"
            onClick={(e) => {
              e.preventDefault();
              data.push(`[Username: ${input1}, Email-address: ${input2}, Password: ${input3}, Password: ${input4} ]`);
              console.log(data);
              // setDisplay(data)
            }}
          >
            Submit
          </button>
          {/* <h5>{display}</h5> */}
        </form>
      </div>
    </div>
  );
};

export default form;
