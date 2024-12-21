import { HandleBtnClick } from "../App";
import React, { useState } from "react";
import "../styles/Skills.css";

function SkillsInformation({ data }) {
  const skills = data[0];
  const setSkills = data[1];

  const handleAddSkill = () => {
    setSkills([...skills, ""]); // Add a new empty string to the skills array
  };

  const handleInputChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  return (
    <>
      <button
        className="mainBtn"
        onClick={() => {
          const skillSubButton = document.getElementById("skill-sub-button");
          const skillFolder = document.getElementById("skill-folder");

          HandleBtnClick(skillSubButton);
          HandleBtnClick(skillFolder);
        }}
      >
        Skills
      </button>
      <button
        id="skill-sub-button"
        className="sub-button"
        onClick={handleAddSkill}
      >
        Add Skill
      </button>
      <div id="skill-folder">
        {skills.map((skill, index) => (
          <div key={index}>
            {" "}
            {/* Important: Add a unique key */}
            <label>
              <input
                type="text"
                value={skill}
                onChange={(event) => handleInputChange(index, event)}
              />{" "}
            </label>
            <button
              onClick={() => {
                const newSkills = [...skills];
                newSkills.splice(index, 1);
                setSkills(newSkills);
              }}
            >
              Remove
            </button>{" "}
            <br /> <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsInformation;
