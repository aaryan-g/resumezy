import React from "react";
import "./../resources/defaultLayout.css";
import { Button, Dropdown } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

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
        <a target="_blank" rel="noopener noreferrer" href="/home">
          Home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/profile">
          Profile
        </a>
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
        <h1>RESUMEZY</h1>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
