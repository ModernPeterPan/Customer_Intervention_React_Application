import React from "react";
import { useState } from 'react';
import PersonAdd from "./PersonAdd";

function Form() {
  // const [author, setAuthor] = useState("");
  const [customer, setCustomer] = useState("");
  const [user, setUser] = useState("");
  const [building, setBuilding] = useState("");
  const [battery, setBattery] = useState("");
  const [column, setColumn] = useState("");
  const [elevator, setElevator] = useState("");
  const [message, setMessage] = useState("");

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
            {/* <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={customer}
                placeholder="Customer"
                onChange={(e) => setCustomer(e.target.value)}
              />
              <input
                type="text"
                value={user}
                placeholder="User"
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="text"
                value={building}
                placeholder="Building"
                onChange={(e) => setBuilding(e.target.value)}
              />
              <input
                type="text"
                value={battery}
                placeholder="Battery"
                onChange={(e) => setBattery(e.target.value)}
              />
              <input
                type="text"
                value={column}
                placeholder="Column"
                onChange={(e) => setColumn(e.target.value)}
              />
              <input
                type="text"
                value={elevator}
                placeholder="Elevator"
                onChange={(e) => setElevator(e.target.value)}
              />

              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form> */}
            <div>
              <PersonAdd />
            </div>
            <button type='submit'>Create</button>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">New Interventions</h1>
            <p>
              Here, you can intervene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
