import React, { useState } from "react";
import "../component/styles/form.css";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    msg: "",
  });

  return (
    <div>
      <div className="form">
        <form action="">
          <div className="container">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Username@example"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div className="container">
            <label htmlFor="email">Phone-number</label>
            <input
              type="number"
              placeholder="telephone"
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
            />
          </div>
          <div className="container">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              placeholder="@password#"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="100%"
              value={data.msg}
              onChange={(e) => {
                setData({ ...data, msg: e.target.value });
              }}
            >
              Message
            </textarea>
          </div>
          <button
            className="submitBtn"
            onClick={(e) => {
              e.preventDefault();
              // data.push(
              //   `{Username: ${input1}, Email-address: ${input2}, Password: ${input3}, Password: ${input4}}`
              // );
              // {
              //   JSON.stringify(data);
              // }
              // <h2>{JSON.stringify(data)}</h2>
              console.log(data);
              // setDisplay(data)
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <h2>My name is - {data.name}</h2>
      <h2>My email is -{data.email}</h2>
    </div>
  );
};

export default Form;
