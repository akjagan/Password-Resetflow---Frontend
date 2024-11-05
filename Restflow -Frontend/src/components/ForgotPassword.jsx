import React, { useState } from 'react';
import { Form, Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../utils/config";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const res = await axios.post(`${config.API_URL}/user/forgot-password`, {
        email,
      });
      if (res.status === 200) {
        toast.success("Password reset email sent");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'> 
      <Card style={{ width: "22rem" }} className='shadow-sm p-4'>
        <h2 className='mb-4 text-center'>Forgot Password</h2>
        <Form onSubmit={handlesubmit}> {/* Use onSubmit for form submission */}
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" // Correctly specify the type
              placeholder="Enter your email" 
              required 
              onChange={(e) => setEmail(e.target.value)} 
            /> 
          </Form.Group>
          <Button variant='primary' type='submit' className='w-100'> {/* Use type='submit' */}
            Send Reset Link
          </Button>
        </Form>
      </Card>     
    </Container>
  );
}

export default ForgotPassword;