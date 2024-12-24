import React, { useState } from "react";

function WorkExperience({ data }) {
  const [workExp, setWorkExp] = data;
  const [isVisible, setIsVisible] = useState(false);

  const handleAddExp = () => {
    setWorkExp([
      ...workExp,
      { position: "", company: "", duration: "", responsibilities: "" },
    ]);
  };

  const handleInputChange = (index, event) => {
    const newWorkExp = [...workExp];
    const { name, value } = event.target;
    newWorkExp[index][name] = value;
    setWorkExp(newWorkExp);
  };

  return (
    <>
      <button
        className="mainBtn"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Work Experience
      </button>

      {isVisible && (
        <>
          <button className="sub-button" onClick={handleAddExp}>
            Add Experience
          </button>
          <div id="work-exp-folder">
            {workExp.map((exp, index) => (
              <div key={index}>
                <label>
                  Position:{" "}
                  <input
                    type="text"
                    name="position"
                    value={exp.position || ""}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>{" "}
                <br />
                <br />{" "}
                <label>
                  Company:{" "}
                  <input
                    type="text"
                    name="company"
                    value={exp.company || ""} // Handle cases where exp might be undefined
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
                </label>
                <br />
                <br />
                <label>
                  Responsibilities: <br />
                  <textarea
                    name="responsibilities"
                    value={exp.responsibilities || ""}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>
                <br />
                <button
                  onClick={() => {
                    const newWorkExp = [...workExp];
                    newWorkExp.splice(index, 1);
                    setWorkExp(newWorkExp);
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
    </>
  );
}

export default WorkExperience;
