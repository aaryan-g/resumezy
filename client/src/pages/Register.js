import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import "../resources/authentication.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/register", values);
      setLoading(false);
      message.success("Registration successful.");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("RESUMEZY-users")) {
      Navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {/*Parent Element*/}
      {loading && <Spin size="large" />}
      <h1 className="brand">RESUMEZY</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr></hr>
        {/* Wrapper */}
        <Form.Item name="username" label="Username">
          <Input></Input>
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input type="password"></Input>
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password"></Input>
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click here to login</Link>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
