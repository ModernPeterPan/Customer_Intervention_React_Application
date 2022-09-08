import React from 'react';
import axios from 'axios';
// import * as ReactBootStrap from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

export default class PersonList extends React.Component {
    state = {
        customerInts: []
    }

    componentDidMount() {
        const config = {
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo` }
        };
        axios.get(`https://java-api.codeboxxtest.xyz/customers/2`,
            config
        ).then(res => {
            console.log(res)
            const customerInts = res.data;
            this.setState({ customerInts });
            console.log(customerInts)
        })
    }

    render() {
        return (
            <div class="text-center">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Battery ID</th>
                            <th>Building Address</th>
                            <th>Column ID</th>
                            <th>Elevator ID</th>
                            <th>Report</th>
                            <th>Result</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                </Table>
                {this.state.customerInts.interventions?.map(intervention => {
                    return (
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="text-center">
                            <Table responsive>
                                <tbody>
                                    <tr>
                                    <Stack direction="horizontal" gap={5}>
                                        <td>{intervention.battery?.id || "null"}</td>
                                        <td>{intervention.building?.address || "null"}</td>
                                        <td>{intervention.column?.id || "null"}</td>
                                        <td>{intervention.elevator?.serial_number || "null"}</td>
                                        <td>{intervention.report || "null"}</td>
                                        <td>{intervention.result || "null"}</td>
                                        <td>{intervention.status || "null"}</td>
                                    </Stack>
                                    </tr>
                                </tbody>
                            
                            </Table>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

//this.state.persons.map
//person.interventions

//     render() {
//         return (
//             <ol>
//                 {this.state.persons.map(person => {
//                     // console.log(Object.values(person))
//                     console.log('person.interventions status', person.interventions[0].status)
//                     console.log('person.interventions status', person.interventions[0]['status'])
//                     return <li key={person.interventions}>{person.interventions.result} - {person.interventions.report}</li>
//                 }
//                 )}
//             </ol>
//         )
//     }
// }