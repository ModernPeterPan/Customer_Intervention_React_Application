import React from "react";
import PersonList from "./PersonList";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h1 class="font-weight-light">Interventions List</h1>
            <p>
              The current interventions.
            </p>
          </div>
          <div class="col-lg-5">
            <PersonList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
