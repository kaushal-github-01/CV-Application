import "./App.css";
import "./styles/GeneralInformation.css";
import "./styles/Skills.css";
import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import SkillsInformation from "./components/SkillsInformation";
import EducationalExperience from "./components/EducationalExperience";

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

  return (
    <>
      <div id="component">
        <section id="EditSection">
          <GeneralInformation data={[GeneralInfo, setGeneralInfo]} />
          <SkillsInformation data={[skills, setSkills]} />
          <EducationalExperience data={[eduExp, setEduExp]} />
        </section>

        <section id="ViewSection">
          <div id="CVTop">
            <h1 id="CVName">{GeneralInfo.name}</h1>
            <p id="CVTitle">{GeneralInfo.title}</p>
          </div>
          <hr className="cvLineBreak" />
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
          </div>
          <hr className="cvLineBreak" />
          <div id="CVSkills">
            <h2>Skills</h2>
            <div id="cv-skill-list">
              {skills.map((skill, index) => (
                <div key={index}>
                  {" "}
                  {/* Important: Add a unique key */}
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <hr className="cvLineBreak" />
        </section>
      </div>
    </>
  );
}

export default App;
export { HandleBtnClick };
