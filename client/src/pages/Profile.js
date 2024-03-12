import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Spin, Tabs, message } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEdu from "../components/SkillsEdu";
import ExpProjects from "../components/ExpProjects";
import axios from "axios";
import AchieveHobbies from "../components/AchieveHobbies";

const items = [
  {
    key: "1",
    label: "Personal Information",
    children: <PersonalInfo />,
  },
  {
    key: "2",
    label: "Education | Skills | Certifications",
    children: <SkillsEdu />,
  },
  {
    key: "3",
    label: "Experience | Projects",
    children: <ExpProjects />,
  },
  {
    key: "4",
    label: "Achievements | Interests",
    children: <AchieveHobbies />,
  },
];

function Profile() {
  const user = JSON.parse(localStorage.getItem("RESUMEZY-users"));
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("RESUMEZY-users", JSON.stringify(result.data));
      console.log(result.data);
      setLoading(false);
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Something went wrong :(");
    }
  };
  // const onFinish = async (values) => {
  //   setLoading(true);
  //   try {
  //     // Construct FormData
  //     const formData = new FormData();
  //     console.log(Object);
  //     Object.keys(values).forEach((key) => {
  //       if (key === "profileImage" && values[key].fileList) {
  //         // Assuming the fileList is an array of files
  //         values[key].fileList.forEach((file) => {
  //           formData.append(key, file.originFileObj);
  //         });
  //       } else {
  //         formData.append(key, values[key]);
  //       }
  //     });

  //     // Append user ID to FormData
  //     formData.append("_id", user._id);
  //     console.log(formData);

  //     // Send FormData to the server
  //     const result = await axios.post("api/user/update", formData);

  //     localStorage.setItem("RESUMEZY-users", JSON.stringify(result.data));
  //     console.log(result.data);
  //     setLoading(false);
  //     message.success("Profile updated successfully");
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //     message.error("Something went wrong :(");
  //   }
  // };
  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4>
          <b>Update Profile</b>
        </h4>
        <hr />
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1" items={items} />
          <button htmlType="Submit">UPDATE</button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
