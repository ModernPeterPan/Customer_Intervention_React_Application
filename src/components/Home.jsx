import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import PersonList from "./PersonList";

const Home = () => {
  const location = useLocation();
  console.log(location?.state?.token)

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <h1 class="font-weight-light">Interventions List</h1>
            <p>
              The current interventions.
            </p>
          </div>
          <div class="col-lg-8">
            <PersonList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
