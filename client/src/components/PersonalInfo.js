import { Input, Form, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";

function PersonalInfo() {
  // const uploadButton = (
  //   <div>
  //     <UploadOutlined />
  //     <div
  //       style={{
  //         marginTop: 8,
  //         color: "white",
  //         backgroundColor: "black",
  //         borderRadius: 2,
  //         padding: 4,
  //         display: "inline",
  //         marginInline: 10,
  //         cursor: "pointer",
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );

  // const customRequest = async ({ file, onSuccess, onError }) => {
  //   const formData = new FormData();
  //   formData.append("profileImage", file);

  //   try {
  //     const response = await axios.post("api/user/upload-image", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     onSuccess(response.data.imagePath); // Assuming the backend returns the image path
  //   } catch (error) {
  //     onError(new Error("Upload failed"));
  //   }
  // };

  // function normFile(e) {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // }

  return (
    <div>
      <div className="row">
        {/* <div className="col-md-4">
          <Form.Item
            name="profileImage"
            label="Profile Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="profileImage"
              listType="picture"
              customRequest={customRequest}
            >
              {uploadButton}
            </Upload>
          </Form.Item>
        </div> */}

        {/* <div className="col-md-8"></div> */}

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

        <div className="col-md-4">
          <Form.Item name="linkedIn" label="LinkedIn profile">
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="github" label="Github profile">
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-8"></div>

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
