import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"; 

import Navbars from "./Navbars";
import { signUp } from "./services/user.service";
import "./register.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  // reset the form
  const resetData = () => {
    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  // submit the form
  const submitForm = (event) => {
    event.preventDefault();

    if (error.isError) {
      toast.error("Please fill in all the necessary details");
      setError({ ...error, isError: false });
      return;
    }

    console.log(data);

    // data validation

    // call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !! user id " + resp.id);
        setData({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        toast.error("Something went wrong");
        // handle errors in a proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <section>
      <Container
        fluid
        className="vh-100"
        style={{ backgroundColor: "rgb(248 250 252)" }}
      >
        <Row className="justify-content-center align-items-center h-100 p-5">
          <Col xs={12} md={6}>
            <img
              className="w-full h-auto object-cover object-right"
              src="https://partheniumprojects.com/wp-content/uploads/2019/01/Railway-Reservation-System.jpg"
              alt="Your Company"
              style={{ height: "100%" }}
            />
          </Col>

          <Col xs={12} md={6} className="p-4" style={{ marginTop: "-70px" }}>
            <Form className="border rounded bg-white p-4" onSubmit={submitForm}>
              <h1 className="text-center mb-4">
                <b>Register</b>
              </h1>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => handleChange(e, "username")}
                  value={data.username}
                  invalid={error.errors?.response?.data?.name ? true : false}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => handleChange(e, "email")}
                  value={data.email}
                  invalid={error.errors?.response?.data?.email ? true : false}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
                  invalid={error.errors?.response?.data?.password ? true : false}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Submit
                </Button>

                <Button
                  onClick={resetData}
                  color="secondary"
                  type="reset"
                  className="font-medium text-indigo-600 hover:text-yellow-500"
                >
                  Reset
                </Button>
              </div>

              <div className="mt-3">
                
                <p>
                  Already registered? {" "}<Link to="/"
                    className="font-medium text-fuchsia-700 hover:text-amber-300">Login</Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
