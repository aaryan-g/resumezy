import React from "react";
import "../../resources/templates.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("RESUMEZY-users"));
  return (
    <div className="template1-parent">
      <div className="top d-flex flex-column">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
      <div className="divider mt-3"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-3">
        <h3
          style={{ backgroundColor: "lightgray", padding: 6, marginBottom: 20 }}
        >
          SUMMARY
        </h3>
        <p>{user.careerObjective}</p>
      </div>
      {/* <div className="divider mt-4"></div> */}
      <div className="education mt-4">
        <h3
          style={{ backgroundColor: "lightgray", padding: 6, marginBottom: 20 }}
        >
          EDUCATION
        </h3>
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6>
              <p>
                <b>{education.qualification}</b> with{" "}
                <b>{education.percentage}</b> from {education.institution}
              </p>
            </div>
          );
        })}
      </div>
      <div className="experience mt-4">
        <h3
          style={{ backgroundColor: "lightgray", padding: 6, marginBottom: 20 }}
        >
          EXPERIENCE
        </h3>
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{exp.range} : </b>
              </h6>
              <p>
                <b>{exp.company}</b> in <b>{exp.location}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div className="projects mt-4">
        <h3
          style={{ backgroundColor: "lightgray", padding: 6, marginBottom: 20 }}
        >
          PROJECTS
        </h3>
        {user.projects.map((project) => {
          return (
            <div className="d-flex  flex-column">
              <h6>
                <b>
                  {project.title} ({project.range}){" "}
                </b>
              </h6>
              <p>{project.description}</p>
              <br />
            </div>
          );
        })}
      </div>
      <div className="skills mt-2">
        <h3
          style={{ backgroundColor: "lightgray", padding: 6, marginBottom: 20 }}
        >
          SKILLS
        </h3>
        {user.skills.map((skill) => {
          return (
            <div className="d-flex  flex-column">
              <p>{skill.technology}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Template2;
