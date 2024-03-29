import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function ExpProjects() {
  return (
    <div>
      <h5>Experience</h5>
      <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "company"]}
                    label="Company"
                    rules={[
                      { required: true, message: "Missing qualification" },
                    ]}
                  >
                    <Input placeholder="Company name" />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "duration"]}
                    label="Duration"
                    rules={[{ required: true, message: "Missing percentage" }]}
                  >
                    <Input placeholder="(In years)" />
                  </Form.Item>
                </div>

                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "location"]}
                    label="Location"
                    rules={[{ required: true, message: "Missing institution" }]}
                  >
                    <Input placeholder="eg. Pune" />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                    label="Year Range"
                    rules={[{ required: true, message: "Missing year range" }]}
                  >
                    <Input placeholder="From - To" />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    style={{ display: "flex", alignItems: "center" }} // Align vertically with input fields
                    {...restField}
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>Projects</h5>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    label="Project Title"
                    rules={[{ required: true, message: "Missing technology" }]}
                  >
                    <Input placeholder="eg. Project Title" />
                  </Form.Item>
                </div>

                <div className="col-md-5">
                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    label="Description"
                    rules={[{ required: true, message: "Missing rating" }]}
                  >
                    <TextArea placeholder="Brief description of your project." />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                    label="Year Range"
                    rules={[{ required: true, message: "Missing year range" }]}
                  >
                    <Input placeholder="From - To" />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    style={{ display: "flex", alignItems: "center" }} // Align vertically with input fields
                    {...restField}
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default ExpProjects;
