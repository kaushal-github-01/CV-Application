import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./App.css";
import "./styles/GeneralInformation.css";
import "./styles/SkillsInformation.css";
import GeneralInformation from "./components/GeneralInformation";
import SkillsInformation from "./components/SkillsInformation";
import EducationalExperience from "./components/EducationalExperience";
import Profile from "./components/Profile";
import WorkExperience from "./components/WorkExperience";

import NumberIcon from "./assets/number.png";
import EmailIcon from "./assets/email.png";
import AddressIcon from "./assets/address.png";

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

  // Ref for the ViewSection element
  const viewSectionRef = useRef(null);

  const handlePrint = async () => {
    const input = viewSectionRef.current;
    const canvas = await html2canvas(input, {
      scale: window.devicePixelRatio, // Use device pixel ratio
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate scaling factor to fit content within A4 page
    const widthRatio = pdfWidth / canvasWidth;
    const heightRatio = pdfHeight / canvasHeight;
    const scaleFactor = Math.min(widthRatio, heightRatio); // Use the smaller ratio to fit within both width and height

    const imgWidth = canvasWidth * scaleFactor;
    const imgHeight = canvasHeight * scaleFactor;

    pdf.addImage(
      canvas.toDataURL("image/jpeg", 0.9),
      "JPEG",
      (pdfWidth - imgWidth) / 2,
      0,
      imgWidth,
      imgHeight
    ); // Center horizontally

    pdf.save("your_cv.pdf");
  };

  return (
    <>
      <div id="component">
        <section id="EditSection">
          <GeneralInformation data={[GeneralInfo, setGeneralInfo]} />
          <SkillsInformation data={[skills, setSkills]} />
          <EducationalExperience data={[eduExp, setEduExp]} />
          <Profile data={[profile, setProfile]} />
          <WorkExperience data={[workExp, setWorkExp]} />
          <button className="mainBtn" onClick={handlePrint}>
            Print CV
          </button>
        </section>

        <section id="ViewSection" ref={viewSectionRef}>
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
                    src={NumberIcon}
                    alt="num img"
                  />
                  <p>{GeneralInfo.number}</p>
                </div>
                <div>
                  <img
                    className="contactSectionIcons"
                    src={EmailIcon}
                    alt="email img"
                  />
                  <p>{GeneralInfo.email}</p>
                </div>
                <div>
                  <img
                    className="contactSectionIcons"
                    src={AddressIcon}
                    alt="address img"
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
                      <p>{exp.duration}</p> <br />
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
                      <h3> {exp.position}</h3>
                      <div id="work-company-duration">
                        <p>{exp.company}</p>
                        <p>{exp.duration}</p>
                      </div>
                      <p>
                        {exp.responsibilities
                          .split("\n\n")
                          .map((responsibility, subIndex) => (
                            <p key={subIndex}>• {responsibility}</p>
                          ))}
                      </p>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="cvLineBreak" />
        </section>
      </div>
    </>
  );
}

export default App;
