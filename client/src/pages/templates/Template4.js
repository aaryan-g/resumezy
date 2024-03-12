import React from "react";
import "../../resources/template3.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";

function Template5() {
  const user = JSON.parse(localStorage.getItem("RESUMEZY-users"));
  return (
    <div className="template5-parent">
      <div className="head d-flex flex-column">
        <h1 style={{ textAlign: "center" }}>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div className="d-flex justify-content-between mt-1">
          <p>
            <EmailIcon fontSize="small" /> {user.email}
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
      <hr style={{ opacity: "1", marginInline: 42, marginTop: 10 }}></hr>
      <div class="container5">
        <div class="left-side1">
          <div className="objective mt-3">
            <h3>SUMMARY</h3>

            <p>{user.careerObjective}</p>
            <hr style={{ opacity: "1", marginRight: 35 }} />
          </div>
          <div className="projects mt-3">
            <h3>SKILLS</h3>

            {user.skills.map((skill) => {
              return <p style={{ marginBottom: 2 }}>{skill.technology}</p>;
            })}
            <hr style={{ opacity: "1", marginRight: 35 }} />
          </div>

          {user.interests.length !== 0 && (
            <>
              <div className="interests mt-3">
                <h3>INTERESTS</h3>

                {user.interests.map((a) => {
                  return <p style={{ marginBottom: 2 }}>{a.interest}</p>;
                })}
                <hr style={{ opacity: "1", marginRight: 35 }} />
              </div>
            </>
          )}

          {user.certifications.length !== 0 && (
            <>
              <div className="interests mt-3">
                <h3>CERTIFICATIONS</h3>

                {user.certifications.map((c) => {
                  return <p style={{ marginBottom: 2 }}>{c.certification}</p>;
                })}
              </div>
            </>
          )}
        </div>

        <div class="right-side1">
          <div className="education mt-3">
            <h3>EDUCATION</h3>

            {user.education.map((education) => {
              return (
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <h6>
                      <b>{education.qualification}</b>
                    </h6>
                    <h6>
                      <b>{education.range}</b>
                    </h6>
                  </div>
                  <p>
                    {education.institution}
                    <br />
                    Percentage / CGPA : <b>{education.percentage}</b>
                  </p>
                </div>
              );
            })}
            <hr style={{ opacity: "1" }} />
          </div>

          {user.experience.length !== 0 && (
            <>
              <div className="experience mt-3">
                <h3>EXPERIENCE</h3>

                {user.experience.map((exp) => {
                  return (
                    <div className="d-flex align-items-center ">
                      <h6>
                        <b>{exp.range} : &nbsp;</b>
                      </h6>
                      <p style={{ marginBottom: 9 }}>
                        {" "}
                        <b>{exp.company}</b> in <b>{exp.location}</b>
                      </p>
                    </div>
                  );
                })}
                <hr style={{ opacity: "1" }} />
              </div>
            </>
          )}

          {user.projects.length !== 0 && (
            <>
              <div className="projects mt-3">
                <h3>PROJECTS</h3>

                {user.projects.map((project) => {
                  return (
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-between">
                        <h6>
                          <b>{project.title}</b>
                        </h6>
                        <h6>
                          <b>{project.range}</b>
                        </h6>
                      </div>

                      <p> {project.description}</p>
                    </div>
                  );
                })}
                <hr style={{ opacity: "1" }} />
              </div>
            </>
          )}

          {user.achievements.length !== 0 && (
            <>
              <div className="achievements mt-3">
                <h3>ACHIEVEMENTS</h3>

                {user.achievements.map((ach) => {
                  return (
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-between">
                        <h6>
                          <b>{ach.title}</b>
                        </h6>
                        <h6>
                          <b>{ach.year}</b>
                        </h6>
                      </div>

                      <p> {ach.description}</p>
                    </div>
                  );
                })}
                <hr style={{ opacity: "1" }} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template5;
