import React, { useEffect, useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import "../resources/authentication.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassWord() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post("api/user/forgot-password", values);
      setLoading(false);
      message.success("Email sent successfully.");
      Navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong :(");
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
        <h1>Forgot Password</h1>
        <hr></hr>
        {/* Wrapper */}
        <p>We will send you an email with the password reset link.</p>
        <Form.Item name="email" label="Email Address">
          <Input></Input>
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Button type="primary" htmlType="submit">
            Email Me
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ForgotPassWord;
