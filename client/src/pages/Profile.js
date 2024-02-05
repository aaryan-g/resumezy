import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Tabs } from "antd";

const items = [
  {
    key: "1",
    label: "Personal Information",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Skills and Education",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Experience / Projects",
    children: "Content of Tab Pane 3",
  },
];

function Profile() {
  return (
    <DefaultLayout>
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Tabs defaultActiveKey="1" items={items} />;
      </div>
    </DefaultLayout>
  );
}

export default Profile;
