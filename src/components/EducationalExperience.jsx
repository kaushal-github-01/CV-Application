import { HandleBtnClick } from "../App";
import "../styles/EducationalExperience.css";
import React, { useState } from "react"; // Import useState hook

// function EducationalExperience({ data }) {
//   const eduExp = data[0];
//   const setEduExp = data[1];

//   function handleAddEducation() {
//     setEduExp([...eduExp, ""]); // Add a new empty string to the EduExp array
//   }

//   const handleInputChange = (index, event) => {
//     const newEduExp = [...eduExp];
//     newEduExp[index] = event.target.value;
//     setEduExp(newEduExp);
//   };

//   return (
//     <>
//       <button
//         className="mainBtn"
//         onClick={() => {
//           const eduExpSubButton = document.getElementById("edu-exp-sub-button");
//           HandleBtnClick(eduExpSubButton);
//         }}
//       >
//         Educational Experience
//       </button>

//       <button
//         id="edu-exp-sub-button"
//         className="sub-button"
//         onClick={handleAddEducation}
//       >
//         Add Education
//       </button>
//       <div id="edu-exp-folder">
//         {" "}
//         {eduExp.map((exp, index) => (
//           <div key={index}>
//             {" "}
//             {/* Important: Add a unique key */}
//             <label>
//               Institute:{" "}
//               <input
//                 type="text"
//                 value={exp}
//                 onChange={(event) => handleInputChange(index, event)}
//               />{" "}
//             </label>{" "}
//             <br /> <br />
//             <label>
//               Stream:{" "}
//               <input
//                 type="text"
//                 value={exp}
//                 onChange={(event) => handleInputChange(index, event)}
//               />{" "}
//             </label>
//             <button
//               onClick={() => {
//                 const newEduExp = [...eduExp];
//                 newEduExp.splice(index, 1);
//                 setEduExp(newEduExp);
//               }}
//             >
//               Remove
//             </button>{" "}
//             <br /> <br />
//             <br />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

function EducationalExperience({ data }) {
  const [eduExp, setEduExp] = data; // Destructure the props

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
          const eduExpSubButton = document.getElementById("edu-exp-sub-button");
          const eduExpFolder = document.getElementById("edu-exp-folder");

          HandleBtnClick(eduExpSubButton);
          HandleBtnClick(eduExpFolder);
        }}
      >
        Educational Experience
      </button>

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
                value={exp.institute || ""} // Handle cases where exp might be undefined
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <br />
            <br />
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
  );
}

export default EducationalExperience;
