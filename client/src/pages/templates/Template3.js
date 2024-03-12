import React from "react";
import "../../resources/template3.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Template3() {
  const user = JSON.parse(localStorage.getItem("RESUMEZY-users"));
  return (
    <div className="template4-parent">
      <div class="left-side">
        <div className="top d-flex flex-column">
          <h1>
            <b>
              {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
            </b>
          </h1>
          <br></br>
          <br></br>
          <div className="contact mt-3">
            <h3
              style={{
                backgroundColor: "#323b4c",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 0,
              }}
            >
              Contact
            </h3>
            <div
              className="divider mt-3"
              style={{ backgroundColor: "white", marginBottom: 15 }}
            ></div>
            <p>
              <EmailIcon fontSize="small" /> {user.email}
            </p>
            <p>
              <HomeIcon fontSize="small" /> {user.address}
            </p>
            <p>
              <PhoneIcon fontSize="small" /> {user.mobileNumber}
            </p>
            {user.linkedIn.length !== 0 && (
              <p>
                <LinkedInIcon fontSize="small" /> {user.linkedIn}
              </p>
            )}
            {user.github.length !== 0 && (
              <p>
                <GitHubIcon fontSize="small" /> {user.github}
              </p>
            )}
          </div>
        </div>
        <br></br>
        <div className="skills mt-3">
          <h3
            style={{
              backgroundColor: "#323b4c",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 0,
            }}
          >
            Skills
          </h3>
          <div
            className="divider mt-3"
            style={{ backgroundColor: "white", marginBottom: 15 }}
          ></div>
          {user.skills.map((skill) => {
            return <p>{skill.technology}</p>;
          })}
        </div>
        <br></br>

        {user.certifications.length !== 0 && (
          <>
            <div className="certifications mt-3">
              <h3
                style={{
                  backgroundColor: "#323b4c",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 0,
                }}
              >
                Certifications
              </h3>
              <div
                className="divider mt-3"
                style={{ backgroundColor: "white", marginBottom: 15 }}
              ></div>
              {user.certifications.map((cert) => {
                return <p>{cert.certification}</p>;
              })}
            </div>
            <br></br>
          </>
        )}

        <div className="interests mt-3">
          <h3
            style={{
              backgroundColor: "#323b4c",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 0,
            }}
          >
            Interests
          </h3>
          <div
            className="divider mt-3"
            style={{ backgroundColor: "white", marginBottom: 15 }}
          ></div>
          {user.interests.map((interest) => {
            return <p>{interest.interest}</p>;
          })}
        </div>
      </div>

      <div class="right-side">
        <div className="objective ">
          <h3
            style={{
              color: "#323b4c",
              backgroundColor: "white",
            }}
          >
            Summary
          </h3>
          <div
            className="divider mt-3"
            style={{ backgroundColor: "#323b4c", marginBottom: 15 }}
          ></div>
          <p>{user.careerObjective}</p>
        </div>

        <div className="education mt-3">
          <h3
            style={{
              color: "#323b4c",
              backgroundColor: "white",
            }}
          >
            Education
          </h3>
          <div
            className="divider mt-3"
            style={{ backgroundColor: "#323b4c", marginBottom: 15 }}
          ></div>
          {user.education.map((education) => {
            return (
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <h6>
                    <b>{education.qualification}</b>
                  </h6>
                  <p>{education.institution}</p>
                </div>
                <div>
                  <h6>
                    <b>{education.range}</b>
                  </h6>
                </div>
              </div>
            );
          })}
        </div>

        {user.experience.length !== 0 && (
          <>
            <div className="experience mt-3">
              <h3
                style={{
                  color: "#323b4c",
                  backgroundColor: "white",
                }}
              >
                Experience
              </h3>
              <div
                className="divider mt-3"
                style={{ backgroundColor: "#323b4c", marginBottom: 15 }}
              ></div>
              {user.experience.map((exp) => {
                return (
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6>
                        <b>{exp.company}</b> in {exp.location}
                      </h6>
                    </div>
                    <div>
                      <h6>
                        <b>{exp.range}</b>
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {user.projects.length !== 0 && (
          <>
            <div className="projects mt-3">
              <h3
                style={{
                  color: "#323b4c",
                  backgroundColor: "white",
                }}
              >
                Projects
              </h3>
              <div
                className="divider mt-3"
                style={{ backgroundColor: "#323b4c", marginBottom: 15 }}
              ></div>
              {user.projects.map((project) => {
                return (
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>
                        <b>{project.title}</b>
                      </h6>
                      <h6>
                        <b>{project.range}</b>
                      </h6>
                    </div>
                    <div>
                      <p>{project.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {user.achievements.length !== 0 && (
          <>
            <div className="projects mt-3">
              <h3
                style={{
                  color: "#323b4c",
                  backgroundColor: "white",
                }}
              >
                Achievements
              </h3>
              <div
                className="divider mt-3"
                style={{ backgroundColor: "#323b4c", marginBottom: 15 }}
              ></div>
              {user.achievements.map((ach) => {
                return (
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>
                        <b>{ach.title}</b>
                      </h6>
                      <h6>
                        <b>{ach.year}</b>
                      </h6>
                    </div>
                    <div>
                      <p>{ach.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Template3;
