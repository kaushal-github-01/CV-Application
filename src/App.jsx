import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationalExperience from "./Components/EducationalExperience";

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
        {props.text}: <input /> <br /> <br />
      </label>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <GeneralInfo />
        <EducationalExperience />
      </div>
    </>
  );
}

export default App;
export { manageDisplay, LabelInput };
