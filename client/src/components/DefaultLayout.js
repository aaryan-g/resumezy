import React from "react";
import "./../resources/defaultLayout.css";
import { Button, Dropdown } from "antd";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("RESUMEZY-users"));
  const navigate = useNavigate();
  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };

  const items = [
    {
      key: "1",
      label: (
        <Link style={{ textDecorationLine: "none" }} to="/home">
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link style={{ textDecorationLine: "none" }} to="/profile">
          Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("RESUMEZY-users");
            navigate("/login");
          }}
        >
          Logout
        </span>
      ),
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/Home")} style={{ cursor: "pointer" }}>
          RESUMEZY
        </h1>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{ overflow: "scroll" }}>
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
