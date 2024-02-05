import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function SkillsEdu() {
  return (
    <div>
      <h6>Education</h6>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "qualification"]}
                    label="Qualification"
                    rules={[
                      { required: true, message: "Missing qualification" },
                    ]}
                  >
                    <Input placeholder="eg. Bachelors / Masters" />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "percentage"]}
                    label="Percentage / Score"
                    rules={[{ required: true, message: "Missing percentage" }]}
                  >
                    <Input placeholder="eg. 95% or 9.1/10.0" />
                  </Form.Item>
                </div>

                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "institution"]}
                    label="Institution"
                    rules={[{ required: true, message: "Missing institution" }]}
                  >
                    <Input placeholder="Institution" />
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
                  <MinusCircleOutlined
                    style={{ fontSize: 25, color: "tomato", marginTop: "32px" }}
                    onClick={() => remove(name)}
                  />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h6>Skills</h6>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "technology"]}
                    label="Technology"
                    rules={[{ required: true, message: "Missing technology" }]}
                  >
                    <Input placeholder="eg. Java" />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "rating"]}
                    label="Rating (out of 10)"
                    rules={[{ required: true, message: "Missing rating" }]}
                  >
                    <Input placeholder="eg. 8" />
                  </Form.Item>
                </div>

                <div className="col-md-6">
                  <MinusCircleOutlined
                    style={{ fontSize: 25, color: "tomato", marginTop: "32px" }}
                    onClick={() => remove(name)}
                  />
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
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default SkillsEdu;
