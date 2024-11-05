import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container, Form, Button } from 'react-bootstrap'
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import config from "../utils/config"


function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams()
    
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const res = await axios.post(`${config.API_URL}/user/reset-password/${token}`, { password, confirmPassword });
            if (res.status === 200) {
                toast.success("Password reset successful")
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
            toast.error("Error resetting password");
        }
    }



  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card style={{ width: "22rem" }} className="shadow-sm p-4">
          <h2 className="mb-4 text-center">Reset Password</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleResetPassword}
              className="w-100"
            >
              Reset Password
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default ResetPassword