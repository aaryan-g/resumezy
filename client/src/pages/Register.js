import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import "../resources/landingPage.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import templateImg from "../resources/templates/template1_image_landing.png";
import template2Img from "../resources/templates/template2_image_landing.png";
import template3Img from "../resources/templates/template_image3.png";
import template4Img from "../resources/templates/template_image4.png";

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
    <div className="full-page">
      <div className="reg-parent">
        <h1 className="reg-title">RESUMEZY</h1>
        <br></br>
        {/*Parent Element*/}
        {loading && <Spin size="large" />}
        {/* <h1 className="brand">RESUMEZY</h1> */}
        <Form layout="vertical" onFinish={onFinish}>
          <h1>Register</h1>
          <hr></hr>
          {/* Wrapper */}
          <Form.Item name="email" label="Email Address">
            <Input></Input>
          </Form.Item>

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
            <p style={{ margin: 0 }}>
              Have an account? <Link to="/login">Log in</Link>{" "}
            </p>

            <Button type="primary" htmlType="submit">
              REGISTER
            </Button>
          </div>
        </Form>
      </div>
      <div className="info-display">
        <div className="info-text">
          <h2 style={{ margin: 0 }}>Effortlessly create standout resumes,</h2>
          <h2 style={{ margin: 0 }}>
            with a variety of templates to suit every style...
          </h2>
        </div>
        <div className="image-grid">
          <img src={templateImg} alt="Image 1" />
          <img src={template2Img} alt="Image 2" />
          <img src={template3Img} alt="Image 3" />
          <img src={template4Img} alt="Image 4" />
        </div>
      </div>
    </div>
  );
}

export default Register;
