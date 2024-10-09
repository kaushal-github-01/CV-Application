import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationalExperience from "./Components/EducationalExperience";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";

function manageDisplay(item) {
  const computedStyle = window.getComputedStyle(item);
  if (computedStyle.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}

function LabelInput(props) {
  return (
    <>
      <label>
        {props.text} <input /> <br /> <br />
      </label>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <GeneralInfo />
        <div className="LRSides">
          <div className="LeftSideContainer">
            <EducationalExperience />
            <Skills />
          </div>
          <div className="RightSideContainer">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
export { manageDisplay, LabelInput };
