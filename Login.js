import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#e0e7ff", height: "100vh" }}>
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="w-100">
          <Col md={6} className="bg-white p-4 rounded">
            <h3 className="text-center">Login</h3>
            <Form>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="keepLoggedIn">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Log in
              </Button>
              <p className="text-center mt-3">
                Don't have an account? <a href="/signup">Create account</a>
              </p>
            </Form>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h1 style={{ fontSize: "2rem", color: "#ffffff" }}>Welcome back!</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
