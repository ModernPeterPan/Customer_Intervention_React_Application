import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    name: ''
  }

  render() {
    //for the form
    // const [interventions, setInterventions] = useState(data);
    // const [addFormData, setAddFormData] = useState({
    //   batId: '',
    //   bldAddress: '',
    //   colId: '',
    //   elvId: '',
    //   report: '',
    //   result: '',
    //   status: ''
    // })

    // handleSubmit = event => {
    //   event.preventDefault();

    //   const fieldName = event.target.getAttribute('name');
    //   const fieldValue = event.target.value;

    //   const newFormData = { ...addFormData };
    //   newFormData[fieldName] = fieldValue;

    //   setAddFormData(newFormData);

    //   // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    //   //   .then(res => {
    //   //     console.log(res);
    //   //     console.log(res.data);
    //   //   })
    // }

    return (
      <div>
        <h3>Add an intervention</h3>
        <h6>*</h6>
        <form>
          <input
            type='number'
            name='batId'
            placeholder='Enter the number ID'
            // onChange={handleSubmit}
          /> <br />
             <br />

          <input
            type='text'
            name='bldAddress'
            required='required'
            placeholder='Enter the address'
            // onChange={handleSubmit}
          /> <br />
             <br />
          <input
            type= 'number'
            name= 'colId'
            placeholder='Enter the number ID'
            // onChange={handleSubmit}
          /> <br />
            <br />
          <input
            type='number'
            name='elvId'
            placeholder='Enter the number ID'
            // onChange={handleSubmit}
          /> <br />
          <br />

          <input
            type='text'
            name='report'
            placeholder='Write a report'
            // onChange={handleSubmit}
          /> <br />
          <br />
          <input
            type='text'
            name='result'
            placeholder='Write the result'
            // onChange={handleSubmit}
          /> <br />
          <br />

          <input
            type='text'
            name='status'
            placeholder='Write the status'
            // onChange={handleSubmit}
          /> <br />
          <br />

          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

