import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function AchieveHobbies() {
  return (
    <div>
      <h5>Achievements</h5>
      <hr />
      <Form.List name="achievements">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    label="Achievement"
                    rules={[{ required: true, message: "Missing achievement" }]}
                  >
                    <Input placeholder="eg. Winner / Runner-up" />
                  </Form.Item>
                </div>

                <div className="col-md-5">
                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    label="Description"
                    rules={[{ required: true, message: "Missing description" }]}
                  >
                    <TextArea placeholder="eg. Secured X position at ABC event/competition etc." />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "year"]}
                    label="Year"
                    rules={[{ required: true, message: "Missing year" }]}
                  >
                    <Input placeholder="eg. Feb, 2024" />
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
                Add Achievement
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>Interests / Hobbies</h5>
      <hr />
      <Form.List name="interests">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="row">
                <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "interest"]}
                    label="Interest"
                    rules={[{ required: true, message: "Missing interest" }]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className="col-md-5">
                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    label="Related achievements / participations"
                  >
                    <TextArea />
                  </Form.Item>
                </div>

                <div className="col-md-2">
                  <Form.Item {...restField} name={[name, "year"]} label="Year">
                    <Input />
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
                Add Interest
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default AchieveHobbies;
