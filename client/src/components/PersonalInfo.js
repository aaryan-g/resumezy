import { Input, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function PersonalInfo() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Item
            name="firstName"
            label="First name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            name="mobileNumber"
            label="Contact number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="portfolio" label="Portfolio link">
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-6">
          <Form.Item
            name="careerObjective"
            label="Career objective"
            rules={[{ required: true }]}
          >
            <TextArea autoSize={{ minRows: 5, maxRows: 9 }} />
          </Form.Item>
        </div>

        <div className="col-md-6">
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea autoSize={{ minRows: 5, maxRows: 9 }} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
