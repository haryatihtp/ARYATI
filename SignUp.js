import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <div style={{ backgroundColor: "#e0e7ff", height: "100vh" }}>
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="w-100">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h1 style={{ fontSize: "2rem", color: "#ffffff" }}>Let's Get Started!</h1>
            </div>
          </Col>
          <Col md={6} className="bg-white p-4 rounded">
            <h3 className="text-center">Create Account</h3>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Create password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="terms">
                <Form.Check type="checkbox" label="I agree with Terms and Privacy Policy" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Create Account
              </Button>
              <div className="text-center my-3">OR</div>
              <Button variant="outline-primary" className="w-100">
                Sign up with Google
              </Button>
              <p className="text-center mt-3">
                Already have an account? <a href="/login">Log in</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

