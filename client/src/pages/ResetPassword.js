import React, { useEffect, useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassWord() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      if (values.password !== values.cpassword) {
        throw new Error("Passwords do not match");
      }
      await axios.post(`http://localhost:5000/reset-password/${id}`, values);
      setLoading(false);
      message.success("Password reset successfully.");
      navigate("/login"); // Corrected: use navigate() to redirect
    } catch (error) {
      setLoading(false);
      console.error("Reset password error:", error);
      message.error("Something went wrong :(");
    }
  };

  return (
    <div className="auth-parent">
      {/*Parent Element*/}
      {loading && <Spin size="large" />}
      <h1 className="brand">RESUMEZY</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Reset Password</h1>
        <hr></hr>
        {/* Wrapper */}
        <Form.Item name="password" label="New password">
          <Input type="password"></Input>
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm password">
          <Input type="password"></Input>
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ResetPassWord;
