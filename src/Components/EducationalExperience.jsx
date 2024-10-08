import "../Styles/EducationalExperience.css";
import { manageDisplay, LabelInput } from "../App";
import { createRoot } from "react-dom/client";

function EducationalExperience() {
  return (
    <>
      <button
        className="main2Btn"
        onClick={() => {
          const item1 = document.getElementById("addEduExpBtn");
          const item2 = document.getElementById("educationalExpForm");
          manageDisplay(item1);
          manageDisplay(item2);
        }}
      >
        Educational Experience
      </button>

      <form id="educationalExpForm"></form>

      <button
        id="addEduExpBtn"
        onClick={() => {
          const form = document.getElementById("educationalExpForm");
          const div = document.createElement("div");
          const root = createRoot(div);
          root.render(
            <>
              <LabelInput text="Degree Name" />
              <LabelInput text="Institute Name" />
              <LabelInput text="Duration" />
            </>
          );
          form.appendChild(div);
        }}
      >
        Add Educational Experience
      </button>
    </>
  );
}

export default EducationalExperience;
