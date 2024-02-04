import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import "../resources/authentication.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post("api/user/login", values);
      setLoading(false);
      message.success("Login successful.");
      localStorage.setItem("RESUMEZY-users", JSON.stringify(user.data));
      Navigate("/home");
    } catch (error) {
      setLoading(false);
      message.error("Login failed.");
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
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr></hr>
        {/* Wrapper */}
        <Form.Item name="username" label="Username">
          <Input></Input>
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input type="password"></Input>
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click here to register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
