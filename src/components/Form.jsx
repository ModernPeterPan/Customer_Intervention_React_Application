import React from "react";
import { useState } from 'react';
import LoginForm from "./LoginForm";
import PersonAdd from "./PersonAdd";

const Form = () => {
  // const [author, setAuthor] = useState("");
  // const [customer, setCustomer] = useState("");
  // const [user, setUser] = useState("");
  // const [building, setBuilding] = useState("");
  // const [battery, setBattery] = useState("");
  // const [column, setColumn] = useState("");
  // const [elevator, setElevator] = useState("");
  // const [message, setMessage] = useState("");

  //Login info meanwhile
  const adminUser = {
    email: "customer1@business.com",
    password: "password123"
  }

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        email: details.email
      });
    } else {
      console.log("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({ email: ""});
  }
  // End of Log Info

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("https://java-api.codeboxxtest.xyz/interventions/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         // author: author,
  //         customer: customer,
  //         user: user,
  //         building: building,
  //         battery: battery,
  //         column: column,
  //         elevator: elevator,
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       // setAuthor("");
  //       setCustomer("");
  //       setUser("");
  //       setBuilding("");
  //       setBattery("");
  //       setColumn("");
  //       setElevator("");
  //       setMessage("User created successfully");
  //     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="form">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <PersonAdd />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Update Interventions</h1>
            <p>
              Here, you can safely intervene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
