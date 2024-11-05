import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import config from "../utils/config";

function Register() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); 
    
    
    const handleRegister = async () => {
      console.log("Registering user with:", { name, email, password });
    try {
      const res = await axios.post(`${config.API_URL}/user/create`, {
        name,
        email,
        password,
      });
      if (res.status === 201) {
        console.log(res.data.message);
        toast.success(res.data.message);
        navigate("/login"); 
      }
    } catch (error) {

        console.error("Error during registration:", error.response);
      toast.error(error.response?.data?.message || "Registration failed"); 
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "22rem" }} className="shadow-sm p-4">
        <h2 className="mb-4 text-center">Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleRegister} className="w-100">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;