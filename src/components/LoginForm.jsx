import React, { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    // console.log(props)
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [token, setToken] = useState();
        const history = useNavigate();
        // useEffect(() => {
        //     if (localStorage.getItem('user-info')) {
        //         history.push("/")
        //     }
        // }, [])

        const onClick = (e) => {
            e.preventDefault();
            login();
            history("/", {state: {token: token}})
        }

        const login = () => {
            console.log(email, password);
            let item = { email, password };
            var x = "";
            axios.post(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(result => {
                    console.log("#########")
                    x = result.data["access_token"]
                    console.log("result: " + x)
                    console.log("token: " + token)
                    localStorage.setItem("user-info", JSON.stringify(x))
                    // history("/");

                }).catch((error) => {
                    console.log(error)
                })
                setToken(x)
        }

    return (
        <div>
            <Container>
                <Row className="vh-50 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-light"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                    <p className=" mb-5">Interventions, because sometimes you need to put in the work</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                    Email address
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            <p className="small">
                                                <a className="text-dark" href="#!">
                                                    Forgot password?
                                                </a>
                                            </p>
                                            </Form.Group>
                                            <div className="d-grid">
                                            <Button variant="dark" type="submit">
                                                Login
                                            </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{" "}
                                                <a href="{''}" className="text-danger fw-bold">
                                                    Sign Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default LoginForm;