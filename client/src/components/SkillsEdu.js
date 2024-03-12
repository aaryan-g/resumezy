import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function SkillsEdu() {
  return (
    <div>
      <h5>Education</h5>
      <hr />
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
                  <Form.Item
                    {...restField}
                    name={[name, "action"]}
                    label=""
                    className="minus-icon"
                  >
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>Skills</h5>
      <hr />
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

                <div className="col-md-7">
                  <Form.Item
                    {...restField}
                    name={[name, "action"]}
                    label=""
                    className="minus-icon"
                  >
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
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
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>Certifications / Coursework</h5>
      <hr />
      <Form.List name="certifications">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "certification"]}
                    label="Certification / Course"
                    rules={[
                      { required: true, message: "Missing certification" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "from"]}
                    label="From / By"
                    rules={[{ required: true, message: "Missing description" }]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                    label="Year"
                    rules={[{ required: true, message: "Missing year" }]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className="col-md-4">
                  <Form.Item
                    {...restField}
                    name={[name, "action"]}
                    label=""
                    className="minus-icon"
                  >
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
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
                Add Certification
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}
const styles = `
  .minus-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default SkillsEdu;
