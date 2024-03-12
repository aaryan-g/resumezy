import React from "react";
import "../../resources/templates.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("RESUMEZY-users"));
  return (
    <div className="template1-parent">
      <div className="top d-flex justify-content-between">
        <div>
          <h1>{user.firstName.toUpperCase()}</h1>
          <h1>{user.lastName.toUpperCase()}</h1>
        </div>

        <div>
          <p>{user.email}</p>
          <p>{user.mobileNumber}</p>
          {user.linkedIn.length !== 0 && <p>{user.linkedIn}</p>}
          {user.github.length !== 0 && <p>{user.github}</p>}
        </div>
      </div>
      <div className="divider mt-3"></div>
      <div className="objective mt-3">
        <h3>SUMMARY</h3>
        <hr />
        <p>{user.careerObjective}</p>
      </div>
      {/* <div className="divider mt-4"></div> */}
      <div className="education mt-4">
        <h3>EDUCATION</h3>
        <hr />
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
        <h3>EXPERIENCE</h3>
        <hr />
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
        <h3>PROJECTS</h3>
        <hr />
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
        <h3>SKILLS</h3>
        <hr />
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

export default Template1;
