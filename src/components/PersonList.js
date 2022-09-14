import React from "react";
import axios from "axios";
// import * as ReactBootStrap from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";

export default class PersonList extends React.Component {
    state = {
        customerInts: [],
    };

    componentDidMount() {
        const config = {
            headers: {
                accept: '*/*',
            },
        };
        axios
            .get(`http://apicsharpavinash.herokuapp.com/api/Intervention/pending`, config)
            .then((res) => {
                console.log(res);
                const customerInts = res.data;
                this.setState({ customerInts });
                console.log(customerInts);
            });
    }

    render() {
        return (
            <div class="text-center">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Intervention ID</th>
                            <th>Battery ID</th>
                            <th>Building ID</th>
                            <th>Column ID</th>
                            <th>Elevator ID</th>
                            <th>Status</th>
                            {/* <th>Result</th>
                            <th>Status</th> */}
                        </tr>
                    </thead>
                    {/* // customer_id */}
                    {this.state.customerInts?.map(
                        (intervention) => {
                            if (intervention.customer_id === 1 || intervention.interventionDateStart < 0) {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>
                                                {intervention.id || "null"}
                                            </td>
                                            <td>
                                                {intervention.batterie_id || "null"}
                                            </td>
                                            <td>
                                                {intervention.building_id || "null"}
                                            </td>
                                            <td>
                                                {intervention.column_id || "null"}
                                            </td>
                                            <td>
                                                {intervention.elevator_id || "null"}
                                            </td>
                                            <td>{intervention.status || "null"}</td>
                                            {/* <td>{intervention.result || "null"}</td>
                                            <td>{intervention.status || "null"}</td> */}
                                        </tr>
                                    </tbody>
                                );
                            }
                        }
                    )}
                </Table>
            </div>
        );
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
