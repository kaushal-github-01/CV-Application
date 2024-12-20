import "./App.css";
import "./styles/GeneralInformation.css";
import "./styles/Skills.css";
import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import SkillsInformation from "./components/SkillsInformation";

function HandleBtnClick(item) {
  if (item.style.display === "block") {
    item.style.display = "none";
  } else {
    item.style.display = "block";
  }
}

function handleInputChange(data) {
  const event = data[0];
  const GeneralInformationData = data[1];
  const setGeneralInformationData = data[2];

  setGeneralInformationData({
    ...GeneralInformationData,
    [event.target.name]: event.target.value,
  });
}

function App() {
  const [GeneralInformationData, setGeneralInformationData] = useState({
    name: "John Smith",
    title: "Finance Expert",
    number: 1234567890,
    email: "john@smith.com",
    address: "ABC street, Old City",
  });

  return (
    <>
      <div id="component">
        <section id="EditSection">
          <GeneralInformation
            data={[
              GeneralInformationData,
              setGeneralInformationData,
              handleInputChange,
            ]}
          />
          <SkillsInformation />
        </section>

        <section id="ViewSection">
          <div id="CVTop">
            <h1 id="CVName">{GeneralInformationData.name}</h1>
            <p id="CVTitle">{GeneralInformationData.title}</p>
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
              <p>{GeneralInformationData.number}</p>
            </div>
            <div>
              <img
                className="contactSectionIcons"
                src="../src/assets/email.png"
                alt="number img"
              />
              <p>{GeneralInformationData.email}</p>
            </div>
            <div>
              <img
                className="contactSectionIcons"
                src="../src/assets/address.png"
                alt="number img"
              />
              <p>{GeneralInformationData.address}</p>
            </div>
            <hr className="cvLineBreak" />
          </div>
          <div id="CVSkills">
            <h2>Skills</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
export { HandleBtnClick };
