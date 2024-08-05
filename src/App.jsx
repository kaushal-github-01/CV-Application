import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function addSkill() {
    console.log("All working fine");
    const skills = document.getElementById("skills");

    const label = document.createElement("label");
    label.innerText = "Enter your Skill: ";
    const input = document.createElement("input");
    input.type = "text";
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    skills.appendChild(label);
    skills.appendChild(input);
    skills.appendChild(br1);
    skills.appendChild(br2);
  }

  return (
    <>
      <h1>General Information</h1>
      <form>
        <label>Enter your name: </label>
        <input type="text" name="name" />
        <br /> <br />
        <label>Enter your email: </label>
        <input type="email" name="email" />
        <br /> <br />
        <label>Enter your phone no: </label>
        <input type="number" name="number" />
        <br /> <br />
        <label>Enter your website (Optional): </label>
        <input type="text" name="website" />
        <br /> <br />
        <label>Enter your address: </label>
        <input type="text" name="adress" />
      </form>

      <h1>Skills</h1>
      <div id="skills"></div>
      <button onClick={addSkill}>Add a skill</button>
    </>
  );
}

export default App;
