import React, { useState } from "react";
import "../styles/SkillsInformation.css";

function SkillsInformation({ data }) {
  const [skills, setSkills] = data;
  const [isVisible, setIsVisible] = useState(false);

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
          setIsVisible(!isVisible);
        }}
      >
        Skills
      </button>

      {isVisible && (
        <>
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
                </button>
                <br /> <br />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SkillsInformation;
