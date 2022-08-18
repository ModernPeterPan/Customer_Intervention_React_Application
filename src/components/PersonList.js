import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        const config = {
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo` }
        };
        axios.get(`https://java-api.codeboxxtest.xyz/customers`,
            config
        ).then(res => {
            console.log(res)
            const persons = res.data;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <ol>
                {
                    this.state.persons
                        .map(person => {
                            console.log(person)
                            return <li key={person.id}>{person.company_description} - {person.contact_name}</li>
                        }
                        )
                }
            </ol>
        )
    }
}