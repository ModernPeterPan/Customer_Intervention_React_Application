import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const PersonAdd = () => {
  const [customer] = useState(1);
  const [intervention, setIntervention] = useState();
  const [bat, setBat] = useState();
  const [bld, setBld] = useState();
  const [col, setCol] = useState();
  const [elev, setElev] = useState();
  const [status, setStatus] = useState('');

  //"http://someURLtoAvoidCors.comhttp://YOUR_ACTUAL_URL.com"

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIntervention = {
      "customer_id": customer,
      "intervention_id": intervention,
      "batterie_id": bat,
      "column_id": col,
      "elevator_id": elev,
      "status": status
    }
    console.log(newIntervention)
    fetch(`http://apicsharpavinash.herokuapp.com/api/Intervention/${intervention}/${status}/start/nil`, {
      method: 'PUT',
      // mode: 'no-cors',
      headers: new Headers({
        'accept': '*/*',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo',
        'Content-Type': "application/json"
      }),
      body: JSON.stringify(newIntervention)
    }).then((
      response
    ) => {
      console.log(response)
      console.log('new intervention added')
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <h3>Update an intervention</h3>
      <form onSubmit={handleSubmit}>
        <label>Intervention Id</label>
        <input
          type='number'
          name='intervention_id'
          placeholder='Enter the Intervention ID'
          value={intervention}
          onChange={(e) => setIntervention(e.target.value)}
        /> <br />

        {/* <label>Bld Id</label>
        <input
          type='number'
          name='bldId'
          placeholder='Enter the Building ID'
          value={bld}
          onChange={(e) => setBld(e.target.value)}
        /> <br />

        <label>Battery ID</label>
        <input
          type='number'
          name='batId'
          placeholder='Enter the number ID'
          value={bat}
          onChange={(e) => setBat(e.target.value)}
        /> <br />

        <label>Column ID</label>
        <input
          type='number'
          name='colId'
          placeholder='Enter the number ID'
          value={col}
          onChange={(e) => setCol(e.target.value)}
        // onChange={handleSubmit}
        /> <br />

        <label>Elevator ID</label>
        <input
          type='number'
          name='elvId'
          placeholder='Enter the number ID'
          value={elev}
          onChange={(e) => setElev(e.target.value)}
        // onChange={handleSubmit}
        /> <br /> */}

        <label>Status</label>
        <input
          type='text'
          name='status'
          placeholder='Please, update the status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        // onChange={handleSubmit}
        /> <br />

        <button type='submit'>Update!</button>
        {/* <p>{status}</p> */}
      </form>
    </div>
  )
}

export default PersonAdd