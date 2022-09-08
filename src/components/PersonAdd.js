import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const PersonAdd = () => {
  const [customer] = useState(2);
  const [bat, setBat] = useState('');
  const [bld, setBld] = useState('');
  const [col, setCol] = useState('');
  const [elev, setElev] = useState('');
  const [report, setReport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIntervention = { customer, bat, bld, col, elev, report };

    fetch(`https://java-api.codeboxxtest.xyz/customers/2`, {
      method: 'POST',
      headers: new Headers ({
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo`,
        'Content-Type': "application/json" 
      }),
      body: JSON.stringify(newIntervention)
    }).then(() => {
      console.log('new interventtion added')
    })
  }

  return (
    <div>
      <h3>Add an intervention</h3>
      <form onSubmit={handleSubmit}>
        <label>Battery ID</label>
        <input
          type='number'
          required
          name='batId'
          placeholder='Enter the number ID'
          value={bat}
          onChange={(e) => setBat(e.target.value)}
        /> <br />

        <label>Bld Id</label>
        <input
          type='number'
          name='bldId'
          required='required'
          placeholder='Enter the Building ID'
          value={bld}
          onChange={(e) => setBld(e.target.value)}
        // onChange={handleSubmit}
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
        /> <br />

        <label>Report</label>
        <input
          type='text'
          name='report'
          placeholder='Write a report'
          value={report}
          onChange={(e) => setReport(e.target.value)}
        // onChange={handleSubmit}
        /> <br />

        <button type='submit'>Add</button>
        <p>{report}</p>
      </form>
    </div>
  )
}

export default PersonAdd