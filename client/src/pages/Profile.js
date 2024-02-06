import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Tabs } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEdu from "../components/SkillsEdu";
import ExpProjects from "../components/ExpProjects";

const items = [
  {
    key: "1",
    label: "Personal Information",
    children: <PersonalInfo />,
  },
  {
    key: "2",
    label: "Skills and Education",
    children: <SkillsEdu />,
  },
  {
    key: "3",
    label: "Experience / Projects",
    children: <ExpProjects />,
  },
];

function Profile() {
  return (
    <DefaultLayout>
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log(values);
          }}
        >
          <Tabs defaultActiveKey="1" items={items} />
          <button htmlType="Submit">UPDATE</button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
