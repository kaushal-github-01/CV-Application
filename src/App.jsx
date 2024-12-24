import "./App.css";
import "./styles/GeneralInformation.css";
import "./styles/Skills.css";
import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import SkillsInformation from "./components/SkillsInformation";
import EducationalExperience from "./components/EducationalExperience";
import Profile from "./components/Profile";
import WorkExperience from "./components/WorkExperience";

function HandleBtnClick(item) {
  if (item.style.display === "block") {
    item.style.display = "none";
  } else {
    item.style.display = "block";
  }
}

function App() {
  const [GeneralInfo, setGeneralInfo] = useState({
    name: "John Smith",
    title: "Finance Expert",
    number: 1234567890,
    email: "john@smith.com",
    address: "ABC street, Old City",
  });
  const [skills, setSkills] = useState([]);
  const [eduExp, setEduExp] = useState([]);
  const [profile, setProfile] = useState("This is 'About Me'");
  const [workExp, setWorkExp] = useState([]);

  return (
    <>
      <div id="component">
        <section id="EditSection">
          <GeneralInformation data={[GeneralInfo, setGeneralInfo]} />
          <SkillsInformation data={[skills, setSkills]} />
          <EducationalExperience data={[eduExp, setEduExp]} />
          <Profile data={[profile, setProfile]} />
          <WorkExperience data={[workExp, setWorkExp]} />
        </section>

        <section id="ViewSection">
          <div id="CVTop">
            <h1 id="CVName">{GeneralInfo.name}</h1>
            <p id="CVTitle">{GeneralInfo.title}</p>
            <hr className="cvLineBreak" />
          </div>
          <div id="cv-bottom-section">
            <div id="cv-contact-skill-education">
              <div id="CVContacts">
                <h2>Contacts</h2>
                <div>
                  <img
                    className="contactSectionIcons"
                    src="../src/assets/number.png"
                    alt="number img"
                  />
                  <p>{GeneralInfo.number}</p>
                </div>
                <div>
                  <img
                    className="contactSectionIcons"
                    src="../src/assets/email.png"
                    alt="number img"
                  />
                  <p>{GeneralInfo.email}</p>
                </div>
                <div>
                  <img
                    className="contactSectionIcons"
                    src="../src/assets/address.png"
                    alt="number img"
                  />
                  <p>{GeneralInfo.address}</p>
                </div>
                <hr className="cvLineBreak" />
              </div>
              <div id="CVSkills">
                <h2>Skills</h2>
                <div id="cv-skill-list">
                  {skills.map((skill, index) => (
                    <div key={index}> {skill}</div>
                  ))}
                </div>
                <hr className="cvLineBreak" />
              </div>
              <div id="cv-education">
                <h2>Education</h2>
                <div id="cv-education-list">
                  {eduExp.map((exp, index) => (
                    <div key={index}>
                      <h4> {exp.institute}</h4>
                      <p> {exp.stream}</p>
                      <p>{exp.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="cv-profile-work">
              <div id="cv-profile">
                <h2>Profile</h2>
                <p>{profile}</p>
                <hr className="cvLineBreak" />
              </div>
              <div id="cv-work">
                <h2>Work Experience</h2>
                <div id="cv-work-list">
                  {workExp.map((exp, index) => (
                    <div key={index}>
                      <h4> {exp.position}</h4>
                      <div id="work-company-duration">
                        <p>{exp.company}</p>
                        <p>{exp.duration}</p>
                      </div>
                      <p>
                        {exp.responsibilities
                          .split("\n")
                          .map((responsibility, subIndex) => (
                            <p key={subIndex}>• {responsibility}</p>
                          ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
export { HandleBtnClick };
