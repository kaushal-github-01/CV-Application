import "../styles/EducationalExperience.css";
import React, { useState } from "react";

function EducationalExperience({ data }) {
  const [eduExp, setEduExp] = data;
  const [isVisible, setIsVisible] = useState(false);

  const handleAddExp = () => {
    setEduExp([...eduExp, { institute: "", stream: "", duration: "" }]);
  };

  const handleInputChange = (index, event) => {
    const newEduExp = [...eduExp];
    const { name, value } = event.target;
    newEduExp[index][name] = value;
    setEduExp(newEduExp);
  };

  return (
    <>
      <button
        className="mainBtn"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Educational Experience
      </button>

      {isVisible && (
        <>
          <button
            id="edu-exp-sub-button"
            className="sub-button"
            onClick={handleAddExp}
          >
            Add Education
          </button>
          <div id="edu-exp-folder">
            {eduExp.map((exp, index) => (
              <div key={index}>
                <label>
                  Institute:{" "}
                  <input
                    type="text"
                    name="institute"
                    value={exp.institute || ""} //Handle cases where exp might be undefined
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>
                <br />
                <br />{" "}
                <label>
                  Stream:{" "}
                  <input
                    type="text"
                    name="stream"
                    value={exp.stream || ""} // Handle cases where exp might be undefined
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>
                <br />
                <br />
                <label>
                  Duration:{" "}
                  <input
                    type="text"
                    name="duration"
                    value={exp.duration || ""} // Handle cases where exp might be undefined
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>{" "}
                <button
                  onClick={() => {
                    const newEduExp = [...eduExp];
                    newEduExp.splice(index, 1);
                    setEduExp(newEduExp);
                  }}
                >
                  Remove
                </button>
                <br />
                <br />
                <br />
              </div>
            ))}
          </div>
        </>
      )}

      {/* <button
        id="edu-exp-sub-button"
        className="sub-button"
        onClick={handleAddExp}
      >
        Add Education
      </button> */}
    </>
  );
}

export default EducationalExperience;
